import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Locales } from "../Types";

const LocaleContext = createContext<{
  locale: Locales;
  changeLocale: (locale: Locales) => void;
}>({
  locale: Locales.en,
  changeLocale: () => {},
});

export function useCurrentLocale(): Locales {
  const { locale } = useContext(LocaleContext);
  return locale;
}

export function LocaleContextProvider({ children }: PropsWithChildren<{}>) {
  const [locale, setLocale] = useState<Locales>(Locales.en);

  function changeLocale(locale: Locales) {
    setLocale(locale);
  }
  return (
    <LocaleContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LocaleContext.Provider>
  );
}
