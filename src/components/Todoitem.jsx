import React from 'react'
import Todos from './Todos'

const Todoitem = (props) => {

  return (
    props.data.map((el) => (
        <div key={el.id}>
            <Todos data={el} deleteinfo={props.deleteinfo}/>
        </div>
    ))

    
    
  )
}

export default Todoitem