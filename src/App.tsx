import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";
const App: React.FC = () => {
    const routes=createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
                {path:'/home',element:<Home/>},
                {path:'/home/Add',element:<AddNewBooking/>},
                {path:'/service',element:<Service/>},

            ]
        }
    ])
    return (
        <>
            <Provider store={store}>
                <RouterProvider router={routes}/>
            </Provider></>
    );
};

export default App;