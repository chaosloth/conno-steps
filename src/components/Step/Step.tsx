import styles from "./step.module.css";

export type StepProps = {
  title: string;
  description: string;
};

export function Step(props: StepProps) {
  return (
    <div className={styles.step}>
      <div className={styles["step-top-row"]}>
        <div className={styles["step-icon"]}>{StepIcon()}</div>
        <div className={styles["step-label"]}>{props.title}</div>
      </div>
      <div className={styles["step-bottom-row"]}>
        <div className={styles["step-line"]}>
          <div className={styles["line"]}></div>
        </div>
        <div className={styles["step-description"]}>{props.description}</div>
      </div>
    </div>
  );
}

export function StepIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <circle cx="11" cy="11" r="11" fill="#D9D9D9" />
    </svg>
  );
}
