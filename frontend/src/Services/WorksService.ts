import { Work, Locales } from "../Types";
import { ServerWork } from "../Types/ServerTypes";
import { serverWorkToWork } from "../Types/typeConverters";

import { getWithLocale, RequestOptions } from "./ApiService";

const WORKS_ROUTE = "/works";

export async function getWorks(
  options?: RequestOptions,
  locale: Locales = Locales.en
): Promise<Work[]> {
  const works = await getWithLocale<ServerWork[]>(WORKS_ROUTE, options, locale);

  return works.map(serverWorkToWork);
}

export async function getWorkById(id: string, locale: Locales = Locales.en) {
  const work = await getWithLocale<ServerWork>(
    `${WORKS_ROUTE}/${id}`,
    {},
    locale
  );

  return serverWorkToWork(work);
}
