import { useQuery, UseQueryResult } from "react-query";

import { RequestOptions } from "../Services/ApiService";
import { Work } from "../Types";
import { QueryId } from "./queryId";
import { useCurrentLocale } from "../Contexts/LocaleContext";
import { getWorks } from "../Services/WorksService";

export function useWorksQuery(options: RequestOptions): UseQueryResult<Work[]> {
  const locale = useCurrentLocale();
  return useQuery(
    [QueryId.works, JSON.stringify(options)],
    async () => await getWorks(options, locale)
  );
}
