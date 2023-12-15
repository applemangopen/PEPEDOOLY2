import React, { useState } from "react";
import "./List.css"; // PostCSS 파일 임포트

export default function List() {
  const [posts, setPosts] = useState(examplePosts);
  return (
    <div className="board">
      <h1>게시판</h1>
      <div className="posts">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img
              src={post.images[0]}
              alt={`Post ${post.id}`}
              className="post-image"
            />
            <div className="post-info">
              <h2 className="title">{post.title}</h2>
              <p className="writer">작성자: {post.writer}</p>
              <p className="likes">좋아요: {post.likes}</p>
              <p className="views">조회수: {post.views}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const examplePosts = [
  {
    id: 1,
    writer: "MemeMaster1",
    title: "Cats Everywhere",
    likes: 105,
    views: 210,
    images: ["https://picsum.photos/200/300?random=1"],
  },
  {
    id: 2,
    writer: "FunnyFan2",
    title: "Dog with Sunglasses",
    likes: 95,
    views: 180,
    images: ["https://picsum.photos/200/300?random=2"],
  },
  {
    id: 3,
    writer: "LaughBuddy3",
    title: "Surprised Panda",
    likes: 150,
    views: 250,
    images: ["https://picsum.photos/200/300?random=3"],
  },
  {
    id: 4,
    writer: "Jokester4",
    title: "Dancing Parrot",
    likes: 110,
    views: 200,
    images: ["https://picsum.photos/200/300?random=4"],
  },
  {
    id: 5,
    writer: "GiggleGenius5",
    title: "Happy Seal",
    likes: 120,
    views: 190,
    images: ["https://picsum.photos/200/300?random=5"],
  },
  {
    id: 6,
    writer: "MemeMaster6",
    title: "Jumping Fox",
    likes: 130,
    views: 220,
    images: ["https://picsum.photos/200/300?random=6"],
  },
  {
    id: 7,
    writer: "FunnyFan7",
    title: "Sleepy Kitten",
    likes: 90,
    views: 160,
    images: ["https://picsum.photos/200/300?random=7"],
  },
  {
    id: 8,
    writer: "LaughBuddy8",
    title: "Curious Squirrel",
    likes: 140,
    views: 230,
    images: ["https://picsum.photos/200/300?random=8"],
  },
  {
    id: 9,
    writer: "Jokester9",
    title: "Frog in a Hat",
    likes: 115,
    views: 205,
    images: ["https://picsum.photos/200/300?random=9"],
  },
  {
    id: 10,
    writer: "GiggleGenius10",
    title: "Bunny with a Pancake",
    likes: 125,
    views: 175,
    images: ["https://picsum.photos/200/300?random=10"],
  },
  {
    id: 11,
    writer: "MemeMaster11",
    title: "Chameleon Colors",
    likes: 135,
    views: 195,
    images: ["https://picsum.photos/200/300?random=11"],
  },
  {
    id: 12,
    writer: "FunnyFan12",
    title: "Elephant Playing Soccer",
    likes: 100,
    views: 160,
    images: ["https://picsum.photos/200/300?random=12"],
  },
  {
    id: 13,
    writer: "LaughBuddy13",
    title: "Goofy Gorilla",
    likes: 145,
    views: 210,
    images: ["https://picsum.photos/200/300?random=13"],
  },
  {
    id: 14,
    writer: "Jokester14",
    title: "Hedgehog in a Teacup",
    likes: 115,
    views: 200,
    images: ["https://picsum.photos/200/300?random=14"],
  },
  {
    id: 15,
    writer: "GiggleGenius15",
    title: "Duckling Duo",
    likes: 130,
    views: 180,
    images: ["https://picsum.photos/200/300?random=15"],
  },
  {
    id: 16,
    writer: "MemeMaster16",
    title: "Parrot Pals",
    likes: 120,
    views: 190,
    images: ["https://picsum.photos/200/300?random=16"],
  },
  {
    id: 17,
    writer: "FunnyFan17",
    title: "Turtle with a Hat",
    likes: 140,
    views: 215,
    images: ["https://picsum.photos/200/300?random=17"],
  },
  {
    id: 18,
    writer: "LaughBuddy18",
    title: "Mischievous Monkey",
    likes: 150,
    views: 220,
    images: ["https://picsum.photos/200/300?random=18"],
  },
];
