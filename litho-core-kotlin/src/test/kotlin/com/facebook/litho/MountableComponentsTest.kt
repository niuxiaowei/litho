/*
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.facebook.litho

import android.content.Context
import android.graphics.Color
import android.view.View
import android.widget.TextView
import com.facebook.litho.animated.alpha
import com.facebook.litho.config.TempComponentsConfigurations
import com.facebook.litho.core.height
import com.facebook.litho.core.heightPercent
import com.facebook.litho.core.width
import com.facebook.litho.core.widthPercent
import com.facebook.litho.flexbox.flex
import com.facebook.litho.testing.LegacyLithoViewRule
import com.facebook.litho.testing.match
import com.facebook.litho.testing.testrunner.LithoTestRunner
import com.facebook.litho.view.focusable
import com.facebook.litho.view.onClick
import com.facebook.litho.view.viewTag
import com.facebook.litho.visibility.onVisible
import com.facebook.rendercore.RenderUnit
import com.facebook.rendercore.testing.ViewAssertions
import com.facebook.yoga.YogaEdge
import java.util.concurrent.atomic.AtomicBoolean
import java.util.concurrent.atomic.AtomicReference
import org.assertj.core.api.Assertions.assertThat
import org.junit.After
import org.junit.Before
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.annotation.LooperMode

@LooperMode(LooperMode.Mode.LEGACY)
@RunWith(LithoTestRunner::class)
class MountableComponentsTest {

  @Rule @JvmField val lithoViewRule = LegacyLithoViewRule()

  @Before
  fun before() {
    TempComponentsConfigurations.setDelegateToRenderCoreMount(true)
  }

  @After
  fun after() {
    TempComponentsConfigurations.restoreDelegateToRenderCoreMount()
  }

  @Test
  fun `should render mountable component`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val root =
        Column.create(c)
            .child(
                Wrapper.create(c)
                    .widthPx(100)
                    .heightPx(100)
                    .delegate(TestMountableComponent(TextView(c.androidContext), steps))
                    .paddingPx(YogaEdge.ALL, 20)
                    .backgroundColor(Color.LTGRAY)
                    .border(
                        Border.create(c)
                            .widthPx(YogaEdge.ALL, 5)
                            .color(YogaEdge.ALL, Color.BLACK)
                            .build()))
            .build()

    lithoViewRule.render { root }
    lithoViewRule.lithoView.unmountAllItems()

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT,
            LifecycleStep.ON_UNMOUNT)
  }

  @Test
  fun `width, height, focusable, viewTag styles respected when set`() {
    val testComponent =
        TestMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style = Style.width(667.px).height(668.px).focusable(true).viewTag("test_view_tag"))

    lithoViewRule.render { testComponent }

    assertThat(lithoViewRule.lithoView.childCount).isEqualTo(1)
    val testView = lithoViewRule.lithoView.getChildAt(0)

    ViewAssertions.assertThat(testView).matches(match<TextView> { bounds(0, 0, 667, 668) })

    assertThat(testView.isFocusable).isTrue()

    lithoViewRule.findViewWithTag("test_view_tag")
  }

  @Test
  fun `onClick event is dispatched when set`() {
    val wasClicked = AtomicBoolean(false)

    val testComponent =
        TestMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style =
                Style.width(667.px).height(668.px).focusable(true).viewTag("click_me").onClick {
                  wasClicked.set(true)
                })

    lithoViewRule.render { testComponent }

    assertThat(wasClicked.get()).isFalse()
    lithoViewRule.findViewWithTag("click_me").performClick()
    assertThat(wasClicked.get()).isTrue()
  }

  @Test
  fun `onVisible event is fired when set`() {
    val eventFired = AtomicBoolean(false)

    val testComponent =
        TestMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style =
                Style.width(667.px).height(668.px).focusable(true).viewTag("click_me").onVisible {
                  eventFired.set(true)
                })

    lithoViewRule.render { testComponent }

    assertThat(eventFired.get()).isTrue()
  }

  @Test
  fun `widthPercent and heightPercent is respected when set`() {
    val testComponent =
        TestMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style = Style.heightPercent(50f).widthPercent(50f))

    lithoViewRule.render {
      Row(style = Style.width(100.px).height(100.px)) { child(testComponent) }
    }

    assertThat(lithoViewRule.lithoView.childCount).isEqualTo(1)
    val testView = lithoViewRule.lithoView.getChildAt(0)

    ViewAssertions.assertThat(testView).matches(match<TextView> { bounds(0, 0, 50, 50) })
  }

  @Test
  fun `dynamic alpha is respected when set`() {
    val alpha = 0.5f
    val alphaDV: DynamicValue<Float> = DynamicValue<Float>(alpha)

    val testComponent =
        TestMountableComponent(
            TextView(lithoViewRule.context.androidContext),
            style = Style.width(100.px).height(100.px).alpha(alphaDV))

    lithoViewRule.render { testComponent }

    assertThat(lithoViewRule.lithoView.alpha).isEqualTo(alpha)

    alphaDV.set(1f)
    assertThat(lithoViewRule.lithoView.alpha).isEqualTo(1f)

    alphaDV.set(0.7f)
    assertThat(lithoViewRule.lithoView.alpha).isEqualTo(0.7f)
  }

  @Test
  fun `updating the state in mountable takes effect`() {
    lateinit var stateRef: AtomicReference<String>

    class TestComponent(val view: View) : MountableComponent() {
      override fun ComponentScope.render(): ViewMountable {
        val testState: State<String> = useState { "initial" }
        stateRef = AtomicReference(testState.value)
        return ViewMountable(view = view, updateState = { testState.update { s -> s + "_" + it } })
      }
    }

    lithoViewRule.render { TestComponent(TextView(lithoViewRule.context.androidContext)) }

    lithoViewRule.idle()

    assertThat(stateRef.get())
        .describedAs("String state is updated")
        .isEqualTo("initial_createContent_mount")
  }

  @Test
  fun `should not remeasure same mountable if size specs match`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component =
        TestMountableComponent(
            view = view,
            steps = steps,
            style = Style.width(100.px).height(100.px),
        )

    lithoViewRule.render { Column.create(c).child(component).build() }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render { Column.create(c).child(component).build() }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should not remeasure same mountable if size specs match with non exact size`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component =
        TestMountableComponent(
            view = view,
            steps = steps,
            style = Style.width(100.px).flex(grow = 1f),
        )

    lithoViewRule.render { Column.create(c).child(component).build() }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render { Column.create(c).child(component).build() }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should remeasure mountable if properties have changed`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)

    lithoViewRule.render {
      Column.create(c)
          .child(
              TestMountableComponent(
                  identity = 0,
                  view = view,
                  steps = steps,
                  style = Style.width(100.px).flex(grow = 1f),
              ))
          .build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render {
      Column.create(c)
          .child(
              TestMountableComponent(
                  identity = 1,
                  view = view,
                  steps = steps,
                  style = Style.width(100.px).flex(grow = 1f),
              ))
          .build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should not remeasure comparable mountable if the equivalence passes`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)

    lithoViewRule.render {
      Column.create(c)
          .child(
              TestMountableComponent(
                  identity = 0,
                  view = view,
                  steps = steps,
                  style = Style.width(100.px).flex(grow = 1f),
                  shouldUseComparableMountable = true,
              ))
          .build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.render {
      Column.create(c)
          .child(
              TestMountableComponent(
                  identity = 0, // ensures that equivalence call is true
                  view = TextView(c.androidContext), // ensure that field field equals fails
                  steps = steps,
                  style = Style.width(100.px).flex(grow = 1f),
                  shouldUseComparableMountable = true,
              ))
          .build()
    }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `should remeasure mountable if size specs change`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component = TestMountableComponent(identity = 0, view = view, steps = steps)

    lithoViewRule.setSizePx(800, 600).render { component }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.ON_CREATE_MOUNT_CONTENT,
            LifecycleStep.ON_MOUNT)

    steps.clear()

    lithoViewRule.setSizePx(1920, 1080).render { component }

    assertThat(LifecycleStep.getSteps(steps))
        .containsExactly(
            LifecycleStep.RENDER,
            LifecycleStep.ON_MEASURE,
            LifecycleStep.SHOULD_UPDATE,
            LifecycleStep.ON_UNMOUNT,
            LifecycleStep.ON_MOUNT)
  }

  @Test
  fun `same instance should be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val component = TestMountableComponent(identity = 0, view = view, steps = steps)

    assertThat(component.isEquivalentTo(component)).isTrue
    assertThat(component.isEquivalentTo(component, true)).isTrue
  }

  @Test
  fun `components with same prop values should be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val a = TestMountableComponent(identity = 0, view = view, steps = steps)
    val b = TestMountableComponent(identity = 0, view = view, steps = steps)
    assertThat(a.isEquivalentTo(b)).isTrue
    assertThat(a.isEquivalentTo(b, true)).isTrue
  }

  @Test
  fun `components with different prop values should not be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val a = TestMountableComponent(identity = 0, view = view, steps = steps)
    val b = TestMountableComponent(identity = 1, view = view, steps = steps)

    assertThat(a.isEquivalentTo(b)).isFalse
    assertThat(a.isEquivalentTo(b, true)).isFalse
  }

  @Test
  fun `components with different style values should not be equivalent`() {
    val c = lithoViewRule.context
    val steps = mutableListOf<LifecycleStep.StepInfo>()
    val view = TextView(c.androidContext)
    val a =
        TestMountableComponent(
            identity = 0,
            view = view,
            steps = steps,
            style = Style.width(100.px).height(100.px), /* 100 here */
        )

    val b =
        TestMountableComponent(
            identity = 0,
            view = view,
            steps = steps,
            style = Style.width(200.px).height(200.px), /* 200 here */
        )

    assertThat(a.isEquivalentTo(b, true)).isFalse
  }
}

