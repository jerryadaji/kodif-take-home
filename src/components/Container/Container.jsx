import useInteractionStyles from '../../hooks/useInteractionStyles';
import Button from '../Button/Button';
import Form from '../Form/Form';
import Image from '../Image/Image';
import Input from '../Input/Input';
import Link from '../Link/Link';
import Select from '../Select/Select';
import Text from '../Text/Text';
import TextArea from '../TextArea/TextArea';

function Container({element}) {

  return (
    <div
      {...element.props}
    >
      {element.elements.length && element.elements.map((child, index) => {
        if(child.type === "Container"){
          return <Container key={index} element={child} />
        }
        if(child.type === "Form"){
          return <Form key={index} element={child} />
        }
        if(child.type === "Button"){
          return <Button key={index} element={child} />
        }
        if(child.type === "Input"){
          return <Input key={index} element={child} />
        }
        if(child.type === "TextArea"){
          return <TextArea key={index} element={child} />
        }
        if(child.type === "Text"){
          return <Text key={index} element={child} />
        }
        if(child.type === "Image"){
          return <Image key={index} element={child} />
        }
        if(child.type === "Select"){
          return <Select key={index} element={child} />
        }
        if(child.type === "Link"){
          return <Link key={index} element={child} />
        }
      })}
    </div>
  );
}

export default Container;