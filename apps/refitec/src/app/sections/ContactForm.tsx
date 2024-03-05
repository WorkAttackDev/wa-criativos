"use client";
import { Button } from "@/components/ui/button";
import { Form, FormLabel } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import MyFormField from "@wa-criativos/react-utils/MyFormField";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  firstName: z
    .string({
      required_error: "Por favor, insira o seu primeiro nome",
    })
    .min(2, "O primeiro nome deve ter pelo menos 2 caracteres")
    .max(50, "O primeiro nome deve ter no máximo 50 caracteres"),
  lastName: z
    .string({
      required_error: "Por favor, insira o seu último nome",
    })
    .min(2, "O último nome deve ter pelo menos 2 caracteres")
    .max(50, "O último nome deve ter no máximo 50 caracteres"),
  email: z
    .string({
      required_error: "Por favor, insira o seu e-mail",
    })
    .email("Por favor, insira um e-mail válido"),
  mensagem: z
    .string({
      required_error: "Por favor, insira uma mensagem",
    })
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

type ContactType = z.infer<typeof contactSchema>;

type Props = {};

const ContactForm = (_: Props) => {
  const form = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = (data: ContactType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid relative content-start gap-8"
      >
        <MyFormField
          label={<FormLabel>Primeiro Nome</FormLabel>}
          name="firstName"
          control={form.control}
        >
          {({ field }) => <Input {...field} min={2} max={50} />}
        </MyFormField>
        <MyFormField
          label={<FormLabel>Último Nome</FormLabel>}
          name="lastName"
          control={form.control}
        >
          {({ field }) => <Input {...field} min={2} max={50} />}
        </MyFormField>
        <MyFormField
          label={<FormLabel>Email</FormLabel>}
          name="email"
          control={form.control}
        >
          {({ field }) => <Input {...field} type="email" />}
        </MyFormField>
        <MyFormField
          className="w-full"
          label={<FormLabel>Mensagem</FormLabel>}
          name="mensagem"
          control={form.control}
        >
          {({ field }) => (
            <Textarea
              {...field}
              minLength={10}
              maxLength={500}
              rows={5}
              className="w-full"
            />
          )}
        </MyFormField>

        <Button size="sm" type="submit" className="mt-8 w-fit">
          Enviar
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
