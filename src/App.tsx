import './App.css';
import { ContextProvider } from './context-provider/context-provider';

function App() {
  return (
    <ContextProvider>
      <div>
        <p>{'Hey Maddie'}</p>
      </div>
    </ContextProvider>
  );
}

export default App;
