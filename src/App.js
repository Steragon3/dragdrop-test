import logo from './logo.svg';
import './App.css';
import {DragDropContext} from 'react-beautiful-dnd'
import DiaryEditor from './components/DiaryEditor/DiaryEditor';
function App() {
  const onDragEnd = () => {

  }

  return (
    <div className="App">
      <DiaryEditor></DiaryEditor>
      {/* {initialData.columnOrder.map((columnId) => {
          const column = initialData.columns[columnId]
          const tasks = column.taskIds.map((tid) => initialData.tasks[tid])
          
          return <Column key={column.id} column={column} tasks={tasks}></Column>
        })
      } */}
    </div>
  );
}

export default App;
