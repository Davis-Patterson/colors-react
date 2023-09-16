const Nav = ({
  handlePrev,
  showPrev,
  isPrev,
  handleInputChange,
  handleDark,
  isDarkMode,
  colorTheory,
  setColorTheory,
}) => {
  const handleSelect = (e) => {
    const value = e.target.value;
    setColorTheory(value);
  };
  return (
    <>
      <div className='navBar'>
        <p
          className={`backButton ${!isPrev && 'disabled'}`}
          onClick={handlePrev}
        >
          {showPrev ? 'CURRENT' : 'PREVIOUS'}
        </p>
        <input
          type='number'
          className='numInput'
          name='Go'
          min='1'
          max='10'
          defaultValue={5}
          onChange={(e) => handleInputChange(parseInt(e.target.value, 10))}
        ></input>
        <p
          className={isDarkMode ? 'darkInput' : 'lightInput'}
          onClick={handleDark}
        ></p>
      </div>
    </>
  );
};
export default Nav;
