import { Locales, Page } from "../Types";
import { ServerPage } from "../Types/ServerTypes";
import { serverPageToPage } from "../Types/typeConverters";
import { getWithLocale } from "./ApiService";
import { Routes } from "./routes";

export async function getPage(
  route: Routes,
  locale: Locales = Locales.en
): Promise<Page> {
  const data = await getWithLocale<ServerPage>(
    route,
    {
      populate: "deep,4"
    },
    locale
  );

  return serverPageToPage(data);
}
