import React, { useRef, useEffect } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Messages, InputWrapper, Input, InputIcon } from "./styles";

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(5).keys()).map((n) => (
          <ChannelMessage
            key={n}
            author="Vitão"
            date="06/05/2022"
            content="Acabei meu clone do Discord !!"
          />
        ))}

        <ChannelMessage
          author="Geraldão"
          date="06/05/2022"
          content={
            <>
              <Mention>@Everyone</Mention>, depois de muitos bugs, finalmente
              ele acabou, pensei que ia sofrer mais, UFA !!
            </>
          }
          hasMention
          isBot
        />
        <ChannelMessage
          author="Vitão"
          date="06/05/2022"
          content="Eu li em, consegui de primeira..."
        />
        <ChannelMessage
          author="Geraldão"
          date="06/05/2022"
          content="Ata... foi...."
          isBot
        />
        <ChannelMessage
          author="Vitão"
          date="06/05/2022"
          content="Rapaz... eu te excluo em..."
        />
        <ChannelMessage
          author="Geraldão"
          date="06/05/2022"
          content="Vai lá po"
          isBot
        />
        <ChannelMessage
          author="Avisos"
          date="06/05/2022"
          content={
            <>
              <Mention>@Geraldão</Mention>, não tem mais permissão para falar
              nesse canal
            </>
          }
          isBot
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversarem #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
