import { createRouter, createWebHistory } from "vue-router";
// import Layout from '@/components/Layout.vue'
import SignUp from "@/views/SignUp.vue";
import Login from "@/views/Login.vue";
import Search from "@/views/Search.vue";
import NewTour from "@/views/NewTour.vue";
import TouristProfile from "@/views/TouristProfile.vue";
import TourGuideProfile from "@/views/TourGuideProfile.vue";
import EditTourGuideProfile from "@/views/EditTourGuideProfile.vue";
import Review from "@/views/Review.vue";
import Chat from "@/views/Chat.vue";
import Logout from "@/views/Logout.vue";
import Listings from "@/views/Listings.vue";
import Register from '@/views/Register.vue'

const routes = [
    {
    path: '/',
    name: 'Login',
    component: Login
    },
    {
    path: '/register',
    name: 'Register',
    component: Register
    },
    {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
    },
    {
    path: '/search',
    name: 'Search',
    component: Search
    },
    {
      path: "/newtour",
      name: "NewTour",
      component: NewTour,
    },
    {
    path: '/touristProfile',
    name: 'TouristProfile',
    component: TouristProfile
    },
    {
    path: '/tourGuideProfile',
    name: 'TourGuideProfile',
    component: TourGuideProfile
    },
    {
    path: '/editTourGuideProfile',
    name: 'EditTourGuideProfile',
    component: EditTourGuideProfile
    },
    {
    path: '/review',
    name: 'Review',
    component: Review
    },
    {
    path: '/chat',
    name: 'Chat',
    component: Chat
    },
    {
    path: '/logout',
    name: 'Logout',
    component: Logout
    },    

    {
      path: "/listings",
      name: "Listings",
      component: Listings,
    },
    //delete later, for testing
    // {
    // path: '/layout',
    // name: 'Layout',
    // component: Layout
    // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
