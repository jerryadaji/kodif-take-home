import { useCallback, useEffect, useState } from 'react'

const useInteractionStyles = ({
  baseStyles, 
  focusStyles, 
  hoverStyles
}) => {
  const [computedStyles, setComputedStyles] = useState(baseStyles);
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    let tempStyles = {...baseStyles}

    if(isFocused){
      tempStyles = {
        ...tempStyles,
        ...focusStyles,
      }
    }

    if(isHovered){
      tempStyles = {
        ...tempStyles,
        ...hoverStyles,
        cursor: 'pointer'
      }
    }

    setComputedStyles(tempStyles)

  }, [
    baseStyles, 
    focusStyles, 
    hoverStyles,
    isFocused, 
    isHovered, 
  ])

  const onMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])
  
  const onMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])
  
  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return { 
    computedStyles, 
    setIsFocused, 
    actions: {
      onBlur,
      onFocus,
      onMouseEnter,
      onMouseLeave,
    }
  }
}

export default useInteractionStyles