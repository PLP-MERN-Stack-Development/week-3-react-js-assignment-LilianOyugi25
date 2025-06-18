import { useState } from 'react';

export default function TaskManager() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Harvest maize", completed: false },
    { id: 2, text: "Deliver milk to co-op", completed: true }
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  return (
    <div className="space-y-3">
      <div className="flex gap-2">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add farm task..."
          className="flex-1 p-2 border rounded"
        />
        <button 
          onClick={addTask}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {tasks.map(task => (
          <div key={task.id} className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => setTasks(tasks.map(t => 
                t.id === task.id ? {...t, completed: !t.completed} : t
              )}
              className="h-5 w-5"
            />
            <span className={task.completed ? 'line-through text-gray-500' : ''}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
