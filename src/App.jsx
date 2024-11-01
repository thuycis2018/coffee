import {
  Blogs,
  BlogPage,
  Home,
  HomeLayout,
  Error,
  SinglePageError,
} from "./pages";
import { loader as homeLoader } from "./pages/Home";
import { loader as blogsLoader } from "./pages/Blogs";
import { loader as singleBlogLoader } from "./pages/Blog";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <SinglePageError />,
        loader: homeLoader(queryClient),
      },
      {
        path: "blogs/:id",
        element: <BlogPage />,
        errorElement: <SinglePageError />,
        loader: singleBlogLoader(queryClient),
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: blogsLoader(queryClient),
        errorElement: <SinglePageError />,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default App;
