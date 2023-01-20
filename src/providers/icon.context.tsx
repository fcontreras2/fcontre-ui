import React, { createContext } from "react";

export type iconTypes = {
  Component: React.FC<React.SVGProps<SVGSVGElement>>;
};

export type IconContextProps = {
  icons: Record<string, iconTypes>;
};

export const IconContext = createContext<IconContextProps>(
  {} as IconContextProps
);

type IconProviderProps = {
  icons: Record<string, iconTypes>;
  children: React.ReactNode | JSX.Element;
};

export const IconProvider = ({ children, ...props }: IconProviderProps) => {
  return <IconContext.Provider value={props}>{children}</IconContext.Provider>;
};

export default IconProvider;
