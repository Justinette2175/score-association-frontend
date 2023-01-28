import { Locales, WebsiteInfo } from "../Types";
import { ServerWebsiteInfo } from "../Types/ServerTypes";
import { serverWebsiteInfoToWebsiteInfo } from "../Types/typeConverters";
import { getWithLocale } from "./ApiService";
import { USE_STATIC_DATA } from "./routes";

const WEBSITE_INFO_ROUTE = "/website-info";

export async function getWebsiteInfo(
  locale: Locales = Locales.en
): Promise<WebsiteInfo> {
  let websiteInfo: ServerWebsiteInfo = {
    id: "website-info",
    attributes: {
      description: "SCORE Association",
      title: "SCORE Association"
    }
  };

  if (!USE_STATIC_DATA) {
    websiteInfo = await getWithLocale<ServerWebsiteInfo>(
      WEBSITE_INFO_ROUTE,
      {},
      locale
    );
  }

  return serverWebsiteInfoToWebsiteInfo(websiteInfo);
}
