import React from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 3</Role>
      <UserRow nickname="Vitão" />
      <UserRow nickname="Geraldão" isBot />
      <UserRow nickname="Avisos" isBot />
      <Role>Offline - 18</Role>

      <UserRow nickname="Matheux" />
      <UserRow nickname="Bagriel" />
      <UserRow nickname="Andir som" />
      <UserRow nickname="Jãozin" />
      <UserRow nickname="Tchurusbangos" />
      <UserRow nickname="Rianzovisk" />
      <UserRow nickname="Bacuri musical" />
      <UserRow nickname="Chefia" />
      <UserRow nickname="Kabo loso" />
      <UserRow nickname="Frei de burro" />
      <UserRow nickname="Caçote estourado" />
      <UserRow nickname="Caça véia" />
      <UserRow nickname="Seloco titio" />
      <UserRow nickname="Ja foi e num volta" />
      <UserRow nickname="Testando 123" />
      <UserRow nickname="Presuntinho" />
      <UserRow nickname="Alguem ai" />
    </Container>
  );
};

export default UserList;
