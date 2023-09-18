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
  return (
    <>
      <div className='navBar'>
        <p
          className={`backButton ${!isPrev && 'disabled'}`}
          onClick={handlePrev}
        >
          {showPrev ? '⮕' : '⬅'}
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
