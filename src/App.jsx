import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import ColorCard from 'components/ColorCard';
import Settings from 'components/Settings';
import Nav from 'components/Nav';
import './App.css';

function App() {
  const [colorChangeTrigger, setColorChangeTrigger] = useState(0);
  const [hexInputTrigger, setHexInputTrigger] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [numColors, setNumColors] = useState(5);
  const [isSettings, setIsSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(null);
  const [hexCodeInput, setHexCodeInput] = useState('');
  // is current = boolean
  // pass setIsCurrent & isCurrent to button in nav bar & card, click to toggle boolean
  // if state is false, read previous, if true read current

  function getRandomColor() {
    return (
      '#' +
      '000000'.replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      })
    );
  }

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('darkMode');
    } else {
      document.body.classList.remove('darkMode');
    }
  }, [isDarkMode]);

  const toggleColorChangeTrigger = () => {
    if (!showPrev) {
      setColorChangeTrigger(colorChangeTrigger + 1);
    }
  };

  const handlePrev = () => {
    if (isPrev) {
      setShowPrev(!showPrev);
    }
  };

  const handleInputChange = (e) => {
    setNumColors(e);
  };

  const handleDark = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    document.documentElement.style.setProperty('--num-color-boxes', numColors);
  }, [numColors]);

  return (
    <>
      <Header />
      <Nav
        handlePrev={handlePrev}
        showPrev={showPrev}
        isPrev={isPrev}
        handleInputChange={handleInputChange}
        handleDark={handleDark}
        isDarkMode={isDarkMode}
      />
      <div className='container'>
        <div className='settingsContainer'>
          <div className='colorContainer'>
            {[...Array(numColors).keys()].map((index) => (
              <ColorCard
                key={index}
                index={index}
                getRandomColor={getRandomColor}
                colorChangeTrigger={colorChangeTrigger}
                toggleColorChangeTrigger={toggleColorChangeTrigger}
                showPrev={showPrev}
                isPrev={isPrev}
                setIsPrev={setIsPrev}
                setIsSettings={setIsSettings}
                isSettings={isSettings}
                isDarkMode={isDarkMode}
                selectedColorIndex={selectedColorIndex}
                setSelectedColorIndex={setSelectedColorIndex}
                hexCodeInput={hexCodeInput}
                hexInputTrigger={hexInputTrigger}
              />
            ))}
          </div>
          {isSettings ? (
            <Settings
              setIsSettings={setIsSettings}
              hexCodeInput={hexCodeInput}
              setHexCodeInput={setHexCodeInput}
              hexInputTrigger={hexInputTrigger}
              setHexInputTrigger={setHexInputTrigger}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default App;
