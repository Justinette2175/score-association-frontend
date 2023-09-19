import { HeroBlockData } from "../../Types";
import { CloudinaryImage } from "../CloudinaryImage";

export function HeroBlock({
  backgroundImage,
  paragraph,
  header,
  backgroundVideoUrl
}: Omit<HeroBlockData, "__component">) {
  return (
    <div className="min-h-screenMinusHeader overflow-y-hidden relative h-auto -ml-8 -mr-8">
      {(backgroundImage?.name || backgroundVideoUrl) && (
        <div className="absolute top-0 right-0 -left-0 bottom-0 overflow-hidden">
          {backgroundImage?.name && (
            <CloudinaryImage imageName={backgroundImage?.name} />
          )}
          {backgroundVideoUrl && (
            <video autoPlay loop muted className="max-w-none absolute bottom-0">
              <source src={backgroundVideoUrl} type="video/mp4" />
            </video>
          )}
          <div className="absolute top-0 right-0 left-0 bottom-0 opacity-30  bg-black "></div>
        </div>
      )}

      <div className="min-h-screenMinusHeader h-auto">
        <div className="flex justify-center items-center">
          <div className="min-h-screenMinusHeader relative flex items-center">
            <div className="grid gap-12 grid-flow-row p-8 justify-items-center">
              <h2 className="text-white text-6xl md:text-5xl text-center font-serif font-semibold">
                {header?.text}
              </h2>
              <div className="max-w-lg">
                <p className="text-md text-center">{paragraph?.text}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
