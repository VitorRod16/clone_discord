import React from "react";

import {
  Container,
  Profile,
  Avatar,
  UserData,
  Icons,
  Mic,
  HeadphoneIcon,
  Settings,
} from "./styles";

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Vitão</strong>
          <span>#2004</span>
        </UserData>
      </Profile>

      <Icons>
        <Mic />
        <HeadphoneIcon />
        <Settings />
      </Icons>
    </Container>
  );
};

export default UserInfo;
