import { JustContentBlockData } from "../../Types";
import { Section } from "../Section";
import { TextAndCTAContent } from "../TextAndCTAContent";

export function JustContentBlock({
  paragraphs,
  header,
  buttons
}: Omit<JustContentBlockData, "__component">) {
  return (
    <Section>
      <div className="flex justify-center">
        <div className="max-w-2xl">
          <TextAndCTAContent
            header={header}
            buttons={buttons}
            paragraphs={paragraphs}
          />
        </div>
      </div>
    </Section>
  );
}
