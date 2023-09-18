const Header = ({}) => {
  const handleHome = () => {
    window.location.reload();
  };

  return (
    <>
      <header>
        <div className='colorsHeader'>
          <p className='colorsText' onClick={handleHome}>
            COLORS!
          </p>
        </div>
        <div className='loginContainer'>
          <p className='loginHeader'>sign in</p>
          <p className='signUp'>sign up</p>
        </div>
      </header>
    </>
  );
};
export default Header;
