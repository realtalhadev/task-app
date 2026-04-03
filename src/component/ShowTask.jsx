export default function ShowTask({taskList, setTaskList ,task , setTask}){
    // const tasks = [{id:10001, name: "Task A", time:"9:30:01 AM  01/04/2026"},
    //     {id:10002, name: "Task B", time:"9:30:01 AM  01/04/2026"},
    //     {id:10003, name: "Task C", time:"9:30:01 AM  01/04/2026"}
    // ];
   // settasklist also contain the number of lists element so that is why we use .length to keep track of count 
   // 


   function handleEdit(id){
    const selectedTask = taskList.find((todo) => todo.id === id);
    setTask(selectedTask)
   }
   function handleDelete (id){
    const updatedTaskList = taskList.filter((todo)=> todo.id !== id );
    setTaskList(updatedTaskList)
   }
  return (
    <>
    <section className="showTask">
        <div className="head">
            <div>
            <span className="title">Todo</span>
            <span className="count">{taskList.length}</span>
            </div>
<button className="clearAll" onClick={() => setTaskList([])}>Clear All</button>
        </div>
        <ul>
{taskList.map((todo)=>(
    <li key={todo.id}>
                <p>
                    <span className="name">{todo.name}</span>
                    <span className="time">{todo.time}</span>
                </p>
                  <i className="bi bi-pencil-square"
                   onClick={()=> handleEdit(todo.id)}
                   ></i>
                  <i className="bi bi-trash" 
                  onClick={()=> handleDelete(todo.id)}
                  > </i>
            </li>
))}  
        </ul>
{/* // used for manual task dispalying and testing bcz we prefer to take care of dry rule  */}

        {/* <ul>

            < key =()>
                <p>
                    <span className="name">Task A</span>
                    <span className="time"> 22:00 2/4/2026</span>
                </p>
                <i className="bi bi-pencil-square">
                    </i>
                    <i className="bi bi-trash"></i>
            </li>
        </ul> */}

    </section>
    
    </>
  )
}