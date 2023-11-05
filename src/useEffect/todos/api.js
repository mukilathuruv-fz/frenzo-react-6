import client from "../../libs/axios";

// to get all the todos from the server
export const getAll = async () => {
  try {
    const { data } = await client.get("/todos");
    return data;
  } catch (error) {
    alert(JSON.stringify(error.message));
    return null;
  }
};

// get create a todo to the server
export const create = async body => {
  try {
    const { data } = await client.post("/todos", body);
    return data;
  } catch (error) {
    alert(JSON.stringify(error.message));
    return null;
  }
};

// get update a todo to the server
export const update = async ({ id, ...body }) => {
  try {
    const { data } = await client.put(`/todos/${id}`, body);
    return data;
  } catch (error) {
    alert(JSON.stringify(error.message));
    return null;
  }
};

// get delete a todo to the server
export const remove = async id => {
  try {
    const { data } = await client.delete(`/todos/${id}`);
    return data;
  } catch (error) {
    alert(JSON.stringify(error.message));
    return null;
  }
};
