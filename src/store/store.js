// import Vuex from "vuex"
import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";


const store = createStore(
    {
        state: {
            authenticated: false,
            type: null // "tourist" | "tour-guide"
        },
        mutations: {
            setLoggedIn(state, userType) {
                state.authenticated = true;
                state.type = userType;
            },
            setLoggedOut(state) {
              state.authenticated = false;
              state.type = null;
          }
        },
        plugins: [createPersistedState()],
    }
  );
  
  export default store;