export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUserName = state => state.auth.user.name;

const authSelectors = { selectIsLoggedIn, selectUserName };

export default authSelectors;