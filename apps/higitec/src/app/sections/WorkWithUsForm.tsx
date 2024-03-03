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

const workWithUsSchema = z.object({
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
  phone: z
    .string({
      required_error: "Por favor, insira o seu telefone",
    })
    .min(9, "O telefone deve ter pelo menos 9 caracteres")
    .max(15, "O telefone deve ter no máximo 15 caracteres"),
  about: z
    .string({
      required_error: "Por favor, insira uma mensagem",
    })
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .max(500, "A mensagem deve ter no máximo 500 caracteres"),
});

type WorkWithUsType = z.infer<typeof workWithUsSchema>;

type Props = {};

const WorkWithUsForm = (_: Props) => {
  const form = useForm<WorkWithUsType>({
    resolver: zodResolver(workWithUsSchema),
  });

  const onSubmit = (data: WorkWithUsType) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid relative sm:grid-cols-2 gap-8"
      >
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">
              Primeiro Nome
            </FormLabel>
          }
          name="firstName"
          control={form.control}
        >
          {({ field }) => <Input {...field} min={2} max={50} />}
        </MyFormField>
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">
              Último Nome
            </FormLabel>
          }
          name="lastName"
          control={form.control}
        >
          {({ field }) => <Input {...field} min={2} max={50} />}
        </MyFormField>
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">E-mail</FormLabel>
          }
          name="email"
          control={form.control}
        >
          {({ field }) => <Input {...field} type="email" />}
        </MyFormField>
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">Telefone</FormLabel>
          }
          name="phone"
          control={form.control}
        >
          {({ field }) => <Input {...field} type="tel" min={9} max={15} />}
        </MyFormField>
        <MyFormField
          className="sm:col-span-2 w-full"
          label={
            <FormLabel className="font-normal capitalize">Sobre você</FormLabel>
          }
          name="about"
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
        <span className="flex flex-wrap gap-8 sm:col-span-2">
          <Button
            variant="outline"
            type="button"
            size="sm"
            className="border-current text-current"
          >
            Limpar
          </Button>
          <Button size="sm" type="submit">
            Enviar
          </Button>
        </span>
      </form>
    </Form>
  );
};

export default WorkWithUsForm;
