import adriaOilJarrycan20lSoja from "@/assets/imgs/products/brand-adria_product-oil_jarrycan_20l_soja.png";
import adriaOilRoundCupDuoSoja from "@/assets/imgs/products/brand-adria_product-oil_round_cup_duo_soja.png";
import adriaOilRoundCupDuoVeg from "@/assets/imgs/products/brand-adria_product-oil_round_cup_duo_veg.png";
import adriaOilRoundCupMonoSoja from "@/assets/imgs/products/brand-adria_product-oil_round_cup_mono_soja.png";
import adriaOilRoundCupMonoVeg from "@/assets/imgs/products/brand-adria_product-oil_round_cup_mono_veg.png";
import adriaOilSquareCupDuoSoja from "@/assets/imgs/products/brand-adria_product-oil_square_cup_duo_soja.png";
import adriaOilSquareCupDuoVeg from "@/assets/imgs/products/brand-adria_product-oil_square_cup_duo_veg.png";
import adriaOilSquareCupMonoSoja from "@/assets/imgs/products/brand-adria_product-oil_square_cup_mono_soja.png";
import adriaOilSquareCupMonoVeg from "@/assets/imgs/products/brand-adria_product-oil_square_cup_mono_veg.png";
import adriaSecondaryPackSoja from "@/assets/imgs/products/brand-adria_product-secondary_pack_soja.png";
import boaVistaOilJarrycan20lSoja from "@/assets/imgs/products/brand-boa_vista_product-oil_jarrycan_20l_soja.png";
import boaVistaOilRoundCupDuoSoja from "@/assets/imgs/products/brand-boa_vista_product-oil_round_cup_duo_soja.png";
import boaVistaOilRoundCupDuoVeg from "@/assets/imgs/products/brand-boa_vista_product-oil_round_cup_duo_veg.png";
import boaVistaOilRoundCupMonoSoja from "@/assets/imgs/products/brand-boa_vista_product-oil_round_cup_mono_soja.png";
import boaVistaOilRoundCupMonoVeg from "@/assets/imgs/products/brand-boa_vista_product-oil_round_cup_mono_veg.png";
import boaVistaOilSquareCupDuoSoja from "@/assets/imgs/products/brand-boa_vista_product-oil_square_cup_duo_soja.png";
import boaVistaOilSquareCupDuoVeg from "@/assets/imgs/products/brand-boa_vista_product-oil_square_cup_duo_veg.png";
import boaVistaOilSquareCupMonoSoja from "@/assets/imgs/products/brand-boa_vista_product-oil_square_cup_mono_soja.png";
import boaVistaOilSquareCupMonoVeg from "@/assets/imgs/products/brand-boa_vista_product-oil_square_cup_mono_veg.png";
import boaVistaSecondaryPackSoja from "@/assets/imgs/products/brand-boa_vista_product-secondary_pack_soja.png";
import gloriaOilJarrycan20lSoja from "@/assets/imgs/products/brand-gloria_product-oil_jarrycan_20l_soja.png";
import gloriaOilRoundCupDuoSoja from "@/assets/imgs/products/brand-gloria_product-oil_round_cup_duo_soja.png";
import gloriaOilRoundCupDuoVeg from "@/assets/imgs/products/brand-gloria_product-oil_round_cup_duo_veg.png";
import gloriaOilRoundCupMonoSoja from "@/assets/imgs/products/brand-gloria_product-oil_round_cup_mono_soja.png";
import gloriaOilRoundCupMonoVeg from "@/assets/imgs/products/brand-gloria_product-oil_round_cup_mono_veg.png";
import gloriaOilSquareCupDuoSoja from "@/assets/imgs/products/brand-gloria_product-oil_square_cup_duo_soja.png";
import gloriaOilSquareCupDuoVeg from "@/assets/imgs/products/brand-gloria_product-oil_square_cup_duo_veg.png";
import gloriaOilSquareCupMonoSoja from "@/assets/imgs/products/brand-gloria_product-oil_square_cup_mono_soja.png";
import gloriaOilSquareCupMonoVeg from "@/assets/imgs/products/brand-gloria_product-oil_square_cup_mono_veg.png";
import gloriaSecondaryPackSoja from "@/assets/imgs/products/brand-gloria_product-secondary_pack_soja.png";
import AdriaLogo from "@/assets/imgs/adria-logo.svg";
import BoaVistaLogo from "@/assets/imgs/boa_vista-logo.svg";
import GloriaLogo from "@/assets/imgs/gloria-logo.svg";
import { createSearchParamsCache, parseAsStringLiteral } from "nuqs/server";

