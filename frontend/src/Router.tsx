import { Routes, Route, Navigate } from "react-router-dom";
import { AboutPage } from "./Pages/AboutPage";
import { CompetitionPage } from "./Pages/CompetitionPage";
import { HomePage } from "./Pages/Home.page";
import { FRONT_END_ROUTES, getRoute } from "./Routes";

export default function Router() {
  return (
    <Routes>
      <Route path={getRoute(FRONT_END_ROUTES.about)} element={<AboutPage />} />
      <Route path={getRoute(FRONT_END_ROUTES.home)} element={<HomePage />} />
      <Route
        path={getRoute(FRONT_END_ROUTES.competition)}
        element={<CompetitionPage />}
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
