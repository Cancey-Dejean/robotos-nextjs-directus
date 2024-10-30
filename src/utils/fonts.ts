import { Space_Mono } from "next/font/google";
import localFont from "next/font/local";

export const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
});

export const rightGrotesk = localFont({
  src: "../../public/fonts/RightGrotesk-SpatialBlack.woff2",
  variable: "--font-right-grotesk",
  weight: "900",
});
