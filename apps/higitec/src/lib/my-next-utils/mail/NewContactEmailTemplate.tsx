import { Html, Heading, Text, Button } from "@react-email/components";
import * as React from "react";

type Props = {
  userName: string;
  subject: string;
  message: string;
  email: string;
  phone?: string;
};

const NewContactEmailTemplate = ({
  userName,
  subject,
  message,
  email,
  phone,
}: Props) => {
  return (
    <Html>
      <Heading as="h1" style={{ fontFamily: "sans-serif", color: "#333" }}>
        Nova mensagem de contato de {userName}
      </Heading>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Assunto: {subject}
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Email: {email}
      </Text>
      {phone && (
        <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
          Telefone: {phone}
        </Text>
      )}
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Mensagem: {message}
      </Text>
    </Html>
  );
};

export default NewContactEmailTemplate;
