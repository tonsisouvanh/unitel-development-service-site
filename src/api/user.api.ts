import axios from "axios";

export const fetchUsers = async (pageNumber: number) => {
  const res = await axios.get(
    `https://reqres.in/api/users?page=${pageNumber}`,
    {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "reqres-free-v1",
      },
    }
  );
  return res.data;
};
export const fetchUserById = async (userId: string) => {
  const res = await axios.get(`https://reqres.in/api/users/${userId}`, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "reqres-free-v1",
    },
  });
  return res.data;
};
