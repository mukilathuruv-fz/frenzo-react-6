import client from "../../libs/axios";

export const getUsers = async () => {
  const response = await client.get("/users");
  const data = response.data;
  console.log(data);
  return data.users;
};
