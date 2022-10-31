import { TextAndImageBlockData } from "../../Types";
import { Section } from "../Section";
import { SubscribeAction } from "../Actions.tsx/SubscribeAction";
import { TextAndCTAContent } from "../TextAndCTAContent";
import { CloudinaryImage } from "../CloudinaryImage";

export function TextAndImageBlock({
  paragraphs,
  header,
  buttons,
  subscribe,
  align,
  image
}: Omit<TextAndImageBlockData, "__component">) {
  return (
    <Section>
      <div className={`max-w-4xl w-full md:flex`}>
        <div
          className={`max-w-xs relative z-10 ${
            align === "right" ? "md:order-2" : "md:order-1"
          }`}
        >
          <TextAndCTAContent
            header={header}
            buttons={buttons}
            paragraphs={paragraphs}
          />
          {subscribe && <SubscribeAction {...subscribe} />}
        </div>
        {image?.name && (
          <div
            className={`relative z-0 max-w-3xl ${
              align === "right" ? "md:order-1" : "md:order-2"
            }`}
          >
            <CloudinaryImage imageName={image.name} />
          </div>
        )}
      </div>
    </Section>
  );
}
