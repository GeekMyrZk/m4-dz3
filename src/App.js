import React, {useState} from "react";


function App() {

    const [newTaskText, setNewTaskText] = useState('')
    const [tasks, setTasks] = useState([])
    const AddTask = () => {
        if (newTaskText.trim() !== '') {
            setTasks([newTaskText, ...tasks]);
            setNewTaskText('');
        }
    };

    return (
      <>
        <div className='toDo'
             style={{
                 textAlign: 'center',
                 margin: '50px auto',
                 width: '300px',
                 padding: '20px',
                 border: '1px solid #ccc',
                 borderRadius: '8px',
                 boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
          <h1 style={{color: '#333'}}>Your tasks</h1>
          <input
              style={{
                  padding: '8px',
                  marginBottom: '10px',
                  width: '100%',
                  boxSizing: 'border-box'
              }}
              type="text"
              value={newTaskText}
              placeholder={'Enter your task'}
              onChange={(e)=> setNewTaskText(e.target.value)}
          />
          <button onClick={AddTask}
                  style={{
                      backgroundColor: '#4caf50',
                      marginLeft: '15px',
                      padding: '8px 15px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: "pointer",}}
                  onMouseEnter={event => event.target.style.backgroundColor = '#439a47'}
                  onMouseLeave={event => event.target.style.backgroundColor = '#4caf50'}
          >Add task</button>

          <ul className="tasks"
              style={{
                  listStyle: 'none',
                  padding: '0',
                  backgroundColor: '#94c979',
                  borderRadius: '4px'}}
          >{tasks.map((task, index) => (
              <li style={{
                  marginBottom: '5px',
                  padding: '8px',
                  borderRadius: '4px',
                  boxShadow: '0 0 5px rgba(0, 0, 0, 0.1)'
              }}
              key={index}>{task}</li>
              ))}
          </ul>
        </div>
      </>
    );
}

export default App;
