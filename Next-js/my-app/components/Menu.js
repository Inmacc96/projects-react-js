import React from "react";
import Link from "next/link";

import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.menu}>
      <ul>
        <li>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </li>
        <li>
          <Link href="/movies">
            <a>Película</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contacto</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
