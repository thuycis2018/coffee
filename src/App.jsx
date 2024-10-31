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
        loader: homeLoader,
      },
      {
        path: "blogs/:id",
        element: <BlogPage />,
        errorElement: <SinglePageError />,
        loader: singleBlogLoader,
      },
      {
        path: "blogs",
        element: <Blogs />,
        loader: blogsLoader,
        errorElement: <SinglePageError />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
