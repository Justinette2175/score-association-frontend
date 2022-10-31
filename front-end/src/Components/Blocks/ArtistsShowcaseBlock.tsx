import { ArtistsShowcaseBlockData } from "../../Types";
import { ArtistDisplay } from "../Displays/ArtistDisplay";
import { ArtistDisplayWithQuery } from "../Displays/ArtistDisplayWithQuery";
import { Section } from "../Section";

export function ArtistsShowcaseBlock({
  artists
}: Omit<ArtistsShowcaseBlockData, "__component">) {
  return (
    <div className="min-h-[600px] overflow-hidden relative h-auto">
      <Section>
        <div className="min-h-[600px] relative flex items-center">
          <div className="grid gap-4 grid-flow-row ">
            {artists?.map((artist) => {
              if (!artist.name) {
                return (
                  <ArtistDisplayWithQuery key={artist.id} id={artist.id} />
                );
              }
              return <ArtistDisplay key={artist.id} {...artist} />;
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
