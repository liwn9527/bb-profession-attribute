type Part = undefined | false | string | null;

export function bcls(...parts: Part[]): string {
  return parts.filter(Boolean).join(" ");
}
