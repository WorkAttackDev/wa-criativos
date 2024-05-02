"use client";

import { Button } from "@/components/ui/button";
import { Form, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import useFormSubmit from "@/lib/my-next-utils/useFormSubmit";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import MyFormField from "../components/MyFormField";
import { WorkWithUsType, workWithUsSchema } from "./schema";
import { sendWorkWithUsEmailServerActions } from "./serverActions";

type Props = {
  firstNameLabel: string;
  lastNameLabel: string;
  emailLabel: string;
  phoneLabel: string;
  aboutYouLabel: string;
  clearLabel: string;
  sendLabel: string;
};

const defaultValues: WorkWithUsType = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  about: "",
};

const WorkWithUsForm = ({
  firstNameLabel,
  lastNameLabel,
  emailLabel,
  phoneLabel,
  aboutYouLabel,
  clearLabel,
  sendLabel,
}: Props) => {
  const { isSubmitting, onSubmit } = useFormSubmit({
    serverActionFn: sendWorkWithUsEmailServerActions,
  });

  const form = useForm<WorkWithUsType>({
    resolver: zodResolver(workWithUsSchema),
    defaultValues,
    disabled: isSubmitting,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((d) =>
          onSubmit(d, { onSuccess: () => form.reset(defaultValues) }),
        )}
        className="relative grid gap-8 sm:grid-cols-2"
      >
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">
              {firstNameLabel}
            </FormLabel>
          }
          name="firstName"
          control={form.control}
        >
          {({ field }) => (
            <Input
              autoComplete="first-name"
              {...field}
              min={workWithUsSchema.shape.firstName.minLength || 2}
              max={workWithUsSchema.shape.firstName.maxLength || 50}
            />
          )}
        </MyFormField>
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">
              {lastNameLabel}
            </FormLabel>
          }
          name="lastName"
          control={form.control}
        >
          {({ field }) => (
            <Input
              autoComplete="last-name"
              {...field}
              min={workWithUsSchema.shape.lastName.minLength || 2}
              max={workWithUsSchema.shape.lastName.maxLength || 50}
            />
          )}
        </MyFormField>
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">
              {emailLabel}
            </FormLabel>
          }
          name="email"
          control={form.control}
        >
          {({ field }) => <Input {...field} type="email" />}
        </MyFormField>
        <MyFormField
          label={
            <FormLabel className="font-normal capitalize">
              {phoneLabel}
            </FormLabel>
          }
          name="phone"
          control={form.control}
        >
          {({ field }) => (
            <Input
              {...field}
              type="tel"
              min={workWithUsSchema.shape.phone.minLength || 9}
              max={workWithUsSchema.shape.phone.maxLength || 15}
            />
          )}
        </MyFormField>
        <MyFormField
          className="w-full sm:col-span-2"
          label={
            <FormLabel className="font-normal capitalize">
              {aboutYouLabel}
            </FormLabel>
          }
          name="about"
          control={form.control}
        >
          {({ field }) => (
            <Textarea
              {...field}
              minLength={workWithUsSchema.shape.about.minLength || 10}
              maxLength={workWithUsSchema.shape.about.maxLength || 500}
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
            onClick={() => form.reset()}
            disabled={isSubmitting}
          >
            {clearLabel}
          </Button>
          <Button size="sm" type="submit" disabled={isSubmitting}>
            {sendLabel}
            {isSubmitting && <Loader2 className="ml-2 h-6 w-6 animate-spin" />}
          </Button>
        </span>
      </form>
    </Form>
  );
};

export default WorkWithUsForm;
