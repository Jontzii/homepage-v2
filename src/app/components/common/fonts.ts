import { Inter, Rubik } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  style: ["normal"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

export const rubik = Rubik({
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
  weight: "600",
  variable: "--font-rubik",
});
