import React from "react";
import { PageLayout } from "../Components/PageLayout";
import { Block } from "../Components/Blocks/Block";
import { usePageQuery } from "../ReactQuery/page.queries";
import { Routes } from "../Services/routes";

export function HomePage() {
  const { data } = usePageQuery(Routes.HOME_PAGE_ROUTE);

  return (
    <PageLayout>
      {data?.blocks?.map((block) => {
        return block ? <Block key={block.id} {...block} /> : null;
      })}
    </PageLayout>
  );
}
