import React, { PropsWithChildren } from "react";

export function Section({
  children
}: PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className="my-72">
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}
