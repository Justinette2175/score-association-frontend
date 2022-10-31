import React from "react";
import { Block } from "../Components/Blocks/Block";
import { PageLayout } from "../Components/PageLayout";

import { usePageQuery } from "../ReactQuery/page.queries";
import { Routes } from "../Services/routes";

export function ArtistsPage() {
  const { data } = usePageQuery(Routes.ARTISTS_PAGE_ROUTE);

  return (
    <PageLayout>
      {data?.blocks?.map((block) => (
        <Block key={block.id} {...block} />
      ))}
    </PageLayout>
  );
}
