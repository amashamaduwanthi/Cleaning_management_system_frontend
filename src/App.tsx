import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {RootLayout} from "./components/RootLayout.tsx";
import {Home} from "./pages/Home.tsx";
import {Provider} from "react-redux";
import {store} from "./services/store.ts";
import AddNewBooking from "./pages/AddNewBooking.tsx";
import Service from "./pages/Service.tsx";
const App: React.FC = () => {
    const routes=createBrowserRouter([
        {
            path:'',
            element:<RootLayout/>,
            children:[
                {path:'/',element:<Home/>},
                {path:'/home/AddBooking',element:<AddNewBooking/>},
                {path:'/home/AddService',element:<Service/>},

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