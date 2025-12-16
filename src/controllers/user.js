import { loginUserService } from "../services/index.js";

export const loginUser = async (req, res) => {
  const { steamurl, password } = req.body;

  const user = await loginUserService(steamurl, password);

  res.json(user);
};
