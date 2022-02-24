const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class CartSock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User}) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  CartSock.init({
    color: {
      type: DataTypes.STRING,
    },
    pattern: {
      type: DataTypes.STRING,
    },
    isFavorit: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    inCart: {
      allowNull: false,
      type: DataTypes.BOOLEAN,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'CartSock',
  });
  return CartSock;
};
