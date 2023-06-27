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

// .........



function sort(students) {
  return students.reduce((acc, el, ind) => {
    el.age > students[ind - 1]?.age
      ? acc.splice(ind, 0, el)
      : acc.splice(ind - 1, 0, el)
    return acc
  }, [])
}