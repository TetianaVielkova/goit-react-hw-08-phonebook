import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/auth.thunk';
import { useAuth } from './../../hooks/UseAuth';
import { Button, UserName, Wrapper } from './UserMenu.styled';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <UserName>Welcome, {user.name}</UserName>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};