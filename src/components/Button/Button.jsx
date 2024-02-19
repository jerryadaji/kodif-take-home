import useInteractionStyles from '../../hooks/useInteractionStyles';

function Button({element}) {
  const {
    computedStyles,
    actions
  } = useInteractionStyles({
    baseStyles: element.props.style, 
    focusStyles: element.focusStyle, 
    hoverStyles: element.hoverStyle 
  })

  return (
    <button
    {...actions}
    {...element.props}
    style={computedStyles}
    >{element.props.value}</button>
  );
}

export default Button;
