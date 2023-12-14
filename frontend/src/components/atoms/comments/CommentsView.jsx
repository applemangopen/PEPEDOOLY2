import React from "react";

export default function CommentsView({ content, author }) {
    return (
        <div>
            <p>
                {author}: {content}
            </p>
        </div>
    );
}
