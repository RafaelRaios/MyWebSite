// A small status message at the bottom of the screen, announced to screen readers.
let el: HTMLDivElement | undefined;
let timer: number | undefined;

export function toast(message: string) {
  if (!el) {
    el = document.createElement('div');
    el.className = 'toast';
    el.setAttribute('role', 'status');
    document.body.append(el);
  }
  el.textContent = message;
  el.dataset.shown = 'true';
  window.clearTimeout(timer);
  timer = window.setTimeout(() => el!.removeAttribute('data-shown'), 2200);
}

export async function copyText(text: string, message: string) {
  try {
    await navigator.clipboard.writeText(text);
    toast(message);
  } catch {
    toast(text);
  }
}
