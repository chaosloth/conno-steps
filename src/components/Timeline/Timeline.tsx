import { Step } from "../Step/Step";
import styles from "./timeline.module.css";

export default function Timeline() {
  return (
    <div className={styles.timeline}>
      A timeline here
      <Step title={"A step"} description={"A longer step description"}></Step>
      <Step title={"A step"} description={"A longer step description"}></Step>
      No More Steps
    </div>
  );
}
