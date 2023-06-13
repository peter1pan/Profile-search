class Profile {
  constructor() {
    (this.clientid = ""), (this.cliendSecret = "");
  }

  async getProfile(username) {
    const profileRes = await fetch(
      `https://jsonplaceholder.typicode.com/users?username=${username}`
    );

    const dataProfile = await profileRes.json();
    const dataPhotos = await fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${dataProfile[0].id}`
    );
    const photos = await dataPhotos.json();
    return {
      dataProfile,
      photos,
    };
  }
}
