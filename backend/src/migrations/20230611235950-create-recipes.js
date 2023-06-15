'use strict';

const {DataTypes} = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('catalog', {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      origin: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      protein: {
        type: DataTypes.STRING,
        allowNull: false
      },
      produce: {
        type: DataTypes.STRING,
        allowNull: false
      },
      spice: {
        type: DataTypes.STRING,
        allowNull: false
      },
      cookingOil: {
        type: DataTypes.STRING,
        allowNull: false
      },
      volume: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      serves: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      authenticity: {
        type: DataTypes.STRING,
        allowNull: false
      },
      stock: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('catalog');
  }
};
