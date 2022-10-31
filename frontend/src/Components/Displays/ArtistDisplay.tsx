import { Artist } from "../../Types";
import { CloudinaryImage } from "../CloudinaryImage";

export function ArtistDisplay({
  name,
  profilePhoto,
  description,
  title
}: Artist) {
  return (
    <div className="grid grid-flow-row gap-2">
      {profilePhoto?.name && (
        <div className="h-[200px] overflow-hidden">
          <CloudinaryImage imageName={profilePhoto.name} />
        </div>
      )}
      <h4>{name}</h4>
      <h5>{title}</h5>
      <p>{description}</p>
    </div>
  );
}
