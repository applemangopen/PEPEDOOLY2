import React, { useState, useEffect } from "react";
import styles from "./List.module.css";
import { Link, useNavigate } from "react-router-dom"; // useNavigate를 사용
import axios from "axios";

export default function List() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate(); // useNavigate 훅 사용

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:4000/boards");
        setPosts(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchPosts();
  }, []);

  const handleCreateButtonClick = () => {
    navigate("/board/create"); // 페이지 이동을 위해 useNavigate 함수 사용
  };

  return (
    <div className={styles.board}>
      <h1>게시판</h1>
      <button className={styles.createButton} onClick={handleCreateButtonClick}>
        글 작성하기
      </button>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.Boards_id} className={styles.post}>
            <Link to={`/board/view/${post.Boards_id}`}>
              <h2 className={styles.title}>{post.Boards_title}</h2>
            </Link>
            <div className={styles["post-info"]}>
              <p className={styles.writer}>작성자: {post.Users_uid}</p>
              <p className={styles.likes}>좋아요: {post.Boards_views}</p>
              <p className={styles.views}>조회수: {post.Boards_views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
