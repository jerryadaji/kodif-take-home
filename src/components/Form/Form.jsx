import { useContext, useEffect } from 'react';
import Container from '../Container/Container';
import PageContext from '../../PageContext/PageContext';

function Form({element}) {
  const {
    createFormById
  } = useContext(PageContext)

  useEffect(() => {
    createFormById(element.props.id)
  },[])

  return (
    <form
      {...element.props}
    >
      {element.elements.length && element.elements.map((child, index) => {
        if(child.type === "Container"){
          return <Container key={index} element={child} />
        }
      })}
    </form>
  );
}

export default Form;