import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}

interface PostQuery {
    page: number;
    pageSize: number;
}

const usePost = (query: PostQuery) => {
    const fecthPosts = () =>
        axios
            .get<Post[]>('https://jsonplaceholder.typicode.com/posts', {
                params: {
                    _start: (query.page - 1) * query.pageSize,
                    _limit: query.pageSize
                }
            })
            .then((res) => res.data);

    return useQuery<Post[], Error>({
        queryKey: ["posts", query],
        queryFn: fecthPosts,
        staleTime: 10 * 1000,
        placeholderData: previousData => previousData || [], 
    });
}

export default usePost;
