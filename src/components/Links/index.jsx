import { useCallback, useState } from "react";
import classes from "./Links.module.css";

export function Links({ items }) {
  return (
    <div className={classes.grid}>
      {items.map((item) => {
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
