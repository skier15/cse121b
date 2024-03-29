/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Irina Groza",
    photo: "images/groza.png", 
    favoriteFoods: ["Borsch", "Tom Yam", "Ice-Cream", "Pepsi"], 
    hobbies: ["Skiing", "Reading", "Bicycle"],
    placesLived: [],
  };
  
  /* Populate Profile Object with placesLive objects */
  // place:
  let place = { place: "Moscow", length: "3 years" }
  myProfile.placesLived.push(place);
  
  /* DOM Manipulation - Output */
  
  /* Name */
  document.querySelector("#name").textContent = myProfile.name;
  /* Photo with attributes */
  document.querySelector("#photo").src = myProfile.photo;
  document.querySelector("#photo").alt = `${myProfile.name} photo`;

  /* Favorite Foods List*/
  myProfile.favoriteFoods.forEach(food => {
      let li = document.createElement("li");
      li.textContent = food
      document.querySelector("#favorite-foods").appendChild(li)
  })

  /* Hobbies List */
  myProfile.hobbies.forEach(hobby => {
      let li = document.createElement("li");
      li.textContent = hobby
      document.querySelector("#hobbies").appendChild(li)
  })
  /* Places Lived DataList */
  myProfile.placesLived.forEach(placeLived => {
      
      let dt = document.createElement("dt")
      dt.textContent = placeLived.place
      document.querySelector("#places-lived").appendChild(dt)
      
      let dd = document.createElement("dd")
      dd.textContent = placeLived.length
      document.querySelector("#places-lived").appendChild(dd)
  })
  