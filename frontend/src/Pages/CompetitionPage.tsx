import React from "react";
import { PageLayout } from "../Components/PageLayout";
import { Block } from "../Components/Blocks/Block";
import { usePageQuery } from "../ReactQuery/page.queries";
import { Routes } from "../Services/routes";

export function CompetitionPage() {
  const { data } = usePageQuery(Routes.COMPETITION_PAGE_ROUTE);

  return (
    <PageLayout>
      {data?.blocks?.map((block) => {
        return block ? <Block key={block.id} {...block} /> : null;
      })}
    </PageLayout>
  );
}
