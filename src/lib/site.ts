// Central config. Update the WhatsApp number to the real store number.
// Use full international format, digits only (no +, spaces, or dashes) for wa.me links.
export const SITE = {
  name: "cavebeans",
  tagline: "Bark to Bar, Bean to Brews",
  descriptor: "Coffee & Chocolate — Consulting · Roasting · Craft",
  whatsappNumber: "918438131917",
  email: "cavebeans4life@gmail.com",
  instagram: "https://instagram.com/cave_beans_",
};

export function waLink(message: string) {
  const url = new URL(`https://wa.me/${SITE.whatsappNumber}`);
  url.searchParams.set("text", message);
  return url.toString();
}
