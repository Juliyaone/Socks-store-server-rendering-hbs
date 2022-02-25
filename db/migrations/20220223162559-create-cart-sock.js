module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('CartSocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      color: {
        type: Sequelize.STRING,
        defaultValue: 'white',
      },
      pattern: {
        type: Sequelize.STRING,
      },
      isFavorit: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      inCart: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('CartSocks');
  },
};
