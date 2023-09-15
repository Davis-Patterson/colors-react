const ColorInputs = ({ handlePrev, showPrev, isPrev }) => {
  return (
    <>
      <div>
        <button className='backButton' onClick={handlePrev} disabled={!isPrev}>
          {showPrev ? 'CURRENT' : 'PREVIOUS'}
        </button>
      </div>
    </>
  );
};
export default ColorInputs;
