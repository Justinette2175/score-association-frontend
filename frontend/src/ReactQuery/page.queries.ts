import { useQuery, UseQueryResult } from "react-query";
import { useCurrentLocale } from "../Contexts/LocaleContext";
import { getPage } from "../Services/PageService";
import { Routes } from "../Services/routes";
import { Page } from "../Types";

import { QueryId } from "./queryId";

export function usePageQuery(route: Routes): UseQueryResult<Page> {
  const locale = useCurrentLocale();
  return useQuery([QueryId.page, route], async () => getPage(route, locale));
}
