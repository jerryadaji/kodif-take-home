
function Image({element}) {
  return (
    <img 
      alt={element.props.alt}
      {...element.props}
    />

   
  );
}

export default Image;