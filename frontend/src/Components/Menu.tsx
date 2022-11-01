import React from "react";
import { Link } from "react-router-dom";

type MenuLink = {
  to: string;
  label: string;
  active?: boolean;
};

type MenuProps = {
  links: MenuLink[];
};

export function Menu({ links }: MenuProps): React.ReactElement {
  return (
    <div className="flex -mx-4">
      {links.map((link) => {
        return (
          <span
            key={link.to}
            className="mx-4 uppercase text-sm hover:text-gray-400"
          >
            <Link to={link.to}>{link.label}</Link>
          </span>
        );
      })}
    </div>
  );
}
