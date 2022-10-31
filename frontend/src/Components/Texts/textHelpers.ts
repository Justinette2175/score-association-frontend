import { HeaderData, ParagraphData } from "../../Types";

const textTypeToClass: Record<HeaderData["type"], string> = {
  h1: "text-8xl mb-8",
  h2: "text-4xl",
  h3: "text-3xl",
  h4: "text-2xl",
  h5: "text-1xl"
};

const textAlignToClass: Record<HeaderData["align"], string> = {
  center: "text-center",
  left: "text-left",
  right: "text-right"
};

export function getTextClasses(text: HeaderData | ParagraphData) {
  const classes = [];
  if (text.__component === "header" && text.type) {
    classes.push("font-serif");
    classes.push(textTypeToClass[text.type]);
  }
  if (text.align) {
    classes.push(textAlignToClass[text.align]);
  }
  return classes.join(" ");
}
