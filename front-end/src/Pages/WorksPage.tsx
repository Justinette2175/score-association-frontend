import React from "react";
import { Block } from "../Components/Blocks/Block";
import { PageLayout } from "../Components/PageLayout";
import { usePageQuery } from "../ReactQuery/page.queries";
import { Routes } from "../Services/routes";

export function WorksPage() {
  const { data } = usePageQuery(Routes.WORKS_PAGE_ROUTE);

  return (
    <PageLayout>
      {data?.blocks?.map((block) => (
        <Block key={block.id} {...block} />
      ))}
    </PageLayout>
  );
}
