import { FC } from "react";
import type { Post } from "@/types/globals";

interface PostCardProps {
  data: Post;
}

const PostCard: FC<PostCardProps> = ({ data }) => {
  return (
    <div className=" relative col-span-1 h-56  overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 bg-background border border-gray-200 hover:scale-105">
      <div className="card-header p-4 bg-gradient-to-r from-primary to-secondary">
        <h3 className="text-lg font-semibold text-background truncate">
          {data.title}
        </h3>
      </div>
      <div className="card-body p-4 overflow-y-auto">
        <p className="text-gray-700 text-sm leading-relaxed">{data.body}</p>
      </div>
      <div className="card-footer absolute  w-full bottom-0 p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-xs text-gray-500">Posted by User #{data.userId}</p>
      </div>
    </div>
  );
};

export default PostCard;
