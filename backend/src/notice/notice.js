module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Notice",
    {
      Notice_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Admin_uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Users_uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      Notice_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Notice_content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      Notice_writer: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Notice_created_at: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("now()"),
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );
};
