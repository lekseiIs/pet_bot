module.exports = async (model, info) => {
  const newUser = await model.create({
      id: info.id,
      firstName: info.first_name,
      votes: 1,
    });
}
