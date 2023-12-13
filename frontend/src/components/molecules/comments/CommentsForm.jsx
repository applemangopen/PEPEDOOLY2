import React, { useState } from "react";
import CommentsBtn from "../../atoms/comments/CommentsBtn";
import CommentsInput from "../../atoms/comments/CommentsInput";

export default function CommentsForm({ onAddComment }) {
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddComment(comment);
        setComment("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <CommentsInput
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={"댓글을 입력하세요"}
            />
            <CommentsBtn text="댓글 추가" onClick={handleSubmit}></CommentsBtn>
        </form>
    );
}
