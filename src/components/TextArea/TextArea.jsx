import { useState } from 'react';

function TextArea({element}) {
  const [value, setValue] = useState(element.props.value)

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