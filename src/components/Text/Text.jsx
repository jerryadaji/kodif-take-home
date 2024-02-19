import useInteractionStyles from '../../hooks/useInteractionStyles';

function Text({element}) {
  // const {
  //   computedStyles,
  //   actions
  // } = useInteractionStyles({
  //   baseStyles: element.style.webStyle, 
  //   focusStyles: element?.style ? element?.style?.actions?.onFocus : {}, 
  //   hoverStyles: element?.style ? element?.style?.actions?.onHover : {} 
  // })

  return (
    <div 
      //style={computedStyles} 
      //{...actions}
      {...element.props}
    >{element.value}</div>
  );
}

export default Text;