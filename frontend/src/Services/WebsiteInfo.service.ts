import { Locales, WebsiteInfo } from "../Types";
import { ServerWebsiteInfo } from "../Types/ServerTypes";
import { serverWebsiteInfoToWebsiteInfo } from "../Types/typeConverters";
import { getWithLocale } from "./ApiService";

const WEBSITE_INFO_ROUTE = "/website-info";

export async function getWebsiteInfo(
  locale: Locales = Locales.en
): Promise<WebsiteInfo> {
  const websiteInfo = await getWithLocale<ServerWebsiteInfo>(
    WEBSITE_INFO_ROUTE,
    {},
    locale
  );

  return serverWebsiteInfoToWebsiteInfo(websiteInfo);
}
