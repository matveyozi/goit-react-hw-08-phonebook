import { Route, Routes } from 'react-router-dom';



import authOperations from 'redux/auth/authOperations';

import SharedLayout from './SharedLayout/SharedLayout';

import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';



import { useDispatch } from 'react-redux';
import { lazy, useEffect } from 'react';


const HomePage = lazy(() => import('../pages/HomePage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const ContactsPage = lazy(() => import('../pages/ContactsPage'));

export default function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (

    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />

          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>


      {/* <Section>
        <Container>
          <Title title={'Phonebook'}></Title>
          <ContactForm />
          <Filter />
          <Title title={'Contacts'} />
        </Container>
        < ContactList />
      </Section> */}
    </>
  )
}

