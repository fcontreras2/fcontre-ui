import React from "react";
import { IconContext, iconTypes } from "./index.context";

export interface IconProps {
  name: string;
  className?: string;
}

/**
 * Componente Icono
 */
export const Icon = ({ name, ...props }: IconProps) => {
  return (
    <IconContext.Consumer>
      {(ctx) => {
        const icons = ctx.icons;
        const IconToRender = (icons[name as any]
          ? icons[name as any]
          : icons[0]) as unknown as iconTypes;

          console.log(ctx)

        return <IconToRender.Component {...props} />;
      }}
    </IconContext.Consumer>
  );
};

Icon.defaultProps = {
  className: "w-6 h-6",
};

export default Icon;
