import classes from "./Header.module.css";
import Link from "next/link";

const NAV_ITEMS = [
  { href: "/", label: "index" },
  { href: "/about", label: "About" },
];

export const Header = () => {
  return (
    <header className={classes.header}>
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href}>
            <p className={classes.anchor}>{item.label}</p>
          </Link>
        );
      })}
    </header>
  );
};
