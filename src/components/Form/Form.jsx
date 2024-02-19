import Container from '../Container/Container';

function Form({element}) {
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