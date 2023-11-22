import instance from ".";

const getAllItems = async () => {
  const res = await instance.get("/mini-project/api/items");
  return res.data;
};

export { getAllItems };
