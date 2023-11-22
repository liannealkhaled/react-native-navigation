import instance from ".";

const getAllCategories = async () => {
  const res = await instance.get("/mini-project/api/categories/");

  return res.data;
};

export { getAllCategories };
