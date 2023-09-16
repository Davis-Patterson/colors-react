import React, { useState, useEffect } from 'react';

const ColorCard = ({
  getRandomColor,
  colorChangeTrigger,
  toggleColorChangeTrigger,
  showPrev,
  setIsPrev,
  setIsSettings,
  isSettings,
}) => {
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [curColor, setCurColor] = useState(randomColor);
  const [prevColor, setPrevColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [isHues, setIsHues] = useState(false);

  const handleButton = (event) => {
    setIsLocked(!isLocked);
    event.stopPropagation();
  };

  const handleHueChange = () => {};

  const hueToggle = (event) => {
    setIsHues(!isHues);
    event.stopPropagation();
  };

  const handleSetting = (event) => {
    setIsSettings(!isSettings);
    event.stopPropagation();
  };

  useEffect(() => {
    if (!isLocked) {
      if (colorChangeTrigger) {
        setPrevColor(randomColor);
        setRandomColor(getRandomColor());
        setIsPrev(true);
      }
    }
  }, [colorChangeTrigger]);

  useEffect(() => {
    if (!isLocked) {
      const matchList = ntc.name(curColor);
      const nearestColor = matchList[1];
      setColorName(nearestColor);
    }
  }, [curColor, colorChangeTrigger, showPrev]);

  useEffect(() => {
    if (!isLocked) {
      if (showPrev) {
        setCurColor(prevColor);
      } else {
        setCurColor(randomColor);
      }
    }
  });

  return (
    <>
      {isHues ? (
        <div
          className='colorBox'
          style={{ backgroundColor: prevColor }}
          onClick={handleHueChange}
        >
          <div className='textContainer'>
            <p
              className='hueButton2'
              style={{ color: curColor }}
              onClick={(event) => hueToggle(event)}
            >
              H
            </p>
          </div>
        </div>
      ) : (
        <div
          className='colorBox'
          style={{ backgroundColor: curColor }}
          onClick={toggleColorChangeTrigger}
        >
          <div className='textContainer'>
            <p
              className='hueButton'
              style={{ color: curColor }}
              onClick={(event) => handleSetting(event)}
            >
              ≣
            </p>
            <p
              className='hueButton'
              style={{ color: curColor }}
              onClick={(event) => hueToggle(event)}
            >
              H
            </p>
            <button
              className={`colorButton ${isLocked && 'locked'}`}
              onClick={(event) => handleButton(event)}
            ></button>
            <div className='textBox'>
              <p className='colorName'>{colorName}</p>
              <p className='colorHex'>{curColor.slice(1).toUpperCase()}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorCard;
