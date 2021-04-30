import React from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd'

const TextComponent = ({item, index}) => {
  
  return (
    <Draggable draggableId={item.id} index={index}>
    {(provided, snapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className="task_box text">
        {item.value}
      </div>
      )
    }
  </Draggable>
  )
}

export default TextComponent;
