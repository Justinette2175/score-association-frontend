import { ParagraphData } from "../../Types";
import { getTextClasses } from "./textHelpers";

// TODO return different tags
export function ParagraphText(paragraph: ParagraphData) {
  if (paragraph.bullet) {
    return <li className={getTextClasses(paragraph)}>{paragraph.text}</li>;
  }
  return <p className={getTextClasses(paragraph)}>{paragraph.text}</p>;
}
