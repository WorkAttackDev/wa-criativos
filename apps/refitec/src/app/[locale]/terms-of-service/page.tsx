import React from "react";
import HeadingText from "../components/HeadingText";
import FeatherBgSection from "../components/FeatherBgSection";
import SectionBlock from "../components/SectionBlock";
import { useTranslations } from "next-intl";

type Props = {};

const TermsOfServicePage = (props: Props) => {
  const t = useTranslations("TermsOfService");
  return (
    <main className="bg-gray-100 py-32 my-container">
      <div className="grid w-full gap-16 my-container">
        <header className="grid gap-4">
          <HeadingText size="lg" className="text-primary">
            {t("title")}
          </HeadingText>
          <p className="max-w-3xl text-xl/relaxed text-secondary-foreground">
            {t("description")}
          </p>
        </header>
        <section className="space-y-8">
          <SectionBlock
            title="1. Introdução"
            content="Bem-vindo à página de termos de serviço. Esta página informa você de nossas políticas sobre a coleção, uso e divulgação de dados pessoais quando você usa nosso serviço e o opções que você associou a esses dados.Usamos seus dados para fornecer e melhorar o serviço.Ao usar o serviço, você concorda à coleção e uso de informações de acordo com este política."
          />
          <SectionBlock
            title="2. Contrato do usuário"
            content="Seu acesso e uso do serviço está condicionado em seu aceitação e conformidade com estes Termos.Estes termos se aplicam a todos os visitantes, usuários e outros que acessam ou usam o Serviço.Ao acessar ou usar o serviço, você concorda em ser vinculado por estes termos.Se você discordar de qualquer parte do Termos, então você não pode acessar o serviço."
          />
          <SectionBlock
            title="3. Política de privacidade"
            content="Coletamos vários tipos diferentes de informações para vários propósitos para fornecer e melhorar nosso serviço a você.Tipos de Dados coletados de dados pessoais enquanto usavam nosso serviço, podemos perguntar você para nos fornecer certos identificáveis pessoalmente informações que podem ser usadas para entrar em contato ou identificá -lo."
          />
          <SectionBlock
            title="4. Pagamento e cobrança"
            content="Podemos empregar empresas e indivíduos de terceiros para facilitar nosso serviço, para prestar o serviço em nosso nome, para executar serviços relacionados a serviços ou para nos ajudar a analisar Como nosso serviço é usado.Esses terceiros têm acesso ao seu Dados pessoais apenas para executar essas tarefas em nosso nome e são obrigado a não divulgá -lo ou usá -lo para qualquer outro propósito."
          />
          <SectionBlock
            title="5. Propriedade intelectual"
            content="O serviço e seu conteúdo original, recursos e a funcionalidade é e continuará sendo de propriedade exclusiva de nosso plataforma.O serviço é protegido por direitos autorais, marca registrada e Outras leis do país e dos países estrangeiros.Nosso Marcas comerciais e vestidos comerciais não podem ser usados em conexão com qualquer produto ou serviço sem o consentimento prévio por escrito de nosso plataforma."
          />
          <SectionBlock
            title="6. Limitação de responsabilidade"
            content="Em nenhum caso a nossa plataforma, nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, são responsáveis por qualquer Indireto, incidental, especial, consequente ou punitivo danos, incluindo sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes de (i) Seu acesso ou uso ou incapacidade de acessar ou usar o Serviço;(ii) qualquer conduta ou conteúdo de terceiros no Serviço;(iii) qualquer conteúdo obtido do Serviço;e (iv) acesso não autorizado, uso ou alteração de suas transmissões ou conteúdo, seja com base na garantia, contrato, delito (incluindo negligência) ou qualquer outra teoria jurídica, se temos ou não foram informados da possibilidade de tal dano, e mesmo que um O remédio estabelecido aqui falhou de seu essencial propósito."
          />
          <SectionBlock
            title="7. Política de cookies"
            content="Nós usamos cookies para melhorar a sua experiência em nosso site. Ao navegar neste site, você concorda com o uso de cookies. Saiba mais sobre nossa política de cookies."
          />
          <SectionBlock
            title="7. Terminação"
            content="Podemos encerrar ou suspender sua conta imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo sem limitação se você violar os termos.Após o término, Seu direito de usar o serviço cessará imediatamente.Se você Deseja encerrar sua conta, você pode simplesmente interromper o uso o serviço.Todas as disposições dos termos que por sua natureza deve sobreviver à rescisão deve sobreviver à rescisão, incluindo, sem limitação, disposições de propriedade, isenções de responsabilidade de garantia, indenização e limitações de responsabilidade."
          />
          <SectionBlock
            title="8. Informações de contacto"
            content="Se você tiver alguma dúvida sobre esta termos de serviço, por favor Entre em contato conosco: - por e -mail: info@example.com"
          />
        </section>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
