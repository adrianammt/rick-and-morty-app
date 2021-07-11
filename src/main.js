const fullCastbutton = document.querySelector(".showContentBtn");

const main = document.querySelector(".content");

const statusSelector = document.querySelector("#status");

fullCastbutton.addEventListener("click", () => {
  main.textContent = "";

  //This part focuses on the select tag content
  const status = statusSelector.value;
  console.log(status);

  if (status === "fullCast") {
    const url = `https://rickandmortyapi.com/api/character`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((fullCast) => {
        console.log(fullCast);
        fullCast.results.forEach((character) => {
          main.append(createCard(character));
        });
      });
  } else {
    const url = `https://rickandmortyapi.com/api/character/?status=` + status;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((cast) => {
        console.log(cast);
        cast.results.forEach((character) => {
          main.append(createCard(character));
        });
      });
  }

  //This is th function that creates the card structure
  function createCard(character) {
    const characterSection = document.createElement("section");
    if (status === "fullCast") {
      characterSection.classList.add("characterCard");
    } else if (status === "alive") {
      characterSection.classList.add("characterCard", "alive-bg");
    } else if (status === "dead") {
      characterSection.classList.add("characterCard", "dead-bg");
    } else {
      characterSection.classList.add("characterCard", "unknown-bg");
    }
    const characterName = document.createElement("h2");
    characterName.textContent = character.name;
    characterName.classList.add("character-name");

    const characterPic = document.createElement("img");
    characterPic.classList.add("character-pic");
    characterPic.src = character.image;
    characterPic.alt = characterName;

    characterSection.append(characterPic);
    characterSection.append(characterName);

    return characterSection;
  }
});
