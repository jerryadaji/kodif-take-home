import Container from './components/Container/Container';
import { siteData } from './const/data';
import PageContext from './PageContext/PageContext';
import { useCallback, useMemo, useState } from 'react';

function App() {
  const [pageData, setPageData] = useState({
    forms: {}
  })

  const createFormById = useCallback((id) => {
    let tempState = {...pageData}
    tempState = {
      ...tempState, 
      forms: {
        ...tempState.forms,
        [id]: {
          isValidated: false
        }
      }
    }
    setPageData(tempState)
  }, [pageData])
  
  const validateFormById = useCallback((id, value) => {
    let tempState = {...pageData}
    tempState = {
      ...tempState, 
      forms: {
        ...tempState.forms,
        [id]: {
          isValidated: value
        }
      }
    }
    setPageData(tempState)
  }, [pageData])

  const contextValue = useMemo(() => {
    return ({
      createFormById,
      pageData, 
      setPageData,
      validateFormById
    })
  }, [
    createFormById,
    pageData, 
    setPageData,
    validateFormById
  ])

  return (
    <PageContext.Provider value={contextValue}>
      {siteData.map((container, index) => [
        <Container element={container} key={index} />
      ])}
   </PageContext.Provider>
  );
}

export default App;
