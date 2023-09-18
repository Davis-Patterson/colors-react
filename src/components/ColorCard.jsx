import React, { useState, useEffect } from 'react';

const ColorCard = ({
  index,
  getRandomColor,
  colorChangeTrigger,
  toggleColorChangeTrigger,
  showPrev,
  isPrev,
  setIsPrev,
  setIsSettings,
  isSettings,
  isDarkMode,
  selectedColorIndex,
  setSelectedColorIndex,
  hexCodeInput,
  hexInputTrigger,
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

    // var r = (num >> 16) + amt;
    var r = Math.min(255, Math.max(0, (num >> 16) + amt));

    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    // var b = ((num >> 8) & 0x00ff) + amt;
    var b = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    // var g = (num & 0x0000ff) + amt;
    var g = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));

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
    if (selectedColorIndex === index) {
      setIsSettings(!isSettings);
      setSelectedColorIndex(index);
      event.stopPropagation();
    } else if (selectedColorIndex === null) {
      setIsSettings(true);
      setSelectedColorIndex(index);
      event.stopPropagation();
    } else {
      setSelectedColorIndex(index);
      event.stopPropagation();
    }
  };

  useEffect(() => {
    if (!isLocked) {
      setPrevColor(curColor);
      setRandomColor(getRandomColor());
      setIsHues(false);
    }
    if (colorChangeTrigger !== 0) {
      setIsPrev(true);
    }
  }, [colorChangeTrigger]);

  useEffect(() => {
    if (!isLocked) {
      if (selectedColorIndex === index) {
        setCurColor(hexCodeInput);
      }
    }
  }, [hexInputTrigger]);

  useEffect(() => {
    if (!isLocked) {
      const matchList = ntc.name(curColor);
      const nearestColor = matchList[1];
      setColorName(nearestColor);
    }
  }, [curColor, colorChangeTrigger, showPrev]);
  // consolidate into effect below

  useEffect(() => {
    if (!isLocked) {
      if (showPrev) {
        setCurColor(prevColor);
      } else {
        setCurColor(randomColor); // problematic
      }
    }
  }, [colorChangeTrigger, isPrev, showPrev]);

  return (
    <>
      {isHues ? (
        <div className='colorsContainer'>
          {huesArray.map((hue, index) => (
            <div
              key={index}
              className={`colorsBox ${hue === curColor && 'current'}`}
              style={{ backgroundColor: hue }}
              onClick={() => handleHueChange(hue)}
            ></div>
          ))}
        </div>
      ) : (
        <div
          className={`colorBox ${
            isSettings && selectedColorIndex === index && 'activeBox'
          }`}
          style={{ backgroundColor: curColor }}
          onClick={toggleColorChangeTrigger}
        >
          <div className='textContainer'>
            <div className='buttonBox'>
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
                className={isLocked ? 'lockButtonLocked' : 'lockButton'}
                onClick={(event) => handleButton(event)}
                style={{ backgroundImage: `url(${svgUrl})` }}
              ></p>
            </div>
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
