import { useEffect, useState } from "react"
import '../index.css'

const TodoList2 = () => {

  const [todoLists,setTodoLists] = useState(() => {

    const stored = localStorage.getItem("todos3") ;
    return JSON.parse(stored) || [] ;

  } )
  const [inputHandler, setInputHandler] = useState("") ;
  const [editId,setEditId] = useState(null) 
  const [filter,setFilter] = useState(() => {

    const stored = localStorage.getItem("filter") ;
    return JSON.parse(stored) || "all"

  } )
  const [search,setSearch] = useState("") ;
  const [theme,setTheme] = useState(() => {

    const stored = localStorage.getItem("theme") ;
    return JSON.parse(stored) || "light"

  } )

  console.log(setTheme);
  
  function handleTextChange(e) {

    setInputHandler(e.target.value) ;

  }


  
  function handleClick() {

    if(inputHandler.trim() === "" ) return

    if(editId) {

        setTodoLists(prev => prev.map((list) => list.id === editId ? {...list, data:inputHandler} : list ) );
        setEditId(null)

    }

    else {

    setTodoLists(prev => [...prev, { id : Date.now(), data : inputHandler, completed : false  } ] );


    }

    setInputHandler("");

  }

  function handleKeyDown(e) {

    if(e.key === "Enter") {

        handleClick()

    }    

  }

  useEffect(() => {

    localStorage.setItem("todos3" , JSON.stringify(todoLists) )

  }, [todoLists] )

  useEffect(() => {

    localStorage.setItem("filter" , JSON.stringify(filter) )

  }, [filter] )

  useEffect(() => {

    localStorage.setItem("theme" , JSON.stringify(theme) )

  }, [theme] )

  function handleCheckbox(id) {

    console.log(id);
    setTodoLists(prev => prev.map((list) => list.id === id ? {...list, completed : !list.completed} : list ) );

    
  }

  function handleDelete(id) {

    setTodoLists(prev => prev.filter((list) => list.id !== id ) );


  }

  function handleEdit(id,data) {

    console.log(id);
    setEditId(id);
    setInputHandler(data)

    

  }

  console.log(inputHandler);
  console.log(todoLists);
  console.log(editId);
  
  function handleClear() {

    setTodoLists([]) ;

  }

  const completedTods = todoLists.filter((list) => list.completed ===  true  );
  const notCompletedTods = todoLists.filter((list) => list.completed ===  false  );
  console.log(completedTods);
  console.log(notCompletedTods);
  console.log(filter);
  
  const filteredTodos = todoLists.filter((list) => {

    if(filter === "completed") return list.completed === true;
    if(filter === "notcompleted") return list.completed === false;
    return true

  }  )
  

  function handleSearch(e) {

    setSearch(e.target.value)

  }

  const searchTodos = filteredTodos.filter((list) => list.data.toLowerCase().includes(search.toLowerCase()) );
  

  return (
    <>
      <div className={`container ms-4 mt-4 ${theme} `  } >
        <h1> Todo Lists </h1>
        <div className=" mt-3 d-flex gap-3" >
            <input type="text" value={inputHandler} onKeyDown={handleKeyDown} onChange={handleTextChange} />
            <button onClick={handleClick} > { editId ? "Update" : "Add" } </button>
        </div>
        <div className=" mt-3" >

                 {    todoLists.length > 0  ? (  
                    <>
            <button onClick={() => setTheme(theme === "light" ? "dark" : "light" ) } >{theme === "light" ? "switch to dark" : "switch to light" }</button>
            <div className=" d-flex gap-4 mb-3" >
                <button onClick={() => setFilter("all") } >All</button>
                <button onClick={() => setFilter("completed") } >Completed</button>
                <button onClick={() => setFilter("notcompleted") } >NotCompleted</button>
            </div>

            <div className=" m-2" >
                <input type="text" value={search} placeholder="Search Lists" onChange={handleSearch} />
            </div>

            <ul style={{ display:"grid", gap:"10px", paddingLeft:"0"}}  >
                        
                    {searchTodos?.map((list) => 
                    <li key={list.id} className=" d-flex gap-3" style={{ textDecoration : list.completed ? "line-through" : "none"  }} >
                    <input type="checkbox" checked={list.completed} onChange={() => handleCheckbox(list.id) } />
                        
                    <span>{list.data}</span>

                    <button onClick={() => handleDelete(list.id) } >Delete</button>
                    <button onClick={() => handleEdit(list.id, list.data) } >Edit</button>
                    </li>
               
                
                
                ) }

                
            </ul> 
            <p> not complete Todos/tasks : { notCompletedTods.length }  </p>
            <button onClick={handleClear} >Clear All</button>

            </>)
            : <p style={{color:"red", fontSize:"20px"}} > Lists is empty </p> } 
        </div>
      </div>
    </>
  )
}

export default TodoList2
