export function clickOutside(element: HTMLElement, callbackFunction: Function) {
  function onClick(event: Event) {
    if (!element.contains(event.target as Node)) {
      callbackFunction();
    }
  }

  document.body.addEventListener("click", onClick);

  return {
    update(newCallbackFunction: Function) {
      callbackFunction = newCallbackFunction;
    },
    destroy() {
      document.body.removeEventListener("click", onClick);
    },
  };
}
