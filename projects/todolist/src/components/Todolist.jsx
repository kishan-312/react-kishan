import { useEffect, useState } from "react"

const Todolist = () => {

  const [todoList,setTodoLists] = useState(() => {

    const saved = localStorage.getItem("todos") ;
    return JSON.parse(saved) || [] ;

  } )
  const [inputHandler,setInputHandler] = useState("") ;

  useEffect(() => {

    localStorage.setItem("todos" , JSON.stringify(todoList)) ;

  }, [todoList] )

  function handleChange(e) {

    setInputHandler(e.target.value)

  }

  function handleClick(e) {
    console.log(e);

    if(inputHandler.trim() === "" ) return

    setTodoLists(prev => [...prev, { id : Date.now() , completed : false, data : inputHandler } ] );
    setInputHandler("");

    

  }

  function handleKeyDown(e) {

   if(e.key === "Enter") {

    handleClick()

   }
    

  }

  function handleDeleteClick(id) {

    console.log(id);
    setTodoLists(prev => prev?.filter((data) => data.id !== id ) )
    

  }

  function handleCheckboxChange(id) {
    console.log(id);
    setTodoLists(prev => prev.map((list) => list.id === id ? {...list, completed : !list.completed } : list  ) )
    
  }

  console.log(inputHandler);
  console.log(todoList);
  
  
 
  return (
    <>
      <div className=' container mt-5' >
            <div className=' d-flex gap-4' >
                <input type="text" value={inputHandler} onKeyDown={handleKeyDown} onChange={handleChange} />
                <button onClick={handleClick} >Add</button>
            </div>
      </div>

        <div>
            <h4>Lists : </h4>
            <ul style={{ listStyle:"none", display: "flex", flexDirection:"column", gap:"10px" }} >
                {
                    todoList?.map((list) => (
                       
                         <div className=" d-flex gap-4"   key={list.id} >
                            <input type="checkbox" checked={list.completed} onChange={() => handleCheckboxChange(list.id) } />
                            <li style={{ textDecoration : list.completed ? "line-through" : "none" ,   }} >{list.data}</li>
                            <button onClick={() => handleDeleteClick(list.id) } >Delete</button>
                         </div>

                    ) )
                }
            </ul>
        </div>
    </>
  )
}

export default Todolist
