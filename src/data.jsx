import { AboutUs } from "./components/AboutUs/AboutUs"
import Contact from "./components/ContactUs/Contact"
import { Home } from "./components/Home/Home"
import { News } from "./components/News/News"
import { Portfolio } from "./components/Portfolio/Portfolio"

export const data = [
    {
        route:'/',
        exact:true,
        name:"Home",
        element: <Home/>
    },
    {
        route:'/about',
        exact:true,
        name:"About us",
        element:<AboutUs/> 
    },
     {
        route:'/news',
        exact:true,
        name:"News",
        element:<News/> 
    },
    {
        route:'/portfolio',
        exact:true,
        name:"Portfolio",
        element:<Portfolio/> 
    },
    {
        route:'/con',
        exact:true,
        name:"Contacts",
        style:{
            backgroundColor:'#FA9021',
            borderRadius:"6px"
        },
        element:<Contact/>
    },
]