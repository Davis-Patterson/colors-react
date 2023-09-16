import React, { useState, useEffect } from 'react';

const ColorCard = ({
  getRandomColor,
  colorChangeTrigger,
  toggleColorChangeTrigger,
  showPrev,
  setIsPrev,
  setIsSettings,
  isSettings,
  isDarkMode,
}) => {
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [curColor, setCurColor] = useState(randomColor);
  const [prevColor, setPrevColor] = useState('');
  const [colorName, setColorName] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [isHues, setIsHues] = useState(false);

  const svgUrl = isLocked
    ? isDarkMode
      ? 'src/assets/svg-lock.svg'
      : 'src/assets/svg-lock-white.svg'
    : isDarkMode
    ? 'src/assets/svg-unlock.svg'
    : 'src/assets/svg-unlock-white.svg';

  function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == '#') {
      col = col.slice(1);
    }

    var num = parseInt(col, 16);

    var r = (num >> 16) + amt;

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    var b = ((num >> 8) & 0x00ff) + amt;

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    var g = (num & 0x0000ff) + amt;

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    return '#' + (g | (b << 8) | (r << 16)).toString(16);
  }

  const generateHues = () => {
    const hues = [];
    const numHues = 10; // Number of lighter and darker hues to generate

    // Generate darker hues
    for (let i = numHues; i > 0; i--) {
      const darkerHue = LightenDarkenColor(curColor, -i * 10);
      hues.push(darkerHue);
    }

    // Add the current color (original color)
    hues.push(curColor);

    // Generate lighter hues
    for (let i = 1; i <= numHues; i++) {
      const lighterHue = LightenDarkenColor(curColor, i * 10);
      hues.push(lighterHue);
    }
    // console.log(hues);
    return hues;
  };

  const huesArray = generateHues();

  const handleButton = (event) => {
    setIsLocked(!isLocked);
    event.stopPropagation();
  };

  const handleHueChange = (hue) => {
    console.log('hue clicked: ', hue);
    setCurColor(hue);
    setIsHues(false);
  };

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
        <div className='colorsContainer'>
          <div className='iconContainer'>
            <p className='hueButton2' onClick={(event) => hueToggle(event)}>
              ↕
            </p>
          </div>
          {huesArray.map((hue, index) => (
            <div
              key={index}
              className='colorsBox'
              style={{ backgroundColor: hue }}
              onClick={() => handleHueChange(hue)}
            ></div>
          ))}
        </div>
      ) : (
        <div
          className='colorBox'
          style={{ backgroundColor: curColor }}
          onClick={toggleColorChangeTrigger}
        >
          <div className='textContainer'>
            <p
              className='settingsButton'
              onClick={(event) => handleSetting(event)}
            >
              ≣
            </p>
            <p className='hueButton' onClick={(event) => hueToggle(event)}>
              ↕
            </p>
            <p
              className={`lockButton${isLocked ? ' locked' : ''}`}
              onClick={(event) => handleButton(event)}
              style={{ backgroundImage: `url(${svgUrl})` }}
            ></p>
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
