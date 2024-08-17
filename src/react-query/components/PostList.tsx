import { useState } from "react";
import usePost from "./hooks/usePost";

const PostList = () => {
  // const [userId, setUserId] = useState<number>();
  const pageSize = 18;
  const [page, setPage] = useState(1);
  const { data: posts, error, isLoading } = usePost({ page, pageSize });

  if (isLoading) return <p>Loading......</p>;
  if (error) return <p>{error.message}</p>;

  return (
    // {/* <select
    //   className="form-select mb-3"
    //   onChange={(event) => setUserId(parseInt(event.target.value))}
    //   value={userId}
    // >
    //   <option value="">Select User</option>
    //   <option value="1">User 1</option>
    //   <option value="2">User 2</option>
    //   <option value="3">User 3</option>

    //   {/* {[...new Set(posts?.map((user) => user.userId))].map((userId) => (
    //     <option value={userId} key={userId}>
    //       {"User " + userId}
    //     </option>
    //   ))} */}
    // </select> */}
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>

      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 ms-1"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
