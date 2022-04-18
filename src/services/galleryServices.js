import axios from "axios";

export default class galleryServices {
  constructor() {
    this.API_URL = "https://api.unsplash.com";
    this.KEY = "4-K_6FyHN93SO0WfRHBk8WddCpsFoaWIk_6EM3XtSYM";
  }

  getPhotos = async () => {
    const result = await axios.get(
      `${this.API_URL}/photos/?client_id=${this.KEY}&per_page=50`
    );

    return result.data;
  };

  getPhotosByQuery = async (query) => {
    const result = await axios.get(
      `${this.API_URL}/search/photos/?client_id=${this.KEY}&per_page=50&query=${query}`
    );

    return result.data.results;
  };

  getPhotoById = async (id) => {
    const result = await axios.get(
      `${this.API_URL}/photos/${id}?client_id=${this.KEY}`
    );

    return result.data;
  };

  getUserPhotos = async (username) => {
    const result = await axios.get(
      `${this.API_URL}/users/${username}?client_id=${this.KEY}`
    );

    return result.data;
  };
}
