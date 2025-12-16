import { addSkinService, deleteSkinService } from "../services/user.js";

export const addSkinController = async (req, res) => {
  const { skinname, price } = req.body;
  const skin = await addSkinService(skinname, price);
  res.json(skin);
};
export const deleteSkinController = async (req, res) => {
  const { id } = req.body;
  const skin = await deleteSkinService(id);
  res.json(skin);
};
