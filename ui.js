class UI {
  constructor() {
    this.profiles = document.querySelector("#profiles");
    this.profilePhoto = document.querySelector("#profilePhotos");
  }

  getProfile(profile) {
    this.profiles.innerHTML = `
    <div class="card card-body">
    <div class="row">
        <div class="col-md-3">
      <a href="https://placeholder.com"><img src="https://via.placeholder.com/350x150" class="img-thumbnail"></a>
         </div>
         <div class="col-md-9">
            <h4>Contact</h4>
            <ul class="list-group">
                 <li class="list-group-item">
                    name : ${profile.name}
                 </li>
                 <li class="list-group-item">
                    username : ${profile.username}
                 </li>
                 <li class="list-group-item">
                    email : ${profile.email}
                 </li>

                 <li class="list-group-item">
                   address : ${profile.address.street}
                   ${profile.address.city}
                   ${profile.address.zipcode}
                   ${profile.address.suite}
                 </li>
                 <li class="list-group-item">
                 phone : ${profile.phone}
                  </li>
                  <li class="list-group-item">
                      website : ${profile.website}
                 </li>
                 <li class="list-group-item">
                 company : ${profile.company.name}
                </li>
            </ul>
        </div>
    </div>
</div>`;
  }

  getPhotos(photos) {
    for (let photo of photos) {
      this.profilePhoto.innerHTML += `
        <img src="${photo.thumbnailUrl} ">
        `;
    }
  }
}
