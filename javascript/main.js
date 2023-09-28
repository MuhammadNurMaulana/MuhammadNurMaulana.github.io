// membuat random Math Computer

function getCompRandom() {
  const comp = Math.random();

  if (comp < 0.33) return "gunting";
  if (comp > 0.33 && comp <= 0.66) return "batu";
  return "kertas";
}

function getHasil(comp, player) {
  if (player == comp) return "Pilihan anda sama dengan bot<br>Yah ga asik masa seri 😅";
  if (player == "gunting") return comp == "batu" ? "Bot memilih Batu<br>Payah banget lawan bot ko kalah 🤣" : "Bot memilih Kertas<br>Cih menang lawan bot bangga 😆";
  if (player == "batu") return comp == "kertas" ? "Bot memilih Kertas<br>Payah banget lawan bot ko kalah 🤣" : "Bot memilih Gunting<br>Cih menang lawan bot bangga 😆";
  if (player == "kertas") return comp == "gunting" ? "Bot memilih Gunting<br>Payah banget lawan bot ko kalah 🤣" : "Bot memilih Batu<br>Cih menang lawan bot bangga 😆";
}

const pGuntingList = document.querySelectorAll(".gunting");
pGuntingList.forEach(function (pGunting) {
  pGunting.addEventListener("click", function () {
    const pilihanComp = getCompRandom();
    const pilihanPlayer = pGunting.classList[0];
    const hasil = getHasil(pilihanComp, pilihanPlayer);

    const winnerArea = document.querySelector(".winner-area");
    winnerArea.textContent = "...";
    setTimeout(() => {
      winnerArea.innerHTML = hasil;
      winnerArea.style.fontSize = "2rem";
      winnerArea.style.textAlign = "center";
    }, 1000);
  });
});

const pBatuList = document.querySelectorAll(".batu");
pBatuList.forEach(function (pBatu) {
  pBatu.addEventListener("click", function () {
    const pilihanComp2 = getCompRandom();
    const pilihanPlayer2 = pBatu.classList[1];
    const hasil2 = getHasil(pilihanComp2, pilihanPlayer2);

    const winnerArea = document.querySelector(".winner-area");
    winnerArea.textContent = "...";
    setTimeout(() => {
      winnerArea.innerHTML = hasil2;
      winnerArea.style.fontSize = "2rem";
      winnerArea.style.textAlign = "center";
    }, 1000);
  });
});

const pKertasList = document.querySelectorAll(".kertas");
pKertasList.forEach(function (pKertas) {
  pKertas.addEventListener("click", function () {
    const pilihanComp3 = getCompRandom();
    const pilihanPlayer3 = pKertas.classList[1];
    const hasil3 = getHasil(pilihanComp3, pilihanPlayer3);

    const winnerArea = document.querySelector(".winner-area");
    winnerArea.textContent = "...";
    setTimeout(() => {
      winnerArea.innerHTML = hasil3;
      winnerArea.style.fontSize = "2rem";
      winnerArea.style.textAlign = "center";
    }, 1000);
  });
});
