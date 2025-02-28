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

package com.facebook.litho.kotlin.widget

import android.graphics.Color
import android.graphics.drawable.ColorDrawable
import androidx.test.ext.junit.runners.AndroidJUnit4
import com.facebook.litho.LithoView
import com.facebook.litho.MatrixDrawable
import com.facebook.litho.Style
import com.facebook.litho.core.height
import com.facebook.litho.core.width
import com.facebook.litho.px
import com.facebook.litho.testing.LithoViewRule
import com.facebook.litho.widget.LithoScrollView
import org.assertj.core.api.Assertions.assertThat
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith
import org.robolectric.annotation.LooperMode

/** Tests for [ImageComponent] */
@LooperMode(LooperMode.Mode.LEGACY)
@RunWith(AndroidJUnit4::class)
class VerticalScrollComponentTest {

  @Rule @JvmField val lithoViewRule = LithoViewRule()

  @Test
  fun `VerticalScroll Component should render`() {
    lithoViewRule
        .render {
          VerticalScrollComponent(
              style = Style.width(100.px).height(100.px),
          ) {
            ImageComponent(
                drawable = ColorDrawable(Color.RED),
                style = Style.width(100.px).height(500.px),
            )
          }
        }
        .apply {

          // should find an VerticalScroll Component in the tree
          findComponent(VerticalScrollComponent::class)

          // should mount an VerticalScroll Component
          assertThat(lithoView.mountItemCount).isEqualTo(1)

          // content of VerticalScroll Component should be a MatrixDrawable
          val content = lithoView.getMountItemAt(0).content as LithoScrollView
          assertThat(content.measuredWidth).isEqualTo(100)
          assertThat(content.measuredHeight).isEqualTo(100)
          assertThat(content.childCount).isEqualTo(1)

          val innerLithoView = content.getChildAt(0) as LithoView

          // The inner LithoView's height should be 500
          assertThat(innerLithoView.measuredWidth).isEqualTo(100)
          assertThat(innerLithoView.measuredHeight).isEqualTo(500)

          // The content of Image Component should be a MatrixDrawable
          val innerContent = innerLithoView.getMountItemAt(0).content as MatrixDrawable<*>
          assertThat(innerContent.bounds.width()).isEqualTo(100)
          assertThat(innerContent.bounds.height()).isEqualTo(500)
        }
  }

  @Test
  fun `same instance should be equivalent`() {
    val component =
        VerticalScrollComponent(style = Style.width(100.px).height(100.px)) {
          ImageComponent(
              drawable = ColorDrawable(Color.RED),
              style = Style.width(100.px).height(500.px),
          )
        }

    assertThat(component.isEquivalentTo(component)).isTrue
    assertThat(component.isEquivalentTo(component, true)).isTrue
  }

  /** TODO(T116546567): Ensure that lambdas can be compared in component isEquivalentTo */
  @Test
  fun `components with same prop values should be equivalent, but wont be because of the lambda`() {
    val color = ColorDrawable(Color.RED)
    val a =
        VerticalScrollComponent(style = Style.width(100.px).height(100.px)) {
          ImageComponent(
              drawable = color,
              style = Style.width(100.px).height(500.px),
          )
        }

    val b =
        VerticalScrollComponent(style = Style.width(100.px).height(100.px)) {
          ImageComponent(
              drawable = color,
              style = Style.width(100.px).height(500.px),
          )
        }

    assertThat(a.isEquivalentTo(b)).isFalse
    assertThat(a.isEquivalentTo(b, true)).isFalse
  }

  @Test
  fun `components with different prop values should not be equivalent`() {
    val a =
        VerticalScrollComponent(style = Style.width(100.px).height(100.px)) {
          ImageComponent(
              drawable = ColorDrawable(Color.RED), // red here
              style = Style.width(100.px).height(500.px),
          )
        }

    val b =
        VerticalScrollComponent(style = Style.width(100.px).height(100.px)) {
          ImageComponent(
              drawable = ColorDrawable(Color.BLUE), // blue here
              style = Style.width(100.px).height(500.px),
          )
        }

    assertThat(a.isEquivalentTo(b)).isFalse
    assertThat(a.isEquivalentTo(b, true)).isFalse
  }

  @Test
  fun `components with different style values should not be equivalent`() {
    val color = ColorDrawable(Color.RED)
    val a =
        VerticalScrollComponent(style = Style.width(100.px).height(100.px) /* 100 here */) {
          ImageComponent(
              drawable = color,
              style = Style.width(100.px).height(500.px),
          )
        }

    val b =
        VerticalScrollComponent(style = Style.width(200.px).height(200.px) /* 200 here */) {
          ImageComponent(
              drawable = color,
              style = Style.width(100.px).height(500.px),
          )
        }

    assertThat(a.isEquivalentTo(b, true)).isFalse
  }
}
