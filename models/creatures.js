module.exports = function (sequelize, DataTypes) {
  const Creature = sequelize.define(
    "creature",
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          len: [1, 50],
        },
      },
      happy: {
        type: DataTypes.BOOLEAN,
        default: true,
      },
      sad: {
        type: DataTypes.BOOLEAN,
        defailt: false,
      },
      bored: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      angry: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
      fried: {
        type: DataTypes.BOOLEAN,
        default: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Creature;
};
