import { Text } from "components/atoms/text";
import { Button } from "components/atoms/button";
import React from "react";
import { mapModifiers } from "libs/component";

export interface HeaderProps {
  children: string;
}

export const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <div className={mapModifiers("m-header")}>
      <Text type="font14">
        Dashboard Question List
      </Text>

      <Button type="button" buttonType="view" size="small">
        View
      </Button>
    </div>
  );
};
