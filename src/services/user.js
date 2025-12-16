import { db } from "../../data/db.js";

export const loginUserService = async (steamurl, password) => {
  const response = await db.query(
    `SELECT * FROM users WHERE steamurl = $1 AND password = $2`,
    [steamurl, password]
  );
  return response.rows[0];
};

//select *from users where email ={email} and passwod ={passwod}

export const deleteSkins = async () => {};

export const addSkin = async () => {};

export const confirm = async () => {};
