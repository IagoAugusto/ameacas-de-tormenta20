import { Disclosure, Menu, Transition } from "@headlessui/react";
import Link from "next/link";

function Header() {
  return (
    <Disclosure
      as="nav"
      className="w-full bg-red flex text-white h-16 items-center px-3"
    >
      <img src="/logo.png" alt="Logo" className="h-12 w-12 mr-2" />
      <div className="border-b-2 h-full items-center inline-flex">
        <Link href="/criar-ameacas">Criar Ameaças</Link>
      </div>
    </Disclosure>
  );
}

export default Header;
