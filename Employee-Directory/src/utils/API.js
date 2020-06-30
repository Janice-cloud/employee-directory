import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getRandomDog: function() {
    return axios.get("http://dummy.restapiexample.com/api/v1/employees");
  },
  getDogsOfBreed: function(breed) {
    return axios.get("http://dummy.restapiexample.com/api/v1/employees" + breed + "/profile_image");
  },
  getBaseBreedsList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  }
};
