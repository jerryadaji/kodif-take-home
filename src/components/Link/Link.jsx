import useInteractionStyles from '../../hooks/useInteractionStyles';
import Container from '../Container/Container';

function Link({element}) {
  const {
    computedStyles,
    actions
  } = useInteractionStyles({
    baseStyles: element.props.style, 
    focusStyles: element.focusStyle, 
    hoverStyles: element.hoverStyle 
  })

  return (
    <a
      {...actions}
      {...element.props}
      style={computedStyles}
    >
      {element.text && element.text}
      {element.elements.length && element.elements.map((child, index) => {
        if(child.type === "Container"){
          return <Container key={index} element={child} />
        }
      })}
    </a>
  );
}

export default Link;