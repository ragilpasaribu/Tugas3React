import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <header className='flex justify-between px-16 items-center w-screen h-16 bg-yellow-500 shadow-lg sticky z-10 top-0'>
        <h1 className='font-mono font-bold text-lg'>DATA ANGKATAN</h1>
        <ul className='flex justify-evenly space-x-5 font-light font-mono'>
          <Link to="/">
            <li className='hover:underline'>HOME</li>
          </Link>
          <Link to="/about">
            <li className='hover:underline'>ABOUT</li>
          </Link>
          <Link to="/contact">
            <li className='hover:underline'>CONTACT</li>
          </Link>
        </ul>
      </header>
    </div>
  );
};
export default Header;
