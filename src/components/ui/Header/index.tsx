import HeaderContent from "@/components/ui/Header/HeaderContent";
import { getHeader } from "@/lib/queries";

export const NavlinkStyles =
  "rounded-lg p-4 text-base font-bold hover:text-[#bdbdbd] transition transition-colors duration-300";

export default async function Header() {
  const header = await getHeader();

  const { logo, menu } = header;

  return <HeaderContent menu={menu} logo={logo} />;
}
