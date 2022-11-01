export enum FRONT_END_ROUTES {
  home = "/",
  artists = "/artists",
  works = "/works",
  contact = "/contact",
  about = "/about",
  admin = "admin"
}

export function getRoute(route: FRONT_END_ROUTES) {
  if (process.env.NODE_ENV === "development") {
    return route;
  } else {
    // Change here if using relative path for deployment
    return route;
  }
}
