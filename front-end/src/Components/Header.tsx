import React from "react";
import { Link } from "react-router-dom";
import { useWebsiteInfoQuery } from "../ReactQuery/websiteInfo.queries";
import { FRONT_END_ROUTES } from "../Routes";
import { Menu } from "./Menu";

export function Header(): React.ReactElement {
  const { data } = useWebsiteInfoQuery();
  return (
    <div className="flex px-8 items-center h-full py-2 justify-between">
      <Link to="/" className="h-full">
        <img
          src="./logo.png"
          className="max-h-full h-auto"
          alt="SCORE association logo"
        />
      </Link>
      <div>
        {/* <Menu
          links={[
            {
              label: "Home", // TODO: localization
              to: FRONT_END_ROUTES.home
            },
            {
              label: "Artists",
              to: FRONT_END_ROUTES.artists
            },
            {
              label: "Works",
              to: FRONT_END_ROUTES.works
            },
            {
              label: "Contact",
              to: FRONT_END_ROUTES.contact
            }
          ]}
        /> */}
      </div>
    </div>
  );
}
