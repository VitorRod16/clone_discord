import React from "react";

import Logo from "../../assets/Logo.svg";
import Discord from "../../assets/Discord.svg";
import { Button } from "./styles";

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
  normal?: boolean;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotifications,
  mentions,
  normal,
}) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? "active" : ""}
      normal={normal}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
      {normal && <img src={Discord} alt="" />}
    </Button>
  );
};

export default ServerButton;
