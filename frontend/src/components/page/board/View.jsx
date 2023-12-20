import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./View.module.css";

const View = () => {
  const [board, setBoard] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchBoard = async () => {
      const { data } = await axios.get(`http://localhost:4000/boards/${id}`);
      setBoard(data);
    };

    fetchBoard();
  }, [id]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString("ko-KR", options);
  };

  if (!board) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>{board.Boards_title}</h1>
        <span className={styles.userId}>User: board.userId</span>
        <span className={styles.createdAt}>
          Created at: {formatDate(board.Boards_created_at)}
        </span>
      </div>
      <p className={styles.content}>{board.Boards_content}</p>
      <div className={styles.footer}>
        <span>추천: board.recommendCount</span>
        <span>비추천: board.nonRecommendCount</span>
        <span>댓글: board.commentCount</span>
      </div>
    </div>
  );
};

export default View;
