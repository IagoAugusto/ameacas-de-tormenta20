import "@/styles/global.css";
import type { AppProps } from "next/app";
import {
  Inter,
  Cinzel,
  Crimson_Text,
  Metamorphous,
  EB_Garamond,
} from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  variable: "--font-crimson-text",
  weight: "400",
});

const metamorphous = Metamorphous({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-metamorphous",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-eb-garamond",
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${cinzel.variable} ${crimsonText.variable} ${metamorphous.variable} ${ebGaramond.variable} font-sans`}
    >
      <Component {...pageProps} />
    </div>
  );
}
