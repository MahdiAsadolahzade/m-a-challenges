"use client";
import type { Post } from "@/types/globals";
import React, { useEffect, useState, useCallback } from "react";
import PostCard from "@/components/PostCard";
import PostCardSkeleton from "@/components/PostCardSkeleton";

const Page = () => {
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(true);


  const fetchPosts = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=12&_page=${page}`
      );
      const data = await res.json();

      if (data?.length === 0) {
        setHasMore(false);
      } else {
        setPosts((prevPosts) => [...prevPosts, ...data]); 
        setPage((prevPage) => prevPage + 1); 
      }
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  }, [loading, hasMore, page]);


  useEffect(() => {
    fetchPosts();
  }, []); 

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight - 200;

      if (bottom && !loading && hasMore) {
        fetchPosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchPosts, loading, hasMore]); 

  return (
    <div className="h-screen w-full">
      <div className="text-center ">
        <h2>Challenge 1</h2>
        <hr />
      </div>
     

      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
          {posts.map((post,index) => (
            <div key={`${post.id}/${index}`} className="h-56">
              <PostCard data={post} />
            </div>
          ))}
        </div>

        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {Array.from({ length: 12 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))}
          </div>
        )}

        {posts.length!==0 && (
          <p
            className={`text-center text-foreground my-4 ${
              hasMore && "animate-pulse"
            }`}
          >
            {!hasMore ? "No more posts to load." : "Scroll to load more"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Page;