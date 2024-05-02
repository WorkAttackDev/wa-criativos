import { Html, Heading, Text, Button } from "@react-email/components";
import * as React from "react";

type Props = {
  userName: string;
  host: string;
};

const ContactEmailTemplate = ({ userName, host }: Props) => {
  return (
    <Html lang="pt">
      <Heading as="h1" style={{ fontFamily: "sans-serif", color: "#333" }}>
        Obrigado por entrar em contato com a Higitec!
      </Heading>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Olá {userName},
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Recebemos sua mensagem e entraremos em contato em breve.
      </Text>
      <Button
        href={`https://${host}`}
        style={{
          fontFamily: "sans-serif",
          background: "#007BFF",
          color: "white",
          padding: "12px 20px",
        }}
      >
        voltar para o site
      </Button>
    </Html>
  );
};

export default ContactEmailTemplate;
