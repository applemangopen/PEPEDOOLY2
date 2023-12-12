import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentsForm from "../molecules/CommentsForm";
import CommentsList from "../molecules/CommentsList";

const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
};

// const sampleComments = [
//     { id: 1, content: "이것은 첫 번째 댓글입니다.", author: "홍길동" },
//     { id: 2, content: "두 번째 댓글이에요.", author: "김철수" },
//     { id: 3, content: "React는 재미있어요!", author: "이영희" },
// ];

export default function Comments({ boardId }) {
    const [comments, setComments] = useState([]);
    const [token] = useState(getCookie("token"));

    useEffect(() => {
        // setComments(sampleComments);
        const fetchComments = async () => {
            try {
                const response = await axios.get(`http://localhost:4000/comments?boardId=${boardId}`);
                setComments(response.data);
            } catch (error) {
                console.error("댓글 불러오기 실패", error);
            }
        };

        fetchComments();
    }, [boardId]);

    const handleAddComment = async (commentContent) => {
        try {
            const response = await axios.post(
                "http://localhost:4000/comments",
                { boardId, content: commentContent },
                { headers: { Authorization: `Bearer ${token}` } }
            );
            setComments([...comments, response.data]);
        } catch (error) {
            console.error("댓글 추가하기 실패", error);
        }
    };

    const handleDeleteComment = async (commentId) => {
        try {
            await axios.delete(`http://localhost:4000/comments/${commentId}`, {
                header: { Authorization: `Bearer ${token}` },
            });
            setComments(comments.filter((comment) => comment.id !== commentId));
        } catch (error) {
            console.error("댓글 지우기 실패", error);
        }
    };

    const handleEditComment = async (commentId, newContent) => {
        try {
            const response = await axios.put(
                `http://localhost:4000/comments/${commentId}`,
                {
                    content: newContent,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setComments(
                comments.map((comment) => {
                    if (comment.id === commentId) {
                        return { ...comment, content: newContent };
                    }
                    return comment;
                })
            );
        } catch (error) {
            console.error("댓글 수정 실패", error);
        }
    };

    return (
        <section>
            <CommentsForm onAddComment={handleAddComment} />
            <CommentsList comments={comments} onDeleteComment={handleDeleteComment} onEditComment={handleEditComment} />
        </section>
    );
}
