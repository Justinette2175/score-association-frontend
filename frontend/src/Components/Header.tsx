import React from "react";
import { Link } from "react-router-dom";
import { FRONT_END_ROUTES } from "../Routes";
import { Menu } from "./Menu";

export function Header(): React.ReactElement {
  return (
    <div className="flex px-8 items-center h-full py-2 justify-between">
      <Link to="/" className="h-full mr-2 flex items-center">
        <img
          src="./logo.png"
          className="max-h-full h-auto"
          alt="SCORE association logo"
        />
      </Link>
      <div>
        <Menu
          links={[
            {
              label: "Home",
              to: FRONT_END_ROUTES.home
            },
            {
              label: "About",
              to: FRONT_END_ROUTES.about
            },
            {
              label: "Competition",
              to: FRONT_END_ROUTES.competition
            }
          ]}
        />
      </div>
    </div>
  );
}
