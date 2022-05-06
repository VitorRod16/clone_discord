import React from "react";

import ServerButton from "../ServerButton";

import { Container, Separator } from "./styles";

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton normal />
      <ServerButton normal hasNotifications />
      <ServerButton normal mentions={3} />
      <ServerButton normal />
      <ServerButton normal />
      <ServerButton normal />
      <ServerButton normal hasNotifications />
      <ServerButton normal />
      <ServerButton normal />
      <ServerButton normal mentions={72} />
      <ServerButton normal />
      <ServerButton normal />
    </Container>
  );
};

export default ServerList;
