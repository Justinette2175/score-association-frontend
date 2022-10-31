import { Work } from "../../Types";
import { Player } from "../Player";

export function WorkDisplay({
  description,
  title,
  youtubeLink,
  artists
}: Work) {
  return (
    <div className="max-w-lg grid grid-flow-row gap-2">
      <h4>{title}</h4>
      {youtubeLink && <Player url={youtubeLink} />}
      <p>{description}</p>
      <div>{JSON.stringify(artists)}</div>
    </div>
  );
}
