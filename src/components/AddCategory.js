import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddCategory = ({setCategories}) => {
  
  const [inputValue, setinputValue] = useState('')

  const handleInputChange = (e => {
      setinputValue(e.target.value)
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if(inputValue.trim().length > 2) {
        setCategories(cats => [inputValue,...cats])
        setinputValue("")
    }
    
  }
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
        />
    </form>
  )
}

export default AddCategory

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}