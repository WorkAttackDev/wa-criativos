"use client";
import { Button } from "@/components/ui/button";
import { Form, FormLabel } from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MyFormField from "../components/MyFormField";
import { ContactType, contactSchema } from "./schema";
import { sendContactEmailServerActions } from "./serverActions";
import useFormSubmit from "@/lib/my-next-utils/useFormSubmit";
import { Loader2 } from "lucide-react";

type Props = {
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  messageLabel: string;
  sendLabel: string;
};

const defaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  mensagem: "",
};

const ContactForm = ({
  emailLabel,
  firstNameLabel,
  lastNameLabel,
  messageLabel,
  sendLabel,
}: Props) => {
  const { isSubmitting, onSubmit } = useFormSubmit({
    serverActionFn: sendContactEmailServerActions,
  });

  const form = useForm<ContactType>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    disabled: isSubmitting,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((d) =>
          onSubmit(d, {
            onSuccess: () => form.reset(defaultValues),
          }),
        )}
        className="relative grid content-start gap-8"
      >
        <MyFormField
          label={<FormLabel>{firstNameLabel}</FormLabel>}
          name="firstName"
          control={form.control}
        >
          {({ field }) => (
            <Input
              {...field}
              autoComplete="first-name"
              minLength={contactSchema.shape.firstName.minLength || 2}
              maxLength={contactSchema.shape.firstName.maxLength || 50}
            />
          )}
        </MyFormField>
        <MyFormField
          label={<FormLabel>{lastNameLabel}</FormLabel>}
          name="lastName"
          control={form.control}
        >
          {({ field }) => (
            <Input
              autoComplete="family-name"
              {...field}
              minLength={contactSchema.shape.lastName.minLength || 2}
              maxLength={contactSchema.shape.lastName.maxLength || 50}
            />
          )}
        </MyFormField>
        <MyFormField
          label={<FormLabel>{emailLabel}</FormLabel>}
          name="email"
          control={form.control}
        >
          {({ field }) => <Input {...field} type="email" />}
        </MyFormField>
        <MyFormField
          className="w-full"
          label={<FormLabel>{messageLabel}</FormLabel>}
          name="mensagem"
          control={form.control}
        >
          {({ field }) => (
            <Textarea
              {...field}
              minLength={contactSchema.shape.mensagem.minLength || 10}
              maxLength={contactSchema.shape.mensagem.maxLength || 500}
              rows={5}
              className="w-full"
            />
          )}
        </MyFormField>

        <Button
          size="sm"
          type="submit"
          className="mt-8 w-fit"
          disabled={isSubmitting}
        >
          {sendLabel}
          {isSubmitting && <Loader2 className="ml-2 h-6 w-6 animate-spin" />}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
