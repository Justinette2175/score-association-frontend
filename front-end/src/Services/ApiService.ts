import axios from "axios";
import qs from "qs";
import { Locales } from "../Types";

export const AxiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BACKEND_URL}/api/`,
  timeout: 1000
});

export async function getWithLocale<ExpectedReturnType>(
  url: string,
  queryOptions?: Record<string, unknown>,
  locale: Locales = Locales.en
): Promise<ExpectedReturnType> {
  const query = qs.stringify(queryOptions, {
    encodeValuesOnly: true
  });
  const result = await AxiosInstance.get(`${url}?locale=${locale}&${query}`);
  return result.data?.data as ExpectedReturnType;
}

export type RequestOptions = {
  filters?: Record<string, unknown>;
  sort?: Record<string, unknown>;
  populate?: string;
  locale?: Locales;
};
