import data from './const/data.json';
import Container from './components/Container/Container';
import { siteData } from './const/newData';

// function App() {
//   return (
//     <div>
//       {data.views.map((container, index) => [
//         <Container element={container} key={index} />
//       ])}
//     </div>
//   );
// }

function App() {
  return (
    <div>
      {siteData.map((container, index) => [
        <Container element={container} key={index} />
      ])}
    </div>
  );
}

export default App;
