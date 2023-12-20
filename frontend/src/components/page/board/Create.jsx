import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./Create.module.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/boards", {
        Boards_title: title,
        Boards_content: content,
        Users_uid: author,
      });
      navigate(`/board/view/${response.data.Boards_id}`);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className={styles.createForm}>
      <h1>게시글 작성</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="title">제목</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="content">내용</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="author">글쓴이</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit">작성하기</button>
      </form>
    </div>
  );
}
