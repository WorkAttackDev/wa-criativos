import CareerInfo from "./CareerInfo";
import CareerForm from "./CareerForm";
import { getTranslations } from "next-intl/server";
import { getImageProps } from "next/image";
import teamImg from "@/assets/imgs/team.jpg";
import { linksObj } from "../../links";

const CareerSection = async () => {
  const t = await getTranslations("Career");

  const {
    props: { src },
  } = getImageProps({
    alt: "Team background",
    src: teamImg,
    fill: true,
    sizes: "100vw",
    quality: 100,
  });

  return (
    <section
      id={linksObj.career.href.replace("#", "")}
      className="relative grid overflow-hidden"
      aria-label="Career Section"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className={
          "from-primary/80 to-foreground/90 relative bg-gradient-to-tr"
        }
      >
        <article className="my-container grid gap-32 py-32 text-white md:grid-cols-2">
          <CareerInfo title={t("title")} description={t("description")} />
          <div className="grid content-start">
            <CareerForm />
          </div>
        </article>
      </div>
    </section>
  );
};

export default CareerSection;
