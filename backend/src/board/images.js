// models/Images.js

module.exports = (sequelize, DataTypes) => {
  const Images = sequelize.define(
    "Images",
    {
      Images_uid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Boards_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Boards", // 'Boards' 모델을 참조합니다.
          key: "Boards_id",
        },
      },
      Images_url: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Images_uploaded_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
    }
  );

  Images.associate = function (models) {
    Images.belongsTo(models.Boards, {
      foreignKey: "Boards_id", // 'Boards_id'를 외래 키로 사용합니다.
      as: "Board",
    });
  };

  return Images;
};
