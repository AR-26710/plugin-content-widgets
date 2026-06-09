import { mount, unmount, type Component } from "svelte";

const MOUNTED_ATTR = "data-xhhao-com-mounted";
const MOUNTED_CLASS = "xhhao-com-widget";

export function mountComponent<Props extends Record<string, unknown>>(
  element: HTMLElement,
  component: Component<Props>,
  props: Props,
  inline = false,
) {
  if (element.hasAttribute(MOUNTED_ATTR)) {
    return;
  }

  const wrapper = document.createElement(inline ? "span" : "div");
  wrapper.setAttribute(MOUNTED_ATTR, "true");
  wrapper.classList.add(MOUNTED_CLASS);
  element.replaceWith(wrapper);

  const instance = mount(component, {
    target: wrapper,
    props,
  });

  return () => unmount(instance);
}
