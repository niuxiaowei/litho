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

package com.facebook.samples.litho.kotlin.collection

import com.facebook.litho.Component
import com.facebook.litho.ComponentScope
import com.facebook.litho.KComponent
import com.facebook.litho.kotlin.widget.Text
import com.facebook.litho.useState
import com.facebook.litho.widget.collection.LazyCollectionController
import com.facebook.litho.widget.collection.LazyList

// start_scrolling_example
class ScrollingExample() : KComponent() {

  override fun ComponentScope.render(): Component {
    val controller = useState { LazyCollectionController() }.value

    // Use one of these lambdas to scroll, e.g. in an onClick callback
    val scrollToTenth = controller.scrollToIndex(10)
    val smoothScrollToEnd = controller.smoothScrollToId("End")

    return LazyList(
        lazyCollectionController = controller,
    ) {
      (0..20).forEach { child(id = it, component = Text("$it")) }
      child(id = "End", component = Text("End"))
    }
  }
}
// end_scrolling_example

// start_pull_to_refresh_example
class PullToRefreshExample(
    val data: List<String>,
    val refresh: () -> Unit,
) : KComponent() {

  override fun ComponentScope.render(): Component {
    val controller = useState { LazyCollectionController() }.value
    return LazyList(
        lazyCollectionController = controller,
        onPullToRefresh = {
          refresh()
          controller.clearRefreshing()
        },
    ) { /* Add children */}
  }
}
// end_pull_to_refresh_example
