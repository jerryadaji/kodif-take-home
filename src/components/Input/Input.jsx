import { useState } from 'react';
import useInteractionStyles from '../../hooks/useInteractionStyles';

function Input({element}) {
  const [value, setValue] = useState(element.props.value)
  // const {
  //   computedStyles,
  //   actions
  // } = useInteractionStyles({
  //   baseStyles: element.style.webStyle, 
  //   focusStyles: element?.style ? element?.style?.actions?.onFocus : {}, 
  //   hoverStyles: element?.style ? element?.style?.actions?.onHover : {} 
  // })

  return (
    <input
      // type='text'
      // style={computedStyles}
      // {...actions}
      // value={element.data.value}
      // placeholder={element.data.value}
      {...element.props}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
  );
}

export default Input;