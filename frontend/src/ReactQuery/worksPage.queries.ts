import { useQuery, UseQueryResult } from "react-query";
import { useCurrentLocale } from "../Contexts/LocaleContext";
import { getPage } from "../Services/PageService";
import { Routes } from "../Services/routes";
import { Page } from "../Types";

import { QueryId } from "./queryId";

export function useWorksPageQuery(): UseQueryResult<Page> {
  const locale = useCurrentLocale();
  return useQuery(
    [QueryId.worksPage],
    async () => await getPage(Routes.WORKS_PAGE_ROUTE, locale)
  );
}
