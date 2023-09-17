import React, { useState, useEffect } from 'react';
import Header from 'components/Header';
import ColorCard from 'components/ColorCard';
import Settings from 'components/Settings';
import Nav from 'components/Nav';
import './App.css';

function App() {
  const [colorChangeTrigger, setColorChangeTrigger] = useState(0);
  const [showPrev, setShowPrev] = useState(false);
  const [isPrev, setIsPrev] = useState(false);
  const [numColors, setNumColors] = useState(5);
  const [isSettings, setIsSettings] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function getRandomColor() {
    return (
      '#' +
      '000000'.replace(/0/g, function () {
        return (~~(Math.random() * 16)).toString(16);
      })
    );
  }

  useEffect(() => {
    // Toggle the 'darkMode' class on the body based on the isDarkMode state
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
                getRandomColor={getRandomColor}
                colorChangeTrigger={colorChangeTrigger}
                toggleColorChangeTrigger={toggleColorChangeTrigger}
                showPrev={showPrev}
                setIsPrev={setIsPrev}
                setIsSettings={setIsSettings}
                isSettings={isSettings}
                isDarkMode={isDarkMode}
              />
            ))}
          </div>
          {isSettings ? <Settings /> : null}
        </div>
      </div>
    </>
  );
}

export default App;
