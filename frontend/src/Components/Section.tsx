import React, { PropsWithChildren } from "react";

export function Section({
  children
}: PropsWithChildren<{}>): React.ReactElement {
  return (
    <div className="mt-8 mb-48">
      <div className="flex justify-center items-center">{children}</div>
    </div>
  );
}
