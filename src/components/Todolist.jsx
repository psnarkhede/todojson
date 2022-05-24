import React, { useEffect } from "react";
import Todoitem from "./Todoitem";
import Styles from "./Todolist.module.css"


const Todolist = () => {
  const [input, setInput] = React.useState([]);

  const [todo, setTodo] = React.useState("");

  const saveinfo = () => {
    if(todo !== ""){
    fetch("http://localhost:1111/todo",{
        method:"POST",
        headers:{"content-type" : "application/json"},
        body:JSON.stringify({
            "todo":todo,
            "isCompleted":false
        })
    }).then((res) => res.json())
    .then((res) => {
      setInput([...input,res]);
      setTodo("");
    });
  }
  };

  const getdata = (val) => {
      fetch(`http://localhost:1111/todo?_page=${val}&_limit=4`)
        .then((res) => res.json())
        .then((res) => {
          setInput(res);
        });
  }

  useEffect(() => {
    fetch("http://localhost:1111/todo?_page=1&_limit=4")
      .then((res) => res.json())
      .then((res) => {
        setInput(res);
      });
  }, []);

  return (
    <div>
      <div className={Styles.header}>
      <input placeholder="Task..." className={Styles.input} value={todo} onChange={(e) => (setTodo(e.target.value))}/>

      <button className={Styles.add} onClick={() => (saveinfo())}>+</button>
      </div>
      <Todoitem data={input}/>

      <div className={Styles.pageno}>
          <p className={Styles.page}>Pages:</p> 
          <button className={Styles.btn1} onClick={() => (getdata(1))}>1</button>
          <button className={Styles.btn2} onClick={() => (getdata(2))}>2</button>
          <button className={Styles.btn3} onClick={() => (getdata(3))}>3</button>
      </div>
    </div>
  );
};

export default Todolist;
