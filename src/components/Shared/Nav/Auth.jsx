import { NavLink } from 'react-router-dom';
import Button from '@mui/material/Button';

export default function AuthNav() {
  return (
    <div className="autn-links">
      <NavLink className="auth-nav" to="/register">
        <Button variant="outlined">Register</Button>
      </NavLink>
      <NavLink className="auth-nav" to="/login">
        <Button variant="outlined">Login</Button>
      </NavLink>
    </div>
  );
}
