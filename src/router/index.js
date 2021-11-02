import { createRouter, createWebHistory } from "vue-router";
import Search from "@/views/Search.vue";
import NewTour from "@/views/NewTour.vue";
import TouristProfile from "@/views/TouristProfile.vue";
import TourGuideProfile from "@/views/TourGuideProfile.vue";
import EditTourGuideProfile from "@/views/EditTourGuideProfile.vue";
import Chat from "@/views/Chat.vue";
import Logout from "@/views/Logout.vue";
import ListingsNature from "@/views/ListingsNature.vue";
import ListingsAdv from "@/views/ListingsAdv.vue";
import ListingsBeach from "@/views/ListingsBeach.vue";
import EditUserProfile from "@/views/EditUserProfile.vue";
// import SignUp from '@/views/SignUp.vue'
<<<<<<< HEAD
import RegisterTourist from "@/views/RegisterTourist.vue";
import LoginTourist from "@/views/LoginTourist.vue";
import RegisterTourGuide from "@/views/RegisterTourGuide.vue";
import LoginTourGuide from "@/views/LoginTourGuide.vue";
import Landing from "@/views/Landing.vue";
import EditTour from "@/views/EditTour.vue";
import NewReviewTourGuide from "@/views/NewReviewTourGuide.vue";
import NewReviewTourist from "@/views/NewReviewTourGuide.vue";
=======
import RegisterTourist from '@/views/RegisterTourist.vue'
import LoginTourist from '@/views/LoginTourist.vue'
import RegisterTourGuide from '@/views/RegisterTourGuide.vue'
import LoginTourGuide from '@/views/LoginTourGuide.vue'
import Landing from '@/views/Landing.vue'
import EditTour from '@/views/EditTour.vue'
import NewReviewTourGuide from '@/views/NewReviewTourGuide.vue'
import NewReviewTourist from '@/views/NewReviewTourist.vue'
>>>>>>> 9e1d4d358eaff33684e62f8fd72757a80d880389

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/logintourguide",
    name: "LoginTourGuide",
    component: LoginTourGuide,
  },
  {
    path: "/registertourguide",
    name: "RegisterTourGuide",
    component: RegisterTourGuide,
  },
  {
    path: "/logintourist",
    name: "LoginTourist",
    component: LoginTourist,
  },
  {
    path: "/registertourist",
    name: "RegisterTourist",
    component: RegisterTourist,
  },
  // {
  // path: '/signup',
  // name: 'SignUp',
  // component: SignUp
  // },
  {
    path: "/search",
    name: "Search",
    component: Search,
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
  },
  {
    path: "/touristProfile",
    name: "TouristProfile",
    component: TouristProfile,
  },
  {
    path: "/editUserProfile",
    name: "EditUserProfile",
    component: EditUserProfile,
  },
  {
    path: "/tourGuideProfile",
    name: "TourGuideProfile",
    component: TourGuideProfile,
  },
  {
    path: "/editTourGuideProfile",
    name: "EditTourGuideProfile",
    component: EditTourGuideProfile,
  },
  {
    path: "/chat",
    name: "Chat",
    component: Chat,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
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
    path: "/newreviewtourguide",
    name: "NewReviewTourGuide",
    component: NewReviewTourGuide,
  },
  {
    path: "/newreviewtourist",
    name: "NewReviewTourist",
    component: NewReviewTourist,
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
