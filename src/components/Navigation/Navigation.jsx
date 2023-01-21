import Box from 'components/Box';
import { Navlink } from './Navigation.styled';
import { useAuth } from 'hooks';
import { FcContacts, FcHome } from 'react-icons/fc';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box as="nav">
      <ul>
        <Navlink to="/">
          <FcHome size={40} />
        </Navlink>

        {isLoggedIn && (
          <Navlink to="/contacts">
            <FcContacts size={40} />
          </Navlink>
        )}
      </ul>
    </Box>
  );
};
