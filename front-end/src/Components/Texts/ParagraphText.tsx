import { ParagraphData } from "../../Types";
import { getTextClasses } from "./textHelpers";

// TODO return different tags
export function ParagraphText(paragraph: ParagraphData) {
  return <p className={getTextClasses(paragraph)}>{paragraph.text}</p>;
}
