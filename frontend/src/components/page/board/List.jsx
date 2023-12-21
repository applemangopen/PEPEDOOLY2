import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./List.module.css";

export default function List() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8; // 페이지당 게시글 수
  const navigate = useNavigate();

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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className={styles.board}>
      <h1>게시판</h1>
      <button
        className={styles.createButton}
        onClick={() => navigate("/board/create")}
      >
        글 작성하기
      </button>
      <div className={styles.posts}>
        {currentPosts.map((post) => (
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
      <nav>
        <ul className={styles.pagination}>
          {pageNumbers.map((number) => (
            <li key={number} className={styles.pageItem}>
              <button
                onClick={() => paginate(number)}
                className={styles.pageLink}
              >
                {number}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
