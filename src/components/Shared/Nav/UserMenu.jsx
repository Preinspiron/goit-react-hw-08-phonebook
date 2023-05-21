import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth';
import { logout } from 'redux/auth';
import Button from '@mui/material/Button';
export default function UserMenu() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <div>
      <span>
        Welcome, {name}{' '}
        <Button
          variant="outlined"
          size="small"
          type="button"
          onClick={() => dispatch(logout())}
        >
          Logout
        </Button>
      </span>
    </div>
  );
}
