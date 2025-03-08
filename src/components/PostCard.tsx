import { FC } from "react";
import type { Post } from "@/types/globals";
interface PostCardProps {
  data: Post;
}

const PostCard: FC<PostCardProps> = ({ data }) => {
  return (
    <div className="card col-span-1 h-56 max-h-56 overflow-auto">
        <div className="card-header">
        <h3>{data.title}</h3>
        </div>
   <div className="card-body ">
   <p>{data.body}</p>
   </div>
   
    </div>
  );
};

export default PostCard;
