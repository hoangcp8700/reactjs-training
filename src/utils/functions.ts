export function baseStr(text?: string) {
  return text || "";
}

export function renderMoney(val?: number, prefix?: string, unit?: string) {
  const converted = val?.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, prefix || ".");
  return unit ? `${converted} ${unit}` : converted;
}

// remove accented Vietnamese
export function removeAccents(str: string) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}

export function parseFormatMaskInput(text: string, prefix: string): string {
  if (!text) return "";
  return text.replaceAll(new RegExp(prefix, "g"), "");
}

// slugify('Hello World!'); // 'hello-world'
export const slugify = (str: string) => {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
};

export default undefined;
