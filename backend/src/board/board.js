module.exports = (sequelize, DataTypes) => {
  const Boards = sequelize.define(
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

  Boards.associate = function (models) {
    Boards.hasMany(models.Images, {
      foreignKey: "Boards_id", // 'Boards_id'를 외래 키로 지정합니다.
      as: "Images",
    });
  };

  return Boards;
};
