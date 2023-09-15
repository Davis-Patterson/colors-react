import React, { useState, useEffect } from 'react';

const ColorCard = ({
  getRandomColor,
  colorChangeTrigger,
  toggleColorChangeTrigger,
}) => {
  const [randomColor, setRandomColor] = useState(getRandomColor());
  const [isLocked, setIsLocked] = useState(false);

  const handleButton = (event) => {
    setIsLocked(!isLocked);
    event.stopPropagation();
  };

  useEffect(() => {
    if (!isLocked) {
      if (colorChangeTrigger) {
        setRandomColor(getRandomColor());
      }
    }
  }, [colorChangeTrigger]);

  return (
    <>
      <div
        className='colorBox'
        style={{ backgroundColor: randomColor }}
        onClick={toggleColorChangeTrigger}
      >
        <div className='textBox'>
          <p className='colorText'>{randomColor}</p>
          <button
            className={`colorButton ${isLocked && 'locked'}`}
            onClick={(event) => handleButton(event)}
          ></button>
        </div>
      </div>
    </>
  );
};

export default ColorCard;
