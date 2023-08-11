export default (req, res, next) => {
  const { email, name, password } = req.body;

  const validEmail = (userEmail) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  };

  switch (req.path) {
    case "/register":
      if (
        ![userName, password, firstName, lastName, email, role].every(Boolean)
      ) {
        return res.json("Missing Credentials");
      } else if (!validEmail(email)) {
        return res.json("Invalid Email");
      }
      break;

    case "/login":
      if (![userName, password].every(Boolean)) {
        return res.json("Missing Credentials");
      }
      break;
  }
  next();
};
