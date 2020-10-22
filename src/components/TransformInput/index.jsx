import { useState } from 'react'

const UseInputChange = () => {
  const [input, setInput] = useState({})

  return [input, handleInputChange]
}