import React from "react";
import styles from "./Styles.module.css";
import ScrollController from "@/features/Home/shared/components/ScrollController";

// context
import { useScroll } from "@/features/Home/shared/context/scrollContext";

type HeaderProps = {
  title: string;
};

function Header({ title }: HeaderProps) {
  const { handleScroll } = useScroll();

  return (
    <div className={styles.header}>
      <ScrollController scroll={handleScroll} />
      <h2 className={styles.headerTitle}>{title}</h2>
    </div>
  );
}

export default Header;
