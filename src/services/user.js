import { db } from "../../data/db.js";

// export const login = async () => {};
export const loginUserService = async (steamurl, password) => {
  const response = await db.query(
    `SELECT * FROM users WHERE steamurl = $1 AND password = $2`,
    [steamurl, password]
  );
  return response.rows[0];
};

//select *from users where email ={email} and passwod ={passwod}

export const deleteSkinService = async (id) => {
  const response = await db.query(
    `DELETE from skins WHERE id=($1) returning*`,
    [id]
  );
};

export const addSkinService = async (skinname, price) => {
  const response = await db.query(
    `INSERT into skins(skinname, price) VALUES('${skinname}','${price}') RETURNING *`
  );
  return response.rows[0];
};

// export const confirm = async () => {};
