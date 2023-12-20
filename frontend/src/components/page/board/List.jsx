import React, { useState, useEffect } from "react";
import styles from "./List.module.css";
import { Link } from "react-router-dom";
import axios from "axios"; // axios 추가

export default function List() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await axios.get("http://localhost:8000/boards");
        // 성공적으로 데이터를 가져온 경우, 데이터를 상태로 설정합니다.
        setPosts(response.data);
      } catch (error) {
        // 데이터 가져오기 실패 시 오류 처리를 할 수 있습니다.
        console.error("Error fetching data:", error);
      }
    }

    // 데이터를 가져오는 함수를 호출합니다.
    fetchPosts();
  }, []);

  return (
    <div className={styles.board}>
      <h1>게시판</h1>
      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.Boards_id} className={styles.post}>
            <Link to={`/board/view/${post.Boards_id}`}>
              {/* 이미지 및 게시물 정보를 렌더링하는 코드 */}
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
