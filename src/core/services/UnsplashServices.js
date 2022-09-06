import axios from "axios";

const UnsplashServices = {
  API_URL: "https://api.unsplash.com",
  KEY: "4-K_6FyHN93SO0WfRHBk8WddCpsFoaWIk_6EM3XtSYM",
  // KEY: "4-K_6FyHN93SO0WfRHBk8WddCpsFoaWIk_6EM3XtSY",

  getGallery() {
    return axios
      .get(`${this.API_URL}/photos/?client_id=${this.KEY}&per_page=50`)
      .then((res) => res.data);
  },

  getGalleryByQuery(query) {
    console.log("getPhotosByQuery");
    return axios
      .get(
        `${this.API_URL}/search/photos/?client_id=${this.KEY}&per_page=50&query=${query}`
      )
      .then((res) => res.data.results);
  },

  getImageById(id) {
    return axios
      .get(`${this.API_URL}/photos/${id}?client_id=${this.KEY}`)
      .then((res) => {
        console.log(res.data);
        return res.data;
      });
  },

  getImagesByUsername(username) {
    return axios
      .get(`${this.API_URL}/users/${username}?client_id=${this.KEY}`)
      .then((res) => res.data);
  },
};

export default UnsplashServices;
