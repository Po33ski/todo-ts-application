import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler;
}

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
}
