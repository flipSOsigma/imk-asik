import { useLocation } from 'react-router-dom';

const Header = () => {

  const getPath = () => {
    const path = useLocation().pathname
    console.log(path)
    console.log(path.split('/'))
    return path.split('/')[1]
  }
  return (
    <header className="bg-white shadow-sm px-8 py-4">
      <h1 className="font-bold text-start capitalize">{getPath() == "" ? "Dashboard" : getPath()}</h1>
    </header>
  );
};

export default Header;