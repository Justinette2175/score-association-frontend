import { useQuery, UseQueryResult } from "react-query";
import { useCurrentLocale } from "../Contexts/LocaleContext";
import { getWebsiteInfo } from "../Services/WebsiteInfo.service";
import { WebsiteInfo } from "../Types";
import { QueryId } from "./queryId";

export function useWebsiteInfoQuery(): UseQueryResult<WebsiteInfo> {
  const locale = useCurrentLocale();
  return useQuery(
    [QueryId.websiteInfo],
    async () => await getWebsiteInfo(locale)
  );
}
