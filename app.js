const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector("#searchProfile");

searchProfile.addEventListener("keyup", (event) => {
  let text = event.target.value;

  if (text.value !== "") {
    profile.getProfile(text).then((response) => {
      if (response.dataProfile.length === 0) {
      } else {
        ui.getProfile(response.dataProfile[0]);
        ui.getPhotos(response.photos);
      }
    });
  }
});
