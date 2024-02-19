import React from 'react'

const Select = ({element}) => {
  return (
    <select name={element.props.name} style={element.props.style}>
      {element.props.options.map(option => (
          <option key={option.value} value={option.value}>
              {option.label}
          </option>
      ))}
  </select>
  )
}

export default Select