class TestMountableComponent(
    val view: View,
    val steps: MutableList<LifecycleStep.StepInfo>? = null,
    val identity: Int = 0,
    val shouldUseComparableMountable: Boolean = false,
    style: Style? = null
) : MountableComponent(style = style) {

  override fun ComponentScope.render(): ViewMountable {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.RENDER))
    return if (shouldUseComparableMountable) {
      ComparableViewMountable(identity, view, steps)
    } else {
      ViewMountable(identity, view, steps)
    }
  }
}

open class ViewMountable(
    open val id: Int = 0,
    open val view: View,
    open val steps: MutableList<LifecycleStep.StepInfo>? = null,
    open val updateState: ((String) -> Unit)? = null,
) : SimpleMountable<View>() {

  override fun createContent(context: Context): View {
    updateState?.invoke("createContent")
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_CREATE_MOUNT_CONTENT))
    return view
  }

  override fun measure(
      context: ComponentContext,
      widthSpec: Int,
      heightSpec: Int,
      size: Size,
      previousLayoutData: Any?,
  ): ViewLayoutData {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_MEASURE))
    val width =
        if (SizeSpec.getMode(widthSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(widthSpec)
        } else {
          100
        }

    val height =
        if (SizeSpec.getMode(heightSpec) == SizeSpec.EXACTLY) {
          SizeSpec.getSize(heightSpec)
        } else {
          100
        }

    size.width = width
    size.height = height

    return ViewLayoutData(width, height)
  }

  override fun mount(c: Context, content: View, layoutData: Any?) {
    updateState?.invoke("mount")
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_MOUNT))
    layoutData as ViewLayoutData
  }

  override fun unmount(c: Context, content: View, layoutData: Any?) {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.ON_UNMOUNT))
    layoutData as ViewLayoutData
  }

  override fun shouldUpdate(
      currentMountable: SimpleMountable<View>,
      newMountable: SimpleMountable<View>,
      currentLayoutData: Any?,
      nextLayoutData: Any?
  ): Boolean {
    steps?.add(LifecycleStep.StepInfo(LifecycleStep.SHOULD_UPDATE))
    currentMountable as ViewMountable
    newMountable as ViewMountable
    return true
  }

  override fun getRenderType(): RenderUnit.RenderType = RenderUnit.RenderType.VIEW
}

class ComparableViewMountable(
    override val id: Int = 0,
    override val view: View,
    override val steps: MutableList<LifecycleStep.StepInfo>? = null,
    override val updateState: ((String) -> Unit)? = null
) : ViewMountable(id, view, steps, updateState), Equivalence<ViewMountable> {

  override fun isEquivalentTo(other: ViewMountable?): Boolean {
    return id == other?.id
  }
}

class ViewLayoutData(val width: Int, val height: Int)
