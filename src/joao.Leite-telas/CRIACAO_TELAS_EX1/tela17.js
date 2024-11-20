const itens = JSON.parse(localStorage.getItem("Cadastramento"));
const conteiner = document.querySelector(".name-quadras");

itens?.forEach((quadra) => {
  conteiner.innerHTML += `
    <div class="quadra">
        <h6>${quadra.nomeQuadra}</h6>
        <div class="icons">
            <div class="text relatorio">
                <img src="relEX_1.svg" alt="">
            </div>
            <div class="text editar" data-bs-toggle="modal" data-bs-target="#modalAtualizarQuadra">
                <img src="editEX_1.svg" alt="" >
            </div>
            <div class="text deletar">
                <img src="deletEX_1.svg" alt="">
            </div>
        </div>
    </div>`;
});
const quadra = document.querySelectorAll(".quadra h6");
quadra.forEach((q) => {
  q?.addEventListener("click", async (event) => {
    const nomeQuadra = event.target.innerText;
    await window.navigation.navigate(`tela20.html?idQuadra=${nomeQuadra}`);
  });
});

const btnRelatorio = document.querySelector(".relatorio");
const btnEditar = document.querySelector(".editar");
const btnDeletar = document.querySelector(".deletar");
const form = document.querySelector("form");
let idQuadra = "";

btnDeletar?.addEventListener("click", (event) => {
  const nomeQuadra = event.target.parentNode.parentNode.parentNode.innerText;
  const novasQuadras = itens.filter(
    (quadra) => quadra.nomeQuadra !== nomeQuadra
  );
  localStorage.setItem("Cadastramento", JSON.stringify(novasQuadras));
  alert("Quadra excluída com sucesso!");
  window.location.reload();
});

btnEditar?.addEventListener("click", (event) => {
  const nomeQuadra = event.target.parentNode.parentNode.parentNode.innerText;
  const quadra = itens.find((quadra) => quadra.nomeQuadra == nomeQuadra);
  Object.entries(quadra).forEach(([key, value]) => {
    const input = document.querySelector(`[name=${key}]`);
    if (input) {
      input.value = value;
    }
  });

  idQuadra = nomeQuadra;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  const indexQuadra = itens.findIndex(
    (quadra) => quadra.nomeQuadra == idQuadra
  );
  itens.splice(indexQuadra, 1, data);
  localStorage.setItem("Cadastramento", JSON.stringify(itens));
  alert("Alterado com sucesso!");
  form.reset();
  window.location.reload();
});
