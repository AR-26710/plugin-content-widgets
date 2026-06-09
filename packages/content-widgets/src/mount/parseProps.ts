export type ParsedProps = Record<string, string | number | boolean>;

export function parseProps(element: HTMLElement): ParsedProps {
  const props: ParsedProps = {};

  for (const attr of Array.from(element.attributes)) {
    props[toCamelCase(attr.name)] = parseValue(attr.value);
  }

  return props;
}

export function asString(value: ParsedProps[string], fallback?: string): string;
export function asString(value: ParsedProps[string], fallback: undefined): string | undefined;
export function asString(value: ParsedProps[string], fallback?: string): string | undefined {
  if (value === undefined || value === null || typeof value === "boolean") {
    return fallback;
  }

  return String(value);
}

export function asNumber(value: ParsedProps[string], fallback = 0): number {
  if (typeof value === "number") {
    return value;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function asBoolean(value: ParsedProps[string], fallback = false): boolean {
  if (typeof value === "boolean") {
    return value;
  }

  if (value === undefined || value === null || value === "") {
    return fallback;
  }

  return value === "true";
}

function parseValue(value: string): string | number | boolean {
  if (value === "" || value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  if (value !== "" && !Number.isNaN(Number(value))) {
    return Number(value);
  }

  return value;
}

function toCamelCase(value: string): string {
  return value.replace(/-([a-z])/g, (_match, char: string) => char.toUpperCase());
}
