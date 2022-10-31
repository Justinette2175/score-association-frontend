import { useQuery, UseQueryResult } from "react-query";
import { getArtists, getArtistById } from "../Services/ArtistsService";
import { RequestOptions } from "../Services/ApiService";
import { Artist } from "../Types";
import { QueryId } from "./queryId";
import { useCurrentLocale } from "../Contexts/LocaleContext";

export function useArtistsQuery(
  options: RequestOptions
): UseQueryResult<Artist[]> {
  const locale = useCurrentLocale();
  options.populate = "deep,2";
  return useQuery(
    [QueryId.artists, JSON.stringify(options)],
    async () => await getArtists(options, locale)
  );
}

export function useArtistQuery(id: string): UseQueryResult<Artist> {
  const locale = useCurrentLocale();
  return useQuery(
    [QueryId.artists, id],
    async () => await getArtistById(id, locale)
  );
}
