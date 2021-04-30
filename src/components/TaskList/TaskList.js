import React from 'react';
import PropTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd'
import DragableItem from '../DragableItem/DragableItem';


const TaskList = ({items}) => {
  return (
      <div className="itemList">
      {items.map((item, index) => {
        return (
          <DragableItem item={item} index={index} />
          )
      })}
      </div>
    )
}

export default TaskList;
