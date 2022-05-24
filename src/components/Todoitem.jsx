import React from 'react'
import Todos from './Todos'

const Todoitem = (props) => {

  return (
    props.data.map((el) => (
        <div key={el.id}>
            <Todos data={el}/>
        </div>
    ))

    
    
  )
}

export default Todoitem