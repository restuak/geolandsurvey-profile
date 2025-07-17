import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function formatPlainTextToHTML(text: string): string {
  if (!text) return "<p>Konten tidak tersedia.</p>";


  const escaped = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");


  const withLinks = escaped.replace(
    /(https?:\/\/[^\s]+)/g,
    '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>'
  );


  const paragraphs = withLinks
    .split(/\n{2,}/)
    .map((p) => `<p>${p.trim().replace(/\n/g, "<br/>")}</p>`) // biar enter 1x = <br/>
    .join("");

  return paragraphs;
}