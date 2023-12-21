import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./Modify.module.css";

const Modify = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // 기존 게시글 정보 불러오기
    const fetchBoard = async () => {
      const { data } = await axios.get(`http://localhost:4000/boards/${id}`);
      setTitle(data.title);
      setContent(data.content);
    };

    fetchBoard();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:4000/boards/${id}`, {
        Boards_title: title,
        Boards_content: content,
      });
      navigate(`/board/view/${id}`);
    } catch (error) {
      console.error("Update Error:", error);
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.titleInput}
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className={styles.contentInput}
        />
        <button type="submit" className={styles.submitButton}>
          수정
        </button>
      </form>
    </div>
  );
};

export default Modify;
