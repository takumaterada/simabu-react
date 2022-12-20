import classes from "./Links.module.css";

const ITEMS = [
  {
    href: "https://nextjs.org/learn",
    title: "Documentation \u2192",
    description: "Find in-depth information about Next.js features and API.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Learn →",
    description: "Learn about Next.js in an interactive course with quizzes!",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Discover →",
    description: "Discover and deploy boilerplate example Next.js projects.",
  },
  {
    href: "https://nextjs.org/learn",
    title: "Deploy →",
    description:
      "Instantly deploy your Next.js site to a public URL with Vercel.",
  },
];

export function Links() {
  return (
    <div className={classes.grid}>
      {ITEMS.map((item) => {
        return (
          <a key={item.title} href={item.href} className={classes.card}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </a>
        );
      })}
    </div>
  );
}
