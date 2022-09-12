import React from "react";
import { mapModifiers } from "libs/component";
export type Type =
  | "font18"
  | "font14"
  | "font12" 

export interface TextProps {
  children: string;
  type: Type;
}

export const Text: React.FC<TextProps> = ({ 
  children,
  type,
}) => {
    return (
      <p
        className={mapModifiers(
          "a-text",
          type,
        )}
      >
        {children}
      </p>
    );

};
