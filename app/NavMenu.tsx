import Link from "next/link";
import Image from "next/image";

const links = ["About", "Blog", "Users"];

export default function NavMenu() {
  return (
    <nav className="flex h-[70px] items-center justify-between bg-stone-950 p-2 text-stone-200">
      <Link href={"/"}>
        <Image src="/logo.svg" width={216} height={30} alt="Nextspace logo" priority={true}/>
      </Link>
      <ul className="mx-1 flex list-none">
        {links.map((link) => (
          <li className="flex h-[70px] items-center p-1" key={link}>
            <Link href={`${link.toLowerCase()}`}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
