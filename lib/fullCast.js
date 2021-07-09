const main = document.querySelector(".content");

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

function createCard(character) {
  const characterSection = document.createElement("section");
  characterSection.classList.add("characterCard");

  const characterName = document.createElement("h2");
  characterName.textContent = character.name;

  const characterPic = document.createElement("img");
  characterPic.src = character.image;
  characterPic.alt = characterName;

  characterSection.append(characterPic);
  characterSection.append(characterName);

  return characterSection;
}
