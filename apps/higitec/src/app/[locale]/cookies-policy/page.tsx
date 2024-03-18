import React from "react";
import HeadingText from "../components/HeadingText";
import FeatherBgSection from "../components/FeatherBgSection";
import SectionBlock from "../components/SectionBlock";
import { useTranslations } from "next-intl";

type Props = {};

const CookiesPolicyPage = (props: Props) => {
  const t = useTranslations("Cookies");
  return (
    <FeatherBgSection>
      <main className="grid w-full gap-16 my-container">
        <header className="grid gap-4">
          <HeadingText size="lg" className="text-primary-foreground">
            {t("title")}
          </HeadingText>
          <p className="max-w-3xl text-xl/relaxed text-secondary">
            {t("description")}
          </p>
        </header>
        <section className="space-y-8">
          <SectionBlock
            title="O que são cookies?"
            content="Cookies são pequenos arquivos de texto que são armazenados no seu navegador quando você visita uma página web. Eles servem para vários propósitos, como lembrar as suas preferências, personalizar a sua experiência, analisar o seu comportamento, etc."
          />
          <SectionBlock
            title="Quais cookies usamos e por quê?"
            content="Nós usamos cookies de análise para coletar dados estatísticos sobre o uso da nossa landing page, como o número de visitantes, as páginas mais acessadas, o tempo de permanência, etc. Esses dados nos ajudam a melhorar o nosso conteúdo e a oferecer uma melhor experiência para você. Nós usamos o Google Analytics como o nosso provedor de serviços de análise. Você pode saber mais sobre como o Google usa os seus dados aqui."
          />
          <SectionBlock
            title="Como você pode gerenciar os cookies?"
            content="Você pode aceitar ou recusar os cookies que usamos na nossa landing page por meio do banner de cookies que aparece na primeira vez que você nos visita. Você também pode alterar as suas preferências a qualquer momento nas configurações do seu navegador. No entanto, se você desativar os cookies, algumas funcionalidades da nossa landing page podem não funcionar corretamente."
          />
          <SectionBlock
            title="Como você pode entrar em contato conosco?"
            content="Se você tiver alguma dúvida ou comentário sobre a nossa política de cookies, você pode entrar em contato conosco pelo e-mail info@higitec.com ou pelo telefone +244 222 123 456."
          />
        </section>
      </main>
    </FeatherBgSection>
  );
};

export default CookiesPolicyPage;
