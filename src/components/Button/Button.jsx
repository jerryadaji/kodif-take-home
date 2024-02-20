import { useContext, useEffect, useState } from 'react';
import useInteractionStyles from '../../hooks/useInteractionStyles';
import PageContext from '../../PageContext/PageContext';

function Button({element}) {
  const [isDisabled, setIsDisabled] = useState(element.props.disabled);

  const {
    computedStyles,
    actions
  } = useInteractionStyles({
    baseStyles: element.props.style, 
    focusStyles: element.focusStyle, 
    hoverStyles: element.hoverStyle 
  })

  const {
    pageData
  } = useContext(PageContext)

  useEffect(() => {
    if(pageData?.forms){
      setIsDisabled(!pageData?.forms[element.formId]?.isValidated)
    } else {
      setIsDisabled(element.props.disabled)
    }
  }, [pageData, pageData])

  return (
    <button
      {...actions}
      {...element.props}
      style={isDisabled ? element.disabledStyle : computedStyles}
      disabled={isDisabled}
    >{element.props.value}</button>
  );
}

export default Button;
