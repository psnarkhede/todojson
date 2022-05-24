import React from "react";
import Styles from "./Todos.module.css"

const Todos = (props) => {

    const [isCompleted, setIsCompleted] = React.useState(props.data.isCompleted)

  return (
    
        <div className={Styles.tododiv} key={props.data.id}>
          <input className={Styles.check}
            onClick={(e) => setIsCompleted(e.target.checked)}
            type="checkbox"
          />

        <div className={Styles.text}>
          <p className={isCompleted ? Styles.checked : ""}>{props.data.todo}</p>
        </div>

        <div className={Styles.btn}>
          <button className={Styles.delete} >Delete</button>
        </div>
        </div>
  );
};

export default Todos;
