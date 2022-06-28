import axios from "axios";

const GalleryServices = {
  API_URL: "https://api.unsplash.com",
  KEY: "4-K_6FyHN93SO0WfRHBk8WddCpsFoaWIk_6EM3XtSYM",

  getPhotos() {
    return axios
      .get(`${this.API_URL}/photos/?client_id=${this.KEY}&per_page=50`)
      .then((res) => res.data);
  },

  getPhotosByQuery(query) {
    return axios
      .get(
        `${this.API_URL}/search/photos/?client_id=${this.KEY}&per_page=50&query=${query}`
      )
      .then((res) => res.data.results);
  },

  getPhotoById(id) {
    return axios
      .get(`${this.API_URL}/photos/${id}?client_id=${this.KEY}`)
      .then((res) => res.data);
  },

  getUserPhotos(username) {
    return axios
      .get(`${this.API_URL}/users/${username}?client_id=${this.KEY}`)
      .then((res) => res.data);
  },
};

export default GalleryServices;
