"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { standardSchemaResolver } from "@hookform/resolvers/standard-schema";
import { useForm } from "react-hook-form";
import { CareerFormType, careerFormSchema } from "../schema";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { sendCareerApplicationEmail } from "../serverAction";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const defaultValues: Partial<CareerFormType> = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  about: "",
};

const CareerForm = () => {
  const t = useTranslations("Career");
  const [isPending, startTransition] = useTransition();

  const form = useForm<CareerFormType>({
    resolver: standardSchemaResolver(careerFormSchema),
    defaultValues,
    disabled: isPending,
  });

  const onSubmit = async (data: CareerFormType) => {
    startTransition(async () => {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      const result = await sendCareerApplicationEmail(formData);

      if (result.success) {
        toast.success(t("form.successTitle", { namespace: "Career" }), {
          description: result.message,
          duration: 8000,
        });
        form.reset(defaultValues);
      } else {
        toast.error(t("form.errorTitle", { namespace: "Career" }), {
          description: result.message,
          duration: 8000,
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto grid w-full gap-8 text-white/90 max-lg:max-w-3xl"
      >
        <div className="grid gap-8 md:grid-cols-2">
          <FormField
            name="firstName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">
                  {t("form.firstName")}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("form.firstNamePlaceholder", {
                      namespace: "Career",
                    })}
                    autoComplete="given-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="lastName"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">
                  {t("form.lastName")}
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    placeholder={t("form.lastNamePlaceholder", {
                      namespace: "Career",
                    })}
                    autoComplete="family-name"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">{t("form.email")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    placeholder={t("form.emailPlaceholder", {
                      namespace: "Career",
                    })}
                    autoComplete="email"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-normal">{t("form.phone")}</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    placeholder={t("form.phonePlaceholder", {
                      namespace: "Career",
                    })}
                    autoComplete="tel"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="cv"
            control={form.control}
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="font-normal">{t("form.cv")}</FormLabel>
                <FormControl>
                  <Input
                    ref={field.ref}
                    type="file"
                    accept="application/pdf"
                    onChange={(e) => field.onChange(e.target.files?.[0])}
                    onBlur={field.onBlur}
                    name={field.name}
                    disabled={field.disabled}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="about"
            control={form.control}
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel className="font-normal">{t("form.about")}</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    rows={5}
                    placeholder={t("form.aboutPlaceholder", {
                      namespace: "Career",
                    })}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <span className="flex items-center gap-5">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => form.reset(defaultValues)}
            disabled={isPending}
          >
            {t("form.clear")}
          </Button>
          <Button size="sm" type="submit" disabled={isPending}>
            {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {t("form.send")}
          </Button>
        </span>
      </form>
    </Form>
  );
};

export default CareerForm;
