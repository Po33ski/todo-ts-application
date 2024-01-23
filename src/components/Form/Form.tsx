import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Form.module.css";

interface Form {
  onFormSubmit: (newTodoName: string) => void;
}
export function Form({ onFormSubmit }: Form) {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(inputValue);
      }}
      className={styles.form}
    >
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        className={styles.input}
        type="text"
      />
      <Button>Dodaj</Button>
    </form>
  );
}
