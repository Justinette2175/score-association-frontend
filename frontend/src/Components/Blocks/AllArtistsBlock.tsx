import React from "react";
import { useArtistsQuery } from "../../ReactQuery/artists.queries";
import { AllArtistsBlockData } from "../../Types";
import { ArtistDisplay } from "../Displays/ArtistDisplay";
import { ArtistDisplayWithQuery } from "../Displays/ArtistDisplayWithQuery";
import { Section } from "../Section";

export function AllArtistsBlock({
  header,
  text
}: Omit<AllArtistsBlockData, "__component">) {
  const { data: artists } = useArtistsQuery({});

  return (
    <div className="flex justify-center items-center my-8">
      <div className="max-w-5xl">
        <Section>
          <h2>{header?.text}</h2>
          <p>{text?.text}</p>
        </Section>
        <div className="flex flex-wrap">
          {artists?.map((artist) => {
            return (
              <div className="p-4 max-w-lg min-w-xs w-full flex-1">
                {!artist.name ? (
                  <ArtistDisplayWithQuery key={artist.id} id={artist.id} />
                ) : (
                  <ArtistDisplay key={artist.id} {...artist} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
