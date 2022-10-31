import { WorksShowcaseBlockData } from "../../Types";
import { WorkDisplay } from "../Displays/WorkDisplay";
import { Section } from "../Section";

export function WorksShowcaseBlock({
  works
}: Omit<WorksShowcaseBlockData, "__component">) {
  return (
    <div className="min-h-[600px] overflow-hidden relative h-auto">
      <Section>
        <div className="min-h-[600px] relative flex items-center">
          <div className="grid gap-4 grid-flow-row ">
            {works?.map((work) => {
              return <WorkDisplay key={work.id} {...work} />;
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
