import React, {useState} from 'react';
import PropTypes from 'prop-types';
import initialData from '../../initialData'
import {Droppable, DragDropContext} from 'react-beautiful-dnd'
import TaskList from '../TaskList/TaskList'

const DiaryEditor = () => {

  let [items, setItems] = useState(initialData)

  let onDragEnd = (result) => {
    console.log(result)
    if(!result.destination) return;
    const tempitems = Array.from(items)
    const [reorderedItem] = tempitems.splice(result.source.index,1)
    tempitems.splice(result.destination.index, 0, reorderedItem)

    setItems(tempitems)
  }

  return (
    <div>
      DiaryEditor Component
      <DragDropContext
          onDragEnd={onDragEnd}>
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
