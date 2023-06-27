import React from 'react'

import Navigation from '../Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { StyledHeader } from './Header.styled';



const Header = () => {
	 const isLogedIn = useSelector(selectIsLoggedIn);
  return (
	  <StyledHeader>
		  <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
	</StyledHeader>
  )
}

export default Header