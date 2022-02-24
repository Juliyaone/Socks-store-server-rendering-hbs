const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({CartSock}) {
      this.hasMany(CartSock, { foreignKey: 'userId' });
    }
  }
  User.init({
    username: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
