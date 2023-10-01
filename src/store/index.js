import { createStore } from "vuex";

import { searchColleagueAPI } from "../api/api";

export default createStore({
  state: {
    users: [],
    textError: null,
    isFetchingUsers: false,
    selectedUserId: null,
  },
  actions: {
    async getUsers(store, url) {
      try {
        store.dispatch("clearState");
        store.commit("setIsFetchingUsers", true);
        const arrUsers = await searchColleagueAPI.fetchUsers(url);
        store.commit("setIsFetchingUsers", false);

        if (!arrUsers.length) {
          store.commit("setError", "ничего не найдено");
          return;
        }

        store.commit("setError", null);
        store.commit("setUsers", arrUsers);
      } catch {
        const text = "Ошибка поиска";
        store.commit("setError", text);
      }
    },
    clearUsers(store) {
      store.commit("setUsers", []);
    },
    setSelectedUser(store, id) {
      store.commit("setSelectedUserId", id);
    },
    clearState(store) {
      console.log("clearState");
      store.commit("setError", null);
      store.commit("setIsFetchingUsers", false);
      store.commit("setUsers", []);
      store.commit("setSelectedUserId", null);
    },
  },
  mutations: {
    setError(state, text) {
      state.textError = text;
    },
    setIsFetchingUsers(state, bool) {
      state.isFetchingUsers = bool;
    },
    setUsers(state, arr) {
      state.users = arr;
    },
    setSelectedUserId(state, id) {
      state.selectedUserId = id;
    },
  },
});
