import React from 'react'

import Navigation from '../Navigation/Navigation';
import AuthNav from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';



const Header = () => {
	 const isLogedIn = useSelector(selectIsLoggedIn);
  return (
	  <header>
		  <Navigation />
      {isLogedIn ? <UserMenu /> : <AuthNav />}
	</header>
  )
}

export default Header