import { Button } from "../Button/Button";
import styles from "./TodoItem.module.css";

interface ToDoItem {
  name: string;
  done: boolean;
  onDeleteButtonClick: React.MouseEventHandler;
  onDoneButtonClick: React.MouseEventHandler;
}
export function TodoItem({
  name,
  done,
  onDeleteButtonClick,
  onDoneButtonClick,
}: ToDoItem) {
  //const [TodoItem, setTodoItem] = useState({text: "", id: 1, isDeleted: false});

  return (
    <li className={styles.item}>
      <span className={`${styles.name} ${done ? styles.done : ""}`}>
        {name}
      </span>
      {!done && <Button onClick={onDoneButtonClick}>Zrobione</Button>}
      <Button onClick={onDeleteButtonClick}>Usun</Button>
    </li>
  );
}
