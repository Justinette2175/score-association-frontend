import { SubscribeFormBlockData } from "../../Types";
import { Section } from "../Section";
import { SubscribeAction } from "../Actions.tsx/SubscribeAction";

export function SubscribeFormBlock({
  text,
  confirmationText,
  header,
  submitButtonText
}: Omit<SubscribeFormBlockData, "__component">) {
  return (
    <Section>
      <div className="grid gap-4 grid-flow-row">
        <h2 className="text-white text-5xl font-bold text-center">
          {header?.text}
        </h2>
        <p className="text-lg text-center">{text?.text}</p>
        <SubscribeAction
          buttonText={submitButtonText}
          confirmationMessage={confirmationText}
        />
      </div>
    </Section>
  );
}
