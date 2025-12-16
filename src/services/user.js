import { db } from "../../data/db.js";

// export const login = async () => {};

export const deleteSkinService = async (id) => {
  const response = await db.query(
    `DELETE from skins WHERE id=($1) returning*`,
    [id]
  );
};

export const addSkinService = async (skinname, price) => {
  const response = await db.query(
    `INSERT into skins (price, skinname) VALUES ($1,$2) RETURNING *`,
    [skinname, price]
  );
  return response.rows[0];
};

// export const confirm = async () => {};
