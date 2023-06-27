import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import authSelectors from '../../redux/auth/authSelectors';
import authOperations from 'redux/auth/authOperations';

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(authSelectors.selectUserName);
  return (
   <div >
      <p >Welcome, {userName}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;