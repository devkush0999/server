import User from "../models/user.js";
import jwt from "jsonwebtoken";

const generateTokens = (user) => {
  const accessToken = jwt.sign(
    { userId: user?._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "2d" }
  );
  const refreshToken = jwt.sign(
    { userId: user?._id },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
  return { accessToken, refreshToken };
};

const loginOrSignUp = async (req, res) => {
  const { phone, address } = req.body;
  try {
    // checking the user by phone number
    let user = await User.findOne({ phone });
    if (!user) {
      // condition when user not exit then by new keyword we store in data base
      user = new User({ address, phone });
      await user.save();
    } else {
      //  this is the case when user already exist then we update the address
      user.address = address;
      await user.save();
    }
    //  now create we generate the token  by which user can communicate with backend
    const { accessToken, refreshToken } = generateTokens(user.toObject());

    res.status(200).json({
      user,
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

export default loginOrSignUp;
