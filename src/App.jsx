import React, { useState } from 'react';
import Header from 'components/Header';
import ColorCard from 'components/ColorCard';
import Nav from 'components/Nav';
import './App.css';

function App() {
  const [colorChangeTrigger, setColorChangeTrigger] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [numColors, setNumColors] = useState(5);

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

  const handleInputChange = (e) => {
    setNumColors(e);
  };

  return (
    <>
      <Header />
      <Nav
        handlePrev={handlePrev}
        showPrev={showPrev}
        isPrev={isPrev}
        handleInputChange={handleInputChange}
      />
      <div className='container'>
        <div className='containerColumn'>
          <div className='colorContainer'>
            {[...Array(numColors).keys()].map((index) => (
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
        </div>
      </div>
    </>
  );
}

export default App;
