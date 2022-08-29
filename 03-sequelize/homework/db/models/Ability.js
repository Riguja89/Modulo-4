const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:'index'
    },
    description: {
      type: DataTypes.TEXT,
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique:'index'
    },
    
  })
}