export const brandsData = {
  adria: {
    id: "adria" as const,
    name: "Adria",
    logo: AdriaLogo,
    products: [
      { id: "1", src: adriaOilJarrycan20lSoja, alt: "Adria Product 1" },
      { id: "2", src: adriaOilRoundCupDuoSoja, alt: "Adria Product 2" },
      { id: "3", src: adriaOilRoundCupDuoVeg, alt: "Adria Product 3" },
      { id: "4", src: adriaOilRoundCupMonoSoja, alt: "Adria Product 4" },
      { id: "5", src: adriaOilRoundCupMonoVeg, alt: "Adria Product 5" },
      { id: "6", src: adriaOilSquareCupDuoSoja, alt: "Adria Product 6" },
      { id: "7", src: adriaOilSquareCupDuoVeg, alt: "Adria Product 7" },
      { id: "8", src: adriaOilSquareCupMonoSoja, alt: "Adria Product 8" },
      { id: "9", src: adriaOilSquareCupMonoVeg, alt: "Adria Product 9" },
      { id: "10", src: adriaSecondaryPackSoja, alt: "Adria Product 10" },
    ],
  },
  boaVista: {
    id: "boaVista" as const,
    name: "Boa Vista",
    logo: BoaVistaLogo,
    products: [
      { id: "1", src: boaVistaOilJarrycan20lSoja, alt: "Boa Vista Product 1" },
      { id: "2", src: boaVistaOilRoundCupDuoSoja, alt: "Boa Vista Product 2" },
      { id: "3", src: boaVistaOilRoundCupDuoVeg, alt: "Boa Vista Product 3" },
      { id: "4", src: boaVistaOilRoundCupMonoSoja, alt: "Boa Vista Product 4" },
      { id: "5", src: boaVistaOilRoundCupMonoVeg, alt: "Boa Vista Product 5" },
      { id: "6", src: boaVistaOilSquareCupDuoSoja, alt: "Boa Vista Product 6" },
      { id: "7", src: boaVistaOilSquareCupDuoVeg, alt: "Boa Vista Product 7" },
      {
        id: "8",
        src: boaVistaOilSquareCupMonoSoja,
        alt: "Boa Vista Product 8",
      },
      { id: "9", src: boaVistaOilSquareCupMonoVeg, alt: "Boa Vista Product 9" },
      { id: "10", src: boaVistaSecondaryPackSoja, alt: "Boa Vista Product 10" },
    ],
  },
  gloria: {
    id: "gloria" as const,
    name: "Gloria",
    logo: GloriaLogo,
    products: [
      { id: "1", src: gloriaOilJarrycan20lSoja, alt: "Gloria Product 1" },
      { id: "2", src: gloriaOilRoundCupDuoSoja, alt: "Gloria Product 2" },
      { id: "3", src: gloriaOilRoundCupDuoVeg, alt: "Gloria Product 3" },
      { id: "4", src: gloriaOilRoundCupMonoSoja, alt: "Gloria Product 4" },
      { id: "5", src: gloriaOilRoundCupMonoVeg, alt: "Gloria Product 5" },
      { id: "6", src: gloriaOilSquareCupDuoSoja, alt: "Gloria Product 6" },
      { id: "7", src: gloriaOilSquareCupDuoVeg, alt: "Gloria Product 7" },
      { id: "8", src: gloriaOilSquareCupMonoSoja, alt: "Gloria Product 8" },
      { id: "9", src: gloriaOilSquareCupMonoVeg, alt: "Gloria Product 9" },
      { id: "10", src: gloriaSecondaryPackSoja, alt: "Gloria Product 10" },
    ],
  },
};

export type BrandType = (typeof brandsData)[keyof typeof brandsData];

export type BrandTypeWithoutProducts = Omit<
  (typeof brandsData)[keyof typeof brandsData],
  "products"
>;

export const brandSearchParams = {
  brand: parseAsStringLiteral(
    Object.values(brandsData).map((b) => b.id),
  ).withDefault("adria"),
};

// export const brandSearchParamsCache =
//   createSearchParamsCache(brandSearchParams);
