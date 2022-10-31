import { ButtonData, HeaderData, ParagraphData } from "../Types";
import { ButtonAction } from "./Actions.tsx/ButtonAction";
import { HeaderText } from "./Texts/HeaderText";
import { ParagraphText } from "./Texts/ParagraphText";

type TextAndCTAContentProps = {
  paragraphs?: ParagraphData[];
  header?: HeaderData;
  buttons?: ButtonData[];
};

export function TextAndCTAContent({
  paragraphs,
  header,
  buttons
}: TextAndCTAContentProps) {
  return (
    <div className="grid gap-6 grid-flow-row">
      {header && <HeaderText {...header} />}
      <div className="grid gap-4 grid-flow-row">
        {paragraphs &&
          paragraphs.map((p) => <ParagraphText key={p.id} {...p} />)}
      </div>
      {buttons && (
        <div className="flex">
          {buttons.map((button) => (
            <ButtonAction key={button.id} {...button} />
          ))}
        </div>
      )}
    </div>
  );
}
