import { useState, ChangeEvent } from "react"
import { usePeopleList } from "./reducers/peopleList"

const  App = () => { 
  
  const [list, dispatch] = usePeopleList();
  const[nameInput, setNameinput] = useState ('')

  const handleAddButton = () => {
    if (nameInput) {
      dispatch ({
        type: 'ADD',
        payload: {
          name: nameInput
        }
      });
      setNameinput('')
    }

  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNameinput (e.target.value)

  }

  return (
    
    
    <div>
      <input type="text" value={nameInput} onChange={handleInputChange} className="border-2" />
      <button onClick={handleAddButton}>Adicionar</button>
      <hr />
      Lista de pessoas: 
      <ul>
        {list.map((item, index)=> (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
