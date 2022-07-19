import './App.css';
import Button from './components/Boton';
import Counter from './components/Counter';
import { useState } from 'react';


function App() {

  const [numClicks, setNumClicks] = useState(0);

  const onClickButton = () => {
    setNumClicks(numClicks + 1);
  };

  const restartCounter = () => {
    setNumClicks(0);
  };


  return (
    <div className="App">
      <header className="App-header">
        <h1>Clicks Counter</h1>
      </header>
      <Counter
        value={numClicks}/>
      <Button
          text='Click'
          isClickButton={true}
          onClickButton={onClickButton} />
        <Button
          text='Restart'
          isClickButton={false}
          onClickButton={restartCounter} />
    </div>
  );
}

export default App;
