import { FC } from "react";

interface PostCardSkeletonProps {}

const PostCardSkeleton: FC<PostCardSkeletonProps> = ({}) => {
  return (
    <div className="card col-span-1 h-56 animate-pulse bg-gray-300"></div>
  );
};

export default PostCardSkeleton;
