import { createRouter, createWebHistory } from "vue-router";
import Search from "@/views/Search.vue";
import NewTour from "@/views/NewTour.vue";
import TouristProfile from "@/views/TouristProfile.vue";
import TourGuideProfile from "@/views/TourGuideProfile.vue";
import Chat from "@/views/Chat.vue";
import Logout from "@/views/Logout.vue";
import ListingsNature from "@/views/ListingsNature.vue";
import ListingsAdv from "@/views/ListingsAdv.vue";
import ListingsBeach from "@/views/ListingsBeach.vue";
import EditUserProfile from "@/views/EditUserProfile.vue";
// import SignUp from '@/views/SignUp.vue'
import RegisterTourist from '@/views/RegisterTourist.vue'
import LoginTourist from '@/views/LoginTourist.vue'
import RegisterTourGuide from '@/views/RegisterTourGuide.vue'
import LoginTourGuide from '@/views/LoginTourGuide.vue'
import Landing from '@/views/Landing.vue'
import EditTour from '@/views/EditTour.vue'
import NewReview from '@/views/NewReview.vue'
import TourInfo from '@/views/TourInfo.vue'
import ConfirmationPage from '@/views/ConfirmationPage.vue'
import TourGuideView from '@/views/TourGuideView.vue'
import Tips from '@/views/Tips.vue'
import TipsCovid from '@/views/TipsCovid.vue'
import TopDestinations from '@/views/TopDestinations.vue'
const routes = [
    {
    path: '/',
    name: 'Landing',
    component: Landing
    },
    {
    path: '/tips',
    name: 'Tips',
    component : Tips
    },
    {
    path: '/logintourguide',
    name: 'LoginTourGuide',
    component: LoginTourGuide
    },
    {
      path: '/tips-for-travelling-with-covid',
      name: 'TipsCovid',
      component: TipsCovid
    },
    {
      path: '/top-destinations-you-should-visit',
      name: 'TopDestinations',
      component: TopDestinations
    },
    {
    path: '/registertourguide',
    name: 'RegisterTourGuide',
    component: RegisterTourGuide
    },
    {
    path: '/logintourist',
    name: 'LoginTourist',
    component: LoginTourist
    },
    {
    path: '/registertourist',
    name: 'RegisterTourist',
    component: RegisterTourist
    },
    // {
    // path: '/signup',
    // name: 'SignUp',
    // component: SignUp
    // },
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
      path: "/edittour",
      name: "EditTour",
      component: EditTour,
      props: true,
    },
    {
    path: '/touristProfile',
    name: 'TouristProfile',
    component: TouristProfile
    },
    {
    path: '/editUserProfile',
    name: 'EditUserProfile',
    component: EditUserProfile
    },
    {
    path: '/tourGuideProfile',
    name: 'TourGuideProfile',
    component: TourGuideProfile
    },
    {
    path: '/tourGuideView',
    name: 'TourGuideView',
    component: TourGuideView
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
      path: "/listingsnature",
      name: "ListingsNature",
      component: ListingsNature,
    },
    {
      path: "/listingsadv",
      name: "ListingsAdv",
      component: ListingsAdv,
    },
    {
      path: "/listingsbeach",
      name: "ListingsBeach",
      component: ListingsBeach,
    },
    {
      path: "/newreview",
      name: "NewReview",
      component: NewReview,
    },
    {
      path: "/tourInfo",
      name: "TourInfo",
      component: TourInfo,
      props: true,
    },
    {
      path: "/confirmationpage",
      name: "ConfirmationPage",
      component: ConfirmationPage,
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
