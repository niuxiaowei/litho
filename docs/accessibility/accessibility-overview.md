---
id: accessibility-overview
title: Overview
---

## Content Description

All components support content description by default. This means all layout builders have a prop of type `CharSequence` named `contentDescription` .

Setting a content description on any component is as simple as:

```java
Image.create(c)
    .imageRes(R.drawable.some_image)
    .contentDescription("This is an image")
    .build();
```

The content description set here has the same semantics as when it is set on an Android view.

## Custom accessibility

Mount Specs can implement their own accessibility support by implementing an `@OnPopulateAccessibilityNode` method. This method accepts an `AccessibilityNodeInfoCompat` argument as well as any props that are specified on the spec method.

For example, accessibility for `Text` is specified using the following method:

```java
@OnPopulateAccessibilityNode
static void onPopulateAccessibilityNode(
    AccessibilityNodeInfoCompat accessibilityNode,
    @Prop CharSequence text) {
  accessibilityNode.setText(text);
}
```

This is only applicable for components which mount drawables, since if the component mounts a view, the support is built-in.

## Extra accessibility nodes

On more complex mount specs that need to expose extra nodes to the accessibility framework, you'll have to implement three extra methods with the following annotations:

- **GetExtraAccessibilityNodesCount**: Returns number of extra accessibility nodes exposed by the component.
- **OnPopulateExtraAccessibilityNode**: Populates the extra accessibility node with the given bounds.

## Accessibility Handling

All components support a set of events corresponding to [`AccessibilityDelegateCompat`](https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html)'s methods.
These events have attributes for each parameter of the corresponding `AccessibilityDelegateCompat` method *and* an additional parameter of type `AccessibilityDelegateCompat` called `superDelegate`, which allows you to explicitly call `View`'s default implementation of accessibility methods where necessary.

Here is an overview of the supported events:

| Event | AccessibilityDelegate method
| ----- | ----------------------------
| DispatchPopulateAccessibilityEventEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#dispatchPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)">dispatchPopulateAccessibilityEvent</a>
| OnInitializeAccessibilityEventEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onInitializeAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)">onInitializeAccessibilityEvent</a>
| OnInitializeAccessibilityNodeInfoEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onInitializeAccessibilityNodeInfo(android.view.View, android.support.v4.view.accessibility.AccessibilityNodeInfoCompat)">onInitializeAccessibilityNodeInfo</a>
| OnPopulateAccessibilityEventEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onPopulateAccessibilityEvent(android.view.View, android.view.accessibility.AccessibilityEvent)">onPopulateAccessibilityEvent</a>
| OnRequestSendAccessibilityEventEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#onRequestSendAccessibilityEvent(android.view.ViewGroup, android.view.View, android.view.accessibility.AccessibilityEvent)">onRequestSendAccessibilityEvent</a>
| PerformAccessibilityActionEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#performAccessibilityAction(android.view.View, int, android.os.Bundle)">performAccessibilityAction</a>
| SendAccessibilityEventEvent | <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#sendAccessibilityEvent(android.view.View, int)">sendAccessibilityEvent</a>
| SendAccessibilityUncheckedEvent |  <a href="https://developer.android.com/reference/android/support/v4/view/AccessibilityDelegateCompat.html#sendAccessibilityEventUnchecked(android.view.View, android.view.accessibility.AccessibilityEvent)">sendAccessibilityEventUnchecked</a>


Setting a handler for any of these events will result in an `AccessibilityDelegate` being set on the mounted `View`, which will call your event handler when the corresponding method is called.

Whenever a method for which you haven't supplied an event handler is called, the delegate will defer to the Android `View`'s default implementation (equivalent to calling `super` or `superDelegate`'s implementation).

For example, here are the steps for overriding `onInitializeAccessibilityNodeInfo` for a component:

1. Implementing an event handler

```java
@OnEvent(OnInitializeAccessibilityNodeInfoEvent.class)
static void onInitializeAccessibilityNodeInfoEvent(
    ComponentContext c,
    @FromEvent AccessibilityDelegateCompat superDelegate,
    @FromEvent View host,
    @FromEvent AccessibilityNodeInfoCompat info) {
  // Equivalent to calling super on a regular AccessibilityDelegate, not required
  superDelegate.onInitializeAccessibilityNodeInfo(view, info);
  // My implementation
}
```

2. Setting that event handler on a component:

```java
Text.create(c)
    .text(title)
    .onInitializeAccessiblityNodeInfoHandler(MyComponent.onInitializeAccessibilityNodeInfoEvent(c));
```

One of the best features of `AccessibilityDelegate`s in general is their reusability even across different types of `View`s. This can also be achieved within Litho by creating a wrapper spec that takes in a component and adds the desired event handlers. For example, let's say we want to have a Component that appends "please" to every `AccessibilityEvent` that it announces.

```java
@LayoutSpec
class PoliteComponentWrapper {

  @OnCreateLayout
  static Component onCreateLayout(
      ComponentContext c,
      @Prop Component content) {

    return Wrapper.create(c)
        .delegate(content)
        .onPopulateAccessibilityEventHandler(
            PoliteComponentWrapper.onPopulateAccessibilityEvent(c))
        .build();
  }

  @OnEvent(OnPopulateAccessibilityEvent.class)
  static void onPopulateAccessibilityEvent(
      ComponentContext c,
      @FromEvent AccessibilityDelegateCompat superDelegate,
      @FromEvent View view
      @FromEvent AccessibilityEvent event) {
    superDelegate.onPopulateAccessibilityEvent(view, event);
    event.getText().add("please");
  }
}
```

Now you can replace any usages of your component with `PoliteComponentWrapper`

```java
@OnCreateLayout
static Component onCreateLayout(
    ComponentContext c,
    @Prop CharSequence text) {

  return PoliteComponentWrapper.create(c)
      .content(
           Text.create(c)
               .text(text))
      .build();
}
```

## Accessibility Heading

Heading is an accessibility property and will help the users to choose to "Navigate by Headings" and ignore scrolling through each and every subitem under a heading. "Navigate based on Heading" can be selected from "Local Context Menu" when talkback is on. Talkback gesture for "Local Context Menu" is **Swipe up then right**.
Making any component an Accessibility Header is as simple as:

```java
Row.create(c)
    .contentDescription("This is an accessibility heading")
    .accessibilityHeading(true)
    .build();
```
