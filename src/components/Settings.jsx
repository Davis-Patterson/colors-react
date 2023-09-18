const Settings = ({
  setIsSettings,
  hexCode,
  setHexCodeInput,
  hexInputTrigger,
  setHexInputTrigger,
}) => {
  const handleHexInput = (event) => {
    let inputValue = event.target.value;

    if (!inputValue.startsWith('#')) {
      inputValue = '#' + inputValue;
    }

    setHexCodeInput(inputValue);
  };

  const handleUpdate = () => {
    setHexInputTrigger(hexInputTrigger + 1);
  };

  const handleCancel = () => {
    setIsSettings(false);
  };

  return (
    <>
      <div className='settingsBox'>
        <div className='settingsInfoBox'>
          <div className='settingsColumn'>
            <p className='settingsText'>Settings:</p>
            <p className='hexInputText'>Enter Hexcode</p>
            <input
              className='hexInput'
              id='hexInput'
              value={hexCode}
              onChange={handleHexInput}
            ></input>
            <p className='updateButton' onClick={handleUpdate}>
              UPDATE
            </p>
            <p className='cancelButton' onClick={handleCancel}>
              X
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Settings;
