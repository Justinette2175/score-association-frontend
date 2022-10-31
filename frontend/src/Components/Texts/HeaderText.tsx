import { HeaderData } from "../../Types";
import { getTextClasses } from "./textHelpers";

// TODO return different tags
export function HeaderText(header: HeaderData) {
  return <h2 className={getTextClasses(header)}>{header.text}</h2>;
}
