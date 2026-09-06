export function sum(...values: number[]): number {
  return values.reduce((total, value) => total + value, 0);
}

export function shout(text: string): string {
  return `${text.toUpperCase()}!`;
}
