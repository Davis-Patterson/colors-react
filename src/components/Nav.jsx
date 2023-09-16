const Nav = ({ handlePrev, showPrev, handleInputChange, handleDark }) => {
  return (
    <>
      <div className='navBar'>
        <p className='backButton' onClick={handlePrev}>
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
        <p className='darkInput' onClick={handleDark}>
          ☼
        </p>
      </div>
    </>
  );
};
export default Nav;
