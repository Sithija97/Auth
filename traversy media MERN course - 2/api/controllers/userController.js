/*
~ POST : /api/users         - register a user
~ POST : /api/users/auth    - authenticate a user and get token
~ POST : /api/users/logout  - logout user and clear cookie
~ GET :  /api/users/profile - get user profile
~ PUT :  /api/users/profile - update user profile
*/

const authUser = (req, res) => {
  res.status(200).json({ message: "auth user" });
};

export { authUser };
