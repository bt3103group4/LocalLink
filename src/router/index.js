import { createRouter, createWebHistory } from "vue-router";
import NewTour from "@/views/NewTour.vue";
import TouristProfile from "@/views/TouristProfile.vue";
import TourGuideProfile from "@/views/TourGuideProfile.vue";
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
import Explore from '@/views/Explore.vue'
import TipsCovid from '@/views/TipsCovid.vue'
import TopDestinations from '@/views/TopDestinations.vue'
import SoloTrip from '@/views/SoloTrip.vue'
import Help from '@/views/Help.vue'
import NoAccess from '@/views/NoAccess.vue'
import NotFound from '@/views/NotFound.vue'
import VirtualTour from '@/views/VirtualTour.vue'
import store from '@/store/store.js'

const allowOnlyTouristRoute = (to, from, next) => {
  console.log(store.state);
  console.log(store.state.type);
  console.log(`Allow: ${store.state.type === "tourist"}`);
  store.state.type === "tourist" ? next() : next("/noaccess");
}

const allowOnlyTourGuideRoute = (to, from, next) => {
  console.log(store.state);
  console.log(store.state.type);
  console.log(`Allow: ${store.state.type === "tour-guide"}`);
  store.state.type === "tour-guide" ? next() : next("/noaccess");
}

const allowOnlyAuthRoute = (to, from, next) => {
  console.log(store.state);
  console.log(store.state.type);
  console.log(`Allow: ${store.state.type !== null}`);
  store.state.type !== null ? next() : next("/noaccess");
}


const routes = [
    {
    path: '/',
    name: 'Landing',
    component: Landing
    },
    {
      path: '/help',
      name: 'Help',
      beforeEnter: allowOnlyAuthRoute,
      component: Help,
    },
    {
      path: '/VirtualTour',
      name: 'VirtualTour',
      beforeEnter: allowOnlyAuthRoute,
      component: VirtualTour,
    },
    {
    path: '/Explore',
    name: 'Explore',
    beforeEnter: allowOnlyAuthRoute,
    component : Explore
    },
    {
    path: '/logintourguide',
    name: 'LoginTourGuide',
    component: LoginTourGuide,
    },
    {
      path: '/tips-for-travelling-with-covid',
      name: 'TipsCovid',
      beforeEnter: allowOnlyAuthRoute,
      component: TipsCovid
    },
    {
      path: '/top-destinations-you-should-visit',
      name: 'TopDestinations',
      beforeEnter: allowOnlyAuthRoute,
      component: TopDestinations
    },
    {
      path: '/tips-for-your-next-solo-trip',
      name: 'SoloTrip',
      beforeEnter: allowOnlyAuthRoute,
      component: SoloTrip
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
    path: "/newtour",
    name: "NewTour",
    beforeEnter: allowOnlyTourGuideRoute,
    component: NewTour,
    },
    {
      path: "/edittour",
      name: "EditTour",
      beforeEnter: allowOnlyTourGuideRoute,
      component: EditTour,
      props: true,
    },
    {
    path: '/touristProfile',
    name: 'TouristProfile',
    beforeEnter: allowOnlyTouristRoute,
    component: TouristProfile
    },
    {
    path: '/editUserProfile',
    name: 'EditUserProfile',
    beforeEnter: allowOnlyAuthRoute,
    component: EditUserProfile
    },
    {
    path: '/tourGuideProfile',
    name: 'TourGuideProfile',
    beforeEnter: allowOnlyTourGuideRoute,
    component: TourGuideProfile
    },
    {
    path: '/tourGuideView',
    name: 'TourGuideView',
    // beforeEnter: allowOnlyTourGuideRoute,
    component: TourGuideView,
    props: true,
    },
    {
    path: '/logout',
    name: 'Logout',
    component: Logout
    },    
    {
      path: "/listingsnature",
      name: "ListingsNature",
      // beforeEnter: allowOnlyAuthRoute,
      component: ListingsNature,
    },
    {
      path: "/listingsadv",
      name: "ListingsAdv",
      // beforeEnter: allowOnlyAuthRoute,
      component: ListingsAdv,
    },
    {
      path: "/listingsbeach",
      name: "ListingsBeach",
      // beforeEnter: allowOnlyAuthRoute,
      component: ListingsBeach,
    },
    {
      path: "/newreview",
      name: "NewReview",
      beforeEnter: allowOnlyAuthRoute,
      component: NewReview,
    },
    {
      path: "/tourInfo",
      name: "TourInfo",
      // beforeEnter: allowOnlyAuthRoute,
      component: TourInfo,
      props: true,
    },
    {
      path: "/confirmationpage",
      name: "ConfirmationPage",
      beforeEnter: allowOnlyAuthRoute,
      component: ConfirmationPage,
    },
    {  path: "/noaccess",
      name: "NoAccess",
      component: NoAccess,
    },
    {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
