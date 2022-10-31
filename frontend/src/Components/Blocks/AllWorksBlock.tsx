import React from "react";
import { useWorksQuery } from "../../ReactQuery/works.queries";
import { AllWorksBlockData } from "../../Types";
import { WorkDisplay } from "../Displays/WorkDisplay";
import { Section } from "../Section";

export function AllWorksBlock({
  header,
  text
}: Omit<AllWorksBlockData, "__component">) {
  const { data: works } = useWorksQuery({});

  return (
    <Section>
      <h2>{header?.text}</h2>
      <p>{text?.text}</p>
      <div className="grid grid-flow-row gap-8">
        {works?.map((work) => {
          return <WorkDisplay key={work.id} {...work} />;
        })}
      </div>
    </Section>
  );
}
