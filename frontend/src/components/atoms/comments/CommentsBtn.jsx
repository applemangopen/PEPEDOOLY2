import React from "react";

export default function CommentsBtn({ onClick, text }) {
    return (
        <button type="submit" onClick={onClick}>
            {text}
        </button>
    );
}
