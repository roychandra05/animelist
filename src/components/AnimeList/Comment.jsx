"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export const Comment = ({ anime_mal_id, user_email, username, anime_title }) => {
  const [validComment, setValidComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const router = useRouter()

  const inputComment = (event) => {
    setValidComment(event.target.value);
  };

  const handleComment = async (event) => {
    event.preventDefault();
    const comment = validComment.trim()
    if(comment.length < 3 ) return;
    
    const data = { anime_mal_id, user_email, comment, username, anime_title};

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });
    const dataComment = await response.json();
    if (dataComment.isCreate) {
      setIsCreated((prev) => (prev = true));
      setValidComment((prev) => (prev = ""));
      router.refresh()
    }
  };

  return (
    <div className="w-full my-4">
      {isCreated && (
        <>
        <p className="w-64 rounded-t-lg border-spacing-1 p-1 font-bold text-xl bg-main-secondary text-main-background text-center self-start">
          Comment has been send
        </p>
        </>
      )}
      <h3 className="bg-main-accent text-main-background font-bold pl-2 ">
        Write your comment below ...
      </h3>
      <div className="flex flex-col gap-2">
        <textarea
          className="p-2 text-lg bg-main-background border-2 border-main-accent text-main-shadow rounded-b-lg"
          placeholder="🐱💬..."
          value={validComment}
          onChange={inputComment}
        />
        <button
          className="drop-shadow-lg hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 border-4 border-main-accent transition-all duration-200 shadow-lg rounded-b-lg self-start px-4 py-1 bg-main-accent text-main-background font-bold hover:border-main-accent hover:bg-main-background hover:text-main-secondary "
          onClick={handleComment}
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default Comment;
