"use client";

import Comment from "@/components/Comment";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import { comments } from "@/libs/comments";
import { Comme } from "next/font/google";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
          <PostOwnner userImagePath={"/profileImages/profile.jpg"} 
          username={"Nanthawat Sirisuksumran 660612149"} 
          commentText={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"} 
          likeNum={999}/>

        {/* Comment Example */}
          {comments.map((comment)=> <Comment key={comment.username} {...comment}/>)}

        
          

       
      </div>
    </div>
  );
}