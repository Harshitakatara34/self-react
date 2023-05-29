import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Pinitem from './Pinitem';
const InputBoxes = ({length,label}) => {
  const [value,setValue]=useState(new Array(length).fill(""))
  return <>{label}
  {value.map((item,index)=><Pinitem key={index}/>)}
  </>
}
InputBoxes.prototype={
  length:PropTypes.number.isRequired,
  label:PropTypes.string
}

InputBoxes.defaultProps={
  label:"Label"
}
export default InputBoxes
