import { useContext } from 'react';
import { CtxProvider } from './Context/index.js';
import { WrappedDiv } from './style.js';
import { Context } from "./Context/index"

export function Form({ children }){
  
  const { contexto } = useContext(Context)
  
  return(
    <form>
      {children}
      { contexto }
    </form>
  ) 
}

function App() {
  return (
    <CtxProvider>
      <div className="App">
        <Form>
          <WrappedDiv>
            Oi
          </WrappedDiv>
        </Form>
      </div>
    </CtxProvider>    
  );
}

export default App;
