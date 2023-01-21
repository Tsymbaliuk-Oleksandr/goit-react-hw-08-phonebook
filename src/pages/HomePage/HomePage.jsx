import { Helmet, HelmetProvider } from 'react-helmet-async';
import Box from 'components/Box';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSelectors';
import { useAuth } from 'hooks';
import { NavLink, Link } from 'react-router-dom';
import { Book, AppName, HelloText, Text } from './HomePage.styled';

const HomePage = () => {
  const { isLoggedIn, user } = useAuth();
  const contacts = useSelector(getContacts);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
      <HelmetProvider>
        <Helmet>
          <title>Home page</title>
        </Helmet>
      </HelmetProvider>

      {!isLoggedIn && (
        <>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            p={5}
            as="p"
            fontSize="m"
            mt={16}
          >
            Your attention is presented to the telephone book, which is intended
            for storing telephone contacts and their correction
          </Box>
        </>
      )}

      {isLoggedIn && <HelloText>Welcome, {user.name}</HelloText>}
      <NavLink to="/contacts">
        <Book>
          {isLoggedIn && <Text>In Your's</Text>}
          <AppName>Phonebook</AppName>
          {isLoggedIn && (
            <Text>
              {contacts.length} {contacts.length > 1 ? 'contacts' : 'contact'}
            </Text>
          )}
        </Book>
      </NavLink>

      <>
        <Box as="p" fontSize="m" align-items="center" mt={16}>
          To use the phone book, you must{' '}
          <Link to="/register" style={{ textDecoration: 'underline' }}>
            SignUp
          </Link>{' '}
          or{' '}
          <Link to="/login" style={{ textDecoration: 'underline' }}>
            LogIn
          </Link>{' '}
          to your account.
        </Box>
      </>
    </Box>
  );
};

export default HomePage;
