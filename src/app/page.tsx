import Image from "next/image";
import styles from "./page.module.css";
import Timeline from "@/components/Timeline/Timeline";

export default function Home() {
  return (
    <main className={styles.main}>
      <Timeline />
    </main>
  );
}
