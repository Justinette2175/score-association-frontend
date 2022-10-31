import { Link } from "react-router-dom";
import { ButtonData } from "../../Types";
import { Button } from "../Button";

export function ButtonAction({ label, href, external }: ButtonData) {
  const content = <Button label={label} />;
  if (!href) return content;

  return external ? (
    <a href={href}>{content}</a>
  ) : (
    <Link to={href}>{content}</Link>
  );
}
