import React from 'react';

import { StyledNavLink } from 'components/Header/Header.styled';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div>
      <StyledNavLink to="/">Logo</StyledNavLink>
      {isLoggedIn && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </div>
  );
};

export default Navigation;