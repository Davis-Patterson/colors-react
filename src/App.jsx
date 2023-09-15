import React, { useState } from 'react';
import Header from 'components/Header';
import ColorCard from 'components/ColorCard';
import ColorInputs from 'components/ColorInputs';
import './App.css';

function App() {
  const [colorChangeTrigger, setColorChangeTrigger] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [isPrev, setIsPrev] = useState(false);

  function getRandomColor() {
    return (
      '#' +
      '000000'.replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      })
    );
  }

  const toggleColorChangeTrigger = () => {
    if (!showPrev) {
      setColorChangeTrigger(colorChangeTrigger + 1);
    }
  };

  const handlePrev = () => {
    setShowPrev(!showPrev);
  };

  return (
    <>
      <Header />
      <div className='container'>
        <div className='containerColumn'>
          <div className='colorContainer'>
            {[1, 2, 3, 4, 5].map((index) => (
              <ColorCard
                key={index}
                getRandomColor={getRandomColor}
                colorChangeTrigger={colorChangeTrigger}
                toggleColorChangeTrigger={toggleColorChangeTrigger}
                showPrev={showPrev}
                setIsPrev={setIsPrev}
              />
            ))}
          </div>
          <ColorInputs
            handlePrev={handlePrev}
            showPrev={showPrev}
            isPrev={isPrev}
          />
        </div>
      </div>
    </>
  );
}

export default App;
