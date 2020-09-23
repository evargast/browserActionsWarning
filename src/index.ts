/** Will trigger the browsers default pop-up before navigating away
 * @params {boolean} trigger - enables/disables the pop-up
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload
 */
export default function triggerBrowserWarning(trigger: boolean): void {
  window.onbeforeunload = function (e: BeforeUnloadEvent) {
    if (trigger) {
      e.returnValue = !trigger;
    } else {
      e.preventDefault();
    }
  };
}
