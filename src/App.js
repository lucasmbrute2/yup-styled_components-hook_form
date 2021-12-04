import { WrappedDiv } from './style.js';

export function Form({ children }){
  return(
    <form>
      {children}
    </form>
  ) 
}

function App() {
  return (
    <div className="App">
      <Form>
        <WrappedDiv>
          Oi
        </WrappedDiv>
      </Form>
    </div>
  );
}

export default App;
