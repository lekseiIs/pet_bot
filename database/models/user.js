const sequelize = require("../connection");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votes: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    // ??
    setterMethods: {
      votes() {
        this.setDataValue("votes", this.votes + 1);
      },
    },
    getterMethods: {
      info() {
        return `${this.id} | ${this.firstName} | ${this.votes}`;
      },
    },
    // ??
  }
);

(async () => {
  await sequelize.sync();
})();

module.exports = User;
