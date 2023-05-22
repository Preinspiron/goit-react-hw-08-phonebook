import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import UserMenu from './Nav/UserMenu';

// import { black } from '@mui/material/colors';
import SvgIcon from '@mui/material/SvgIcon';
import Auth from './Nav/Auth';
import { selectIsLogin } from 'redux/auth/auth';
import { MdOutlineImportContacts } from 'react-icons/md';
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
// import s from './Header.module.css';
export default function Header() {
  const isLogin = useSelector(selectIsLogin);
  console.log(isLogin);
  return (
    <header className="header">
      <nav className="header-nav">
        <NavLink className="header-nav" to="/">
          <HomeIcon sx={{ color: 'rgb(25,118,210)' }} fontSize="large" />
        </NavLink>
        {isLogin && (
          <NavLink className="header-nav" to="/contacts">
            <MdOutlineImportContacts size={'34'} color="#1976d2" />
          </NavLink>
        )}
      </nav>
      {!isLogin ? <Auth /> : <UserMenu />}
    </header>
  );
}
