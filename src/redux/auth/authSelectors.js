export const selectUserName = state => state.auth.user.name;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = { selectIsLoggedIn, selectUserName };
export default authSelectors;