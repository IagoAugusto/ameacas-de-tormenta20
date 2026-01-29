import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function Header() {
  return (
    <Disclosure
      as="nav"
      className="w-full bg-red flex text-white h-16 items-center px-3"
    >
      <div className="border-b-2 h-full items-center inline-flex">
        <Link href="/criar-ameacas">Criar Ameaças</Link>
      </div>
      <div className="px-2 sm:px-6 lg:px-8">
        <Link href="/criar-ameacas">Calcular ND</Link>
      </div>
    </Disclosure>
  );
}

export default Header;
