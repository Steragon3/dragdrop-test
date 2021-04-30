import React from 'react';
import PropTypes from 'prop-types';
import {HeadingComponent, TextComponent} from '../../components'

const DragableItem = ({item, index}) => {

  switch(item.type){
    case 'Heading':
      return (
        <HeadingComponent item={item} index={index}>
        </HeadingComponent>
      )
    case 'Text':
      return (
        <TextComponent item={item} index={index}>
        </TextComponent>
      )
    default:
      return (
      <>
      </>
      )
  }
}
export default DragableItem;
