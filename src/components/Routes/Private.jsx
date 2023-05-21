import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogin } from 'redux/auth';

export default function Private({ children }) {
  const isLogin = useSelector(selectIsLogin);

  return isLogin ? children : <Navigate replace to="/login" />;
}
