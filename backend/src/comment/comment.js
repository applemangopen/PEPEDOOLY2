module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      Comments_uid: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      Users_uid: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // 여기에 외래키 설정을 추가할 예정
      },
      Boards_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        // 여기에 외래키 설정을 추가할 예정
      },
      Comments_content: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      Comments_created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      // 대댓글부분임
      ParentCommentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "comments",
          key: "Comments_uid",
        },
      },
    },
    {
      tableName: "comments",
      freezeTableName: true,
      timestamps: false,
    }
  );

  // 외래키 관계 설정 예정 (Users, Boards 테이블이 정의된 후에)

  // Comment.belongsTo(Users, { foreignKey: "Users_uid", as: "User" });
  // Comment.belongsTo(Boards, { foreignKey: "Boards_id", as: "Board" });
  // Comment.hasMany(Comment, { foreignKey: "ParentCommentId", as: "Replies" });
  // Comment.belongsTo(Comment, { foreignKey: "ParentCommentId", as: "ParentComment" });

  return Comment;
};
