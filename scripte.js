let index = 0;
let score = 0;
let selectedName = null;

shuffle(produits);

const image = document.getElementById("image");
const choicesDiv = document.getElementById("choices");

loadQuestion();

function loadQuestion() {
  const p = produits[index];
  image.src = p.image;
  selectedName = null;
  choicesDiv.innerHTML = "";

  shuffle(p.choix).forEach(c => {
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.onclick = () => selectedName = c;
    choicesDiv.appendChild(btn);
  });
}

function selectType(type) {
  const p = produits[index];
  if (selectedName === p.nom && type === p.type) score++;
  index++;

  if (index < produits.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz").innerHTML =
      `<h2>Score final : ${score} / ${produits.length}</h2>`;
  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
