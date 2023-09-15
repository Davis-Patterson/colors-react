import React, { useState } from 'react';
import Header from 'components/Header';
import ColorCard from 'components/ColorCard';
import './App.css';

function App() {
  const [colorChangeTrigger, setColorChangeTrigger] = useState(0);

  function getRandomColor() {
    return (
      '#' +
      '000000'.replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      })
    );
  }

  const toggleColorChangeTrigger = () => {
    setColorChangeTrigger(colorChangeTrigger + 1);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div className='colorContainer'>
          {[1, 2, 3, 4, 5].map((index) => (
            <ColorCard
              key={index}
              getRandomColor={getRandomColor}
              colorChangeTrigger={colorChangeTrigger}
              toggleColorChangeTrigger={toggleColorChangeTrigger}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
