import { BlockData } from "../../Types";
import { BlockTypes } from "../../Types/ServerTypes";
import { AllArtistsBlock } from "./AllArtistsBlock";
import { AllWorksBlock } from "./AllWorksBlock";
import { ArtistsShowcaseBlock } from "./ArtistsShowcaseBlock";
import { HeroBlock } from "./HeroBlock";
import { JustContentBlock } from "./JustContentBlock";
import { SubscribeFormBlock } from "./SubscribeFormBlock";
import { TextAndImageBlock } from "./TextAndImageBlock";
import { WorksShowcaseBlock } from "./WorksShowcaseBlock";

export function Block({ __component, ...rest }: BlockData) {
  switch (__component) {
    case BlockTypes.hero:
      return <HeroBlock {...rest} />;
    case BlockTypes.subscribeForm:
      return <SubscribeFormBlock {...rest} />;
    case BlockTypes.artistsShowcase:
      return <ArtistsShowcaseBlock {...rest} />;
    case BlockTypes.worksShowcase:
      return <WorksShowcaseBlock {...rest} />;
    case BlockTypes.allArtists:
      return <AllArtistsBlock {...rest} />;
    case BlockTypes.allWorks:
      return <AllWorksBlock {...rest} />;
    case BlockTypes.textAndImage:
      return <TextAndImageBlock {...rest} />;
    case BlockTypes.justContent:
      return <JustContentBlock {...rest} />;
    default:
      return null;
  }
}
