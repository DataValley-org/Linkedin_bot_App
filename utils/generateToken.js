const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  if (!process.env.JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined");
  }

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
      userName: user.userName
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );
  console.log("Token " , token);
  return token;
};

module.exports = generateToken;
