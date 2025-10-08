import { Html, Heading, Text, Button } from "@react-email/components";
import * as React from "react";

type ConfirmationEmailProps = {
  userName: string;
  host: string;
};

export const ConfirmationEmailTemplate = ({
  userName,
  host,
}: ConfirmationEmailProps) => {
  return (
    <Html lang="pt">
      <Heading as="h1" style={{ fontFamily: "sans-serif", color: "#333" }}>
        Obrigado por entrar em contato com a Refitec!
      </Heading>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Olá {userName},
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        Recebemos sua candidatura e entraremos em contato em breve.
      </Text>
      <Button
        href={`https://${host}`}
        style={{
          fontFamily: "sans-serif",
          background: "#395093",
          color: "white",
          padding: "6px 12px",
          borderRadius: "5px",
        }}
      >
        voltar para o site
      </Button>
    </Html>
  );
};

type CareerApplicationEmailProps = {
  userName: string;
  email: string;
  phone: string;
  about: string;
};

export const CareerApplicationEmailTemplate = ({
  userName,
  email,
  phone,
  about,
}: CareerApplicationEmailProps) => {
  return (
    <Html lang="pt">
      <Heading as="h1" style={{ fontFamily: "sans-serif", color: "#333" }}>
        Nova candidatura de carreira de {userName}
      </Heading>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        <strong>Assunto:</strong> Candidatura para vaga de emprego
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        <strong>Email:</strong> {email}
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        <strong>Telefone:</strong> {phone}
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>
        <strong>Sobre o candidato:</strong>
      </Text>
      <Text style={{ fontFamily: "sans-serif", color: "#666" }}>{about}</Text>
    </Html>
  );
};
