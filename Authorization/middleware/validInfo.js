export default (req, res, next) => {
  const { username, password, firstName, lastName, email, role } = req.body;

  const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  switch (req.path) {
    case "/register":
      if (
        ![username, password, firstName, lastName, email, role].every(Boolean)
      ) {
        return res.json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.json("Invalid Email");
      }
      break;

    case "/login":
      if (![username, password].every(Boolean)) {
        return res.json("Missing Credentials");
      }
      break;
  }
  next();
};
