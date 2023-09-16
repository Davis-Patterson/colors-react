const Nav = ({ handlePrev, showPrev, isPrev, handleInputChange }) => {
  return (
    <>
      <div className='inputContainer'>
        <button className='backButton' onClick={handlePrev} disabled={!isPrev}>
          {showPrev ? 'CURRENT' : 'PREVIOUS'}
        </button>
        <input
          type='number'
          className='numInput'
          name='Go'
          min='1'
          max='10'
          defaultValue={5}
          onChange={(e) => handleInputChange(parseInt(e.target.value, 10))}
        ></input>
      </div>
    </>
  );
};
export default Nav;
