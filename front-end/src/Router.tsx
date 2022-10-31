import { Routes, Route } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";
import { ArtistsPage } from "./Pages/ArtistsPage";
import { ContactPage } from "./Pages/ContactPage";
import { HomePage } from "./Pages/Home.page";
import { WorksPage } from "./Pages/WorksPage";
import { FRONT_END_ROUTES, getRoute } from "./Routes";

export default function Router() {
  return (
    <Routes>
      <Route
        path={getRoute(FRONT_END_ROUTES.artists)}
        element={<ArtistsPage />}
      />
      <Route path={getRoute(FRONT_END_ROUTES.works)} element={<WorksPage />} />
      <Route
        path={getRoute(FRONT_END_ROUTES.contact)}
        element={<ContactPage />}
      />
      <Route path={getRoute(FRONT_END_ROUTES.about)} element={<AboutPage />} />
      <Route path={getRoute(FRONT_END_ROUTES.home)} element={<HomePage />} />
    </Routes>
  );
}
