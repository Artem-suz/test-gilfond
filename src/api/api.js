export const searchColleagueAPI = {
  fetchUsers(url) {
    return fetch(url, {
      method: "GET",
    }).then(r => r.json());
  },
};
