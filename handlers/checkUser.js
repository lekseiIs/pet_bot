module.exports = async (model, id) => {
  const instance = await model.findByPk(id);
  return instance;
};
