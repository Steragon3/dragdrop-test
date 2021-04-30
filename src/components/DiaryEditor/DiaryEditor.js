import React, {useState} from 'react';
import PropTypes from 'prop-types';
import initialData from '../../initialData'
import {Droppable, DragDropContext} from 'react-beautiful-dnd'
import TaskList from '../TaskList/TaskList'

const DiaryEditor = () => {

  let [items, setItems] = useState(initialData)

  let onDragEnd = (result) => {
    console.log(result)
    document.getElementById(`comp${result.draggableId}`).classList.remove('dragging')
    if(!result.destination) return;
    const tempitems = Array.from(items)
    const [reorderedItem] = tempitems.splice(result.source.index,1)
    tempitems.splice(result.destination.index, 0, reorderedItem)

    setItems(tempitems)
  }

  let onDragStart = (result) => {
    console.log(result)
    document.getElementById(`comp${result.draggableId}`).classList.add('dragging')
  }
  return (
    <div>
      DiaryEditor Component
      <DragDropContext
          onDragEnd={onDragEnd}
          onDragStart={onDragStart}>

          <Droppable
            droppableId="tasks">
              {(provided, snapshot) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  <TaskList items={items}>
                  </TaskList>
                  {provided.placeholder}
                </div>
              )
                
              }
          </Droppable>
        </DragDropContext>
    </div>
  )
}

DiaryEditor.propTypes = {};

DiaryEditor.defaultProps = {};

export default DiaryEditor;
