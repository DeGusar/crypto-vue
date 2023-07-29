import Vue from "vue";
import Vuex from "vuex";
import mainPageModule from "@/views/MainPage/mainPageModule";
import mainPageHistoryModule from "@/views/MainPage/MainPageHistory/mainPageHistoryModule";
import mainPageOverviewModule from "@/views/MainPage/MainPageOverview/mainPageOverviewModule";
import rootStoreActions from "./rootStoreActions";
import rootStoreGetters from "./rootStoreGetters";

Vue.use(Vuex);

const { IS_LOADING } = rootStoreGetters;
const { UPDATE_IS_LOADING } = rootStoreActions;

export default new Vuex.Store({
  modules: {
    mainPageModule,
    mainPageHistoryModule,
    mainPageOverviewModule,
  },
  state: () => ({
    isLoading: false,
  }),
  getters: {
    [IS_LOADING]: (state) => state.isLoading,
  },
  actions: {
    [UPDATE_IS_LOADING]: ({ commit }, isLoading) => {
      commit("SET_IS_LOADING", isLoading);
    },
  },
  mutations: {
    SET_IS_LOADING: (state, isLoading) => {
      state.isLoading = isLoading;
    },
  },
});
