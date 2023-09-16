import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useState
} from "react";
import { Header } from "./Header";
import { Helmet } from "./Helmet";

const HEADER_STYLE_BOUNDARY = 100;

type PageLayoutProps = {
  title?: string;
};

export function PageLayout({
  title,
  children
}: PropsWithChildren<PageLayoutProps>) {
  const [isHeaderCollapsed, setIsHeaderCollapsed] = useState<boolean>(false);

  const updateHeaderStyle = useCallback(() => {
    const scrollTop = window.scrollY;
    if (scrollTop > HEADER_STYLE_BOUNDARY && !isHeaderCollapsed) {
      setIsHeaderCollapsed(true);
    } else if (scrollTop < HEADER_STYLE_BOUNDARY && isHeaderCollapsed) {
      setIsHeaderCollapsed(false);
    }
  }, [isHeaderCollapsed, setIsHeaderCollapsed]);

  useEffect(() => {
    window.addEventListener("scroll", updateHeaderStyle);
    return () => window.removeEventListener("scroll", () => updateHeaderStyle);
  }, [updateHeaderStyle]);

  return (
    <React.Fragment>
      <Helmet title={title || ""} />
      <div className="bg-black min-h-screen">
        <div
          className={`fixed w-screen z-30 transition ease-in-out duration-300 ${
            isHeaderCollapsed ? "h-16" : "h-header"
          }`}
        >
          <Header />
        </div>
        <div className="pb-12 pt-header px-8 grid grid-flow-row gap-12">
          <div>{children}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
