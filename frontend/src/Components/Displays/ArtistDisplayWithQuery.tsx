import { useArtistQuery } from "../../ReactQuery/artists.queries";
import { ArtistDisplay } from "./ArtistDisplay";

export function ArtistDisplayWithQuery({ id }: { id: string }) {
  const { data: artist } = useArtistQuery(id);

  return artist ? <ArtistDisplay {...artist} /> : null;
}
