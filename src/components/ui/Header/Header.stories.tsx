import type { Meta, StoryObj } from "@storybook/react";
import HeaderContent, { NavlinkStyles } from ".";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Container from "../container";
import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

const meta = {
  title: "Components/Header",
  component: HeaderContent,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof HeaderContent>;

export default meta;
type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {
//     logo: {
//       url: "https://placehold.co/600x400",
//     },
//   },
// };

const menu = [
  {
    label: "Home",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Your Stuff",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Rarity",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Blog",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Faq",
    url: "/",
    cta: false,
    newTab: false,
  },
  {
    label: "Connect",
    url: "/",
    cta: true,
    newTab: false,
  },
];

export const Default: Story = {
  render: (args) => {
    return (
      <header
        className={cn(
          "fixed left-0 top-0 z-50 w-full p-2 transition-all duration-300 ease-in-out",
        )}
      >
        <Container className="flex items-center justify-between rounded-lg bg-gray-900 px-4 text-white sm:w-fit sm:justify-center">
          <div className="relative z-[52] flex items-center sm:border-r sm:border-r-[#494949]">
            <Image
              src={"/images/logo-icon.png"}
              alt={"Logo"}
              height={28}
              width={28}
              priority
            />

            <Link
              href="/"
              className={cn("after:absolute after:inset-0", NavlinkStyles)}
            >
              Robotos
            </Link>
          </div>

          {/* Menu */}
          {menu.length > 0 && (
            <nav className="flex items-center gap-4">
              {/* Desktop Menu */}
              <ul className="hidden items-center sm:flex">
                {menu.map(({ label, cta, newTab, url }) => (
                  <li key={label}>
                    <NavLink
                      newTab={newTab}
                      label={label}
                      cta={cta}
                      url={url}
                    />
                  </li>
                ))}
              </ul>

              {/* Mobile Menu */}
              <ul
                className={cn(
                  "fixed left-0 top-0 z-[51] flex h-screen w-full max-w-full flex-col items-start justify-center bg-gray-900 px-5 transition-all duration-300 ease-in-out sm:hidden",
                  "-translate-x-full opacity-0",
                )}
              >
                {menu.map(({ label, cta, newTab, url }) => (
                  <li key={label} className="w-full">
                    <NavLink
                      newTab={newTab}
                      url={url}
                      label={label}
                      cta={cta}
                      className="block w-full text-3xl"
                    />
                  </li>
                ))}
              </ul>
            </nav>
          )}

          {/* Hamburger */}
          <button
            className={cn(
              "hamburger z-[52] flex size-10 cursor-pointer flex-col items-center justify-center gap-1 bg-transparent sm:hidden [&_span]:h-[1px] [&_span]:w-6 [&_span]:bg-white [&_span]:transition-all [&_span]:duration-300 [&_span]:ease-in-out [&_span]:sm:hover:bg-pink-100",
              "[&_span]:bg-white",
            )}
          >
            <span className="sr-only">Open Menu</span>

            <span className="bar-two" />
            <span />
          </button>
        </Container>
      </header>
    );
  },
};
