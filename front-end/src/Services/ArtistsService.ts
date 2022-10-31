import { Artist, Locales } from "../Types";
import { ServerArtist } from "../Types/ServerTypes";
import { serverArtistToArtist } from "../Types/typeConverters";

import { getWithLocale, RequestOptions } from "./ApiService";

const ARTISTS_ROUTE = "/artists";

export async function getArtists(
  options?: RequestOptions,
  locale: Locales = Locales.en
): Promise<Artist[]> {
  const artists = await getWithLocale<ServerArtist[]>(
    ARTISTS_ROUTE,
    options,
    locale
  );

  return artists.map(serverArtistToArtist);
}

export async function getArtistById(id: string, locale: Locales = Locales.en) {
  const artist = await getWithLocale<ServerArtist>(
    `${ARTISTS_ROUTE}/${id}`,
    {
      populate: "deep,2"
    },
    locale
  );

  return serverArtistToArtist(artist);
}
