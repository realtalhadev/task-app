export default function AddTask({taskList, setTaskList ,task ,setTask }){

    function handleSubmit(e){
        e.preventDefault()

        // to control the behaviour of refresh we use e.preventDefault
if(task.id){
    const date = new Date();
    const updatedTaskList = taskList.map((todo)=> todo.id===task.id ? {id:task.id, name:task.name,time:` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}: todo ,
    );
    setTaskList(updatedTaskList);
    setTask({});
}
else{
       const date = new Date();
        const newTask = {
            id: date.getTime(),
            name:e.target.task.value,
            time:` ${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,//1st loacle gives me current time and the 2nd gives me date
        };
        setTaskList([...taskList, newTask]);
        setTask({}) ;
        // e.target.task.value =""; 

}
       // here this e target removes the value writen in input box as something is entered
    }
  return(
    <>
    <section className="addTask" onSubmit={handleSubmit}>
<form>
    <input 
    type="text"
     name="task"
    autoComplete="off"
    placeholder="add task" 
    maxLength={25} 
    value={task.name || ""} 
    onChange={(e)=> setTask({ ...task, name: e.target.value})}
    />
    <button type="submit">{task.id ? "Update":"Add"}</button>
</form>
    </section>
    
    </>
  )
}