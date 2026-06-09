export function innerHtml(element: Element): string {
  return element.innerHTML;
}

export function textContent(element: Element): string {
  return element.textContent || "";
}

export function splitCsv(value: unknown): string[] {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}
