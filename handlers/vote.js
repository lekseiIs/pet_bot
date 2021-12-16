module.exports = async (model, id) => {
  const user = await model.findByPk(id);
  await user.increment("votes");
}
