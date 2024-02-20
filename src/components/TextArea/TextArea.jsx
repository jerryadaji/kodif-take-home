import { useContext, useEffect, useState } from 'react';
import PageContext from '../../PageContext/PageContext';

function TextArea({element}) {
  const [value, setValue] = useState(element.props.value)

  const {
    validateFormById
  } = useContext(PageContext)

  useEffect(() => {
    if(!!value){
      validateFormById(element.formId, true)
    } else {
      validateFormById(element.formId, false)
    }
  }, [value])

  return (
   <div>
      <textarea 
        style={element.props.style}
        placeholder={element.props.placeholder}
        onChange={e => setValue(e.target.value)}
        rows={element.props.rows}
        name={element.props.name}
        value={value}
      />
   </div>
  );
}

export default TextArea;