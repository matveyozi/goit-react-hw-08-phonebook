import React from 'react';

// import { AuthNavContainer } from './AuthNav.styled';

import { StyledNavLink } from 'components/Header/Header.styled';
import { StyledAuthNav } from './AuthNav.styled';


const AuthNav = () => {
  return (
    <StyledAuthNav>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">LogIn</StyledNavLink>
    </StyledAuthNav>
  );
};

export default AuthNav;
