import {
  createTranslator,
  Messages,
  NamespaceKeys,
  NestedKeyOf,
  useTranslations,
} from "next-intl";

export type TFunction<
  NestedKey extends NamespaceKeys<Messages, NestedKeyOf<Messages>> = never,
> = ReturnType<typeof createTranslator<Messages, NestedKey>>;

// export type MessageKey = Parameters<ReturnType<typeof useTranslations<"side-nav">>>[0];
