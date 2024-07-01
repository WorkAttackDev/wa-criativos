import { useTranslations } from "next-intl";
import HeadingText from "../components/HeadingText";
import { linksObj } from "../links";
import ProductsSectionItems from "./ProductsSectionItems";

type Props = {};

const ProductsSection = (_: Props) => {
  const t = useTranslations("Products");

  const categories = [
    {
      name: t("diaper"),
      imgSrc: "/imgs/woman-manufacturing-diapers.jpg",
      brands: [
        {
          name: "Mimo",
          imgSrc: "/imgs/brand.jpg",
          description: t("diaperDescription"),
        },
        {
          name: "Naval",
          imgSrc: "/imgs/brand-1.jpg",
          description: t("diaperDescription"),
        },
        {
          name: "Noddy",
          imgSrc: "/imgs/brand-2.jpg",
          description: t("diaperDescription"),
        },
        {
          name: "Kido",
          imgSrc: "/imgs/brand-3.jpg",
          description: t("diaperDescription"),
        },
      ],
    },
    {
      name: t("washingSoap"),
      imgSrc: "/imgs/man-stacking-soap-bars.jpg",
      brands: [
        {
          name: "Confiança",
          imgSrc: "/imgs/brand-4.jpg",
          description: t("washingSoapDescription"),
        },
        {
          name: "Confiança",
          imgSrc: "/imgs/brand-9.jpg",
          description: t("washingSoapDescription"),
        },
        {
          name: "Sabom",
          imgSrc: "/imgs/brand-5.jpg",
          description: t("washingSoapDescription"),
        },
        {
          name: "Sabom",
          imgSrc: "/imgs/brand-10.jpg",
          description: t("washingSoapDescription"),
        },
        {
          name: "Sabom",
          imgSrc: "/imgs/brand-12.jpg",
          description: t("washingSoapDescription"),
        },
        {
          name: "Clara",
          imgSrc: "/imgs/brand-11.jpg",
          description: t("washingSoapDescription"),
        },
        {
          name: "Topic",
          imgSrc: "/imgs/brand-6.jpg",
          description: t("washingSoapDescription"),
        },
      ],
    },
    {
      name: t("soap"),
      imgSrc: "/imgs/woman-looking-to-soap-pack.jpg",
      brands: [
        {
          imgSrc: "/imgs/brand-13.jpg",
          name: t("soupOneTitle"),
          description: t("soapDescription"),
        },
        {
          imgSrc: "/imgs/brand-14.jpg",
          name: t("soupTwoTitle"),
          description: t("soapDescription"),
        },
        {
          imgSrc: "/imgs/brand-7.jpg",
          name: t("soupThreeTitle"),
          description: t("soapDescription"),
        },
        {
          imgSrc: "/imgs/brand-8.jpg",
          name: t("soupFourTitle"),
          description: t("soapDescription"),
        },
      ],
    },
  ];

  return (
    <section
      id={linksObj.ourBrands.href.replace("/#", "")}
      className="grid place-items-center gap-32 bg-white py-32 text-center my-container"
    >
      <span className="grid gap-8">
        <HeadingText className="uppercase">{t("title")}</HeadingText>
        {/* <p>{t("description")}</p> */}
      </span>

      <ProductsSectionItems categories={categories} />
    </section>
  );
  // return (
  //   <section
  //     id={linksObj.ourBrands.href.replace("/#", "")}
  //     className="grid gap-32 bg-white py-32 my-container"
  //   >
  //     <span className="grid gap-8">
  //       <HeadingText className="uppercase">{t("title")}</HeadingText>
  //       <p>{t("description")}</p>
  //     </span>
  //     {categories.map((category) => (
  //       <section key={category.name} className="grid gap-4">
  //         <HeadingText className="uppercase" size="sm">
  //           {category.name}
  //         </HeadingText>
  //         <ul className="flex snap-x snap-mandatory gap-16 overflow-x-auto ">
  //           {category.brands.map((brand) => (
  //             <li
  //               key={brand.name}
  //               className="group relative flex flex-shrink-0 snap-start "
  //             >
  //               <Image
  //                 src={brand.imgSrc}
  //                 alt={brand.name}
  //                 width={250}
  //                 height={250}
  //                 className="object-contain"
  //                 quality={90}
  //               />
  //               <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-foreground/30 text-3xl font-medium text-white opacity-0 backdrop-blur-sm duration-300 ease-out group-hover:pointer-events-auto group-hover:opacity-100">
  //                 {brand.name}
  //               </div>
  //             </li>
  //           ))}
  //         </ul>
  //       </section>
  //     ))}
  //   </section>
  // );
};

export default ProductsSection;
