import type { Metadata } from "next";
import "../../globals.css";
import Providers from "@/components/providers";
import { rightGrotesk, spaceMono } from "@/utils/fonts";
import AppSidebar from "../_components/app-sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${rightGrotesk.variable} antialiased`}
      >
        <Providers>
          <AppSidebar>{children}</AppSidebar>
        </Providers>
      </body>
    </html>
  );
}
