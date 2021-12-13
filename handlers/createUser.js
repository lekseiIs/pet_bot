module.exports = async (model, info) => {
  const instance = await model.findByPk(info.id);

  if (!instance) {
    const newUser = await model.create({
      id: user.id,
      firstName: user.first_name,
      votes: 1,
    });
    console.log(user.id, user.first_name)
  } else {
    await instance.update({ votes: instance.votes + 1 });
    await instance.save();
    console.log("Already had that user!")
  }
  return instance;
};
