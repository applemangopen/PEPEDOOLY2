import React from "react";
import CommentsView from "../../atoms/comments/CommentsView";
import CommentsBtn from "../../atoms/comments/CommentsBtn";

export default function CommentsList({ comments, onDeleteComment, onEditComment }) {
    return (
        <div>
            {comments.map((comment) => (
                <div key={comment.id}>
                    <CommentsView content={comment.content} author={comment.author} />
                    <CommentsBtn text="수정" onClick={() => onEditComment(comment.id, comment.content)} />
                    <CommentsBtn text="삭제" onClick={() => onDeleteComment(comment.id)} />
                </div>
            ))}
        </div>
    );
}
