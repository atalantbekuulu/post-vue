import Main from '@/pages/main';
import {createRouter} from "vue-router"; 
import {createWebHistory} from 'vue-router'
import UserPage from '@/pages/UserPage';
import About from '@/pages/About';
import PostId from "@/pages/PostId";
import PostPageWithStore from '@/pages/PostPageWithStore';


const routes = [
    {
        path: '/',
        component:Main
    },
    {
        path: '/posts',
        component:UserPage
    },
    {
        path: '/about',
        component:About
    },
    {
        path: '/posts/:id',
        component:PostId
    },
    {
        path: '/store',
        component:PostPageWithStore
    },
]
const router = createRouter(
    {
        routes,
        history:createWebHistory(process.env.BASE_URL)
    }
)

export default router;