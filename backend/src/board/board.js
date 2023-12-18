// const { Sequelize, DataTypes } = require("sequelize");
// const db = require("../lib/db");

// const Board = db.define(
//   "Boards",
//   {
//     Boards_id: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     Users_uid: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//     },
//     Boards_title: {
//       type: DataTypes.STRING(255),
//       allowNull: false,
//     },
//     Boards_content: {
//       type: DataTypes.TEXT,
//       allowNull: true,
//     },
//     Boards_created_at: {
//       type: DataTypes.DATE,
//       allowNull: false,
//       defaultValue: Sequelize.NOW,
//     },
//     Boards_views: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// module.exports = Board;

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Boards",
    {
      Boards_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Users_uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Boards_title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Boards_content: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      Boards_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("now()"),
      },
      Boards_views: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );
};
