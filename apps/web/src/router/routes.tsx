import { AppLayout } from "@/layouts";
import { HomePage, NotFoundPage } from "@/pages";
import type { RouteObject } from "react-router-dom";

export const routes: RouteObject[] = [
  {
    element:<AppLayout/>,

    children:[
        {
            path:"/",
            element:<HomePage/>
        }
    ]
},
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
