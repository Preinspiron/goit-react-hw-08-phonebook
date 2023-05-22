import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth';

export default function Public({ children, restricted = false }) {
  const isLogin = useSelector(selectIsLogin);
  const shouldRedirect = isLogin && restricted;

  return !shouldRedirect ? children : <Navigate replace to="/contacts" />;
}

Public.propTypes = {
  restricted: PropTypes.bool,
  children: PropTypes.array,
};
