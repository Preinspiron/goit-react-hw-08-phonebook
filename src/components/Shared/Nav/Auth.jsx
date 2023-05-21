import { NavLink } from 'react-router-dom';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register">
        <span>Register</span>
      </NavLink>
      <NavLink to="/login">
        <span>Login</span>
      </NavLink>
    </div>
  );
}
