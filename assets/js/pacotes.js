document.addEventListener("DOMContentLoaded", function () {
  const pacotes = [
    { nome: "Paris", img: "../images/img1.jpeg", resumo: "Descubra a Cidade Luz e seus encantos únicos!", valor: 5000 },
    { nome: "Maldivas", img: "../images/img2.jpeg", resumo: "Relaxe no paraíso com águas cristalinas!", valor: 7000 },
    { nome: "Nova York", img: "../images/img3.jpeg", resumo: "Explore a cidade que nunca dorme!", valor: 6000 },
    { nome: "Roma", img: "../images/img4.jpeg", resumo: "7 dias na cidade do amor com passeios guiados.", valor: 5500 },
    { nome: "Rio de Janeiro", img: "../images/img5.jpeg", resumo: "5 dias de luxo e descanso nas praias paradisíacas.", valor: 4500 },
    { nome: "Bariloche", img: "../images/img6.jpeg", resumo: "6 dias de aventura na neve com belas paisagens.", valor: 5800 }
  ];

  const containerPacotes = document.querySelector(".row"); // Seleciona o container onde os pacotes vão ser inseridos
  const modalReserva = document.createElement("div");

  modalReserva.id = "modalReserva";
  modalReserva.style.display = "none";
  modalReserva.style.position = "fixed";
  modalReserva.style.top = "0";
  modalReserva.style.left = "0";
  modalReserva.style.width = "100%";
  modalReserva.style.height = "100%";
  modalReserva.style.backgroundColor = "rgba(0,0,0,0.5)";
  modalReserva.style.justifyContent = "center";
  modalReserva.style.alignItems = "center";
  modalReserva.style.zIndex = "1000";

  document.body.appendChild(modalReserva);

  pacotes.forEach((pacote) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");

    card.innerHTML = `
      <div class="card">
        <img src="${pacote.img}" class="card-img-top" alt="${pacote.nome}">
        <div class="card-body">
          <h5 class="card-title">${pacote.nome}</h5>
          <p class="card-text">${pacote.resumo}</p>
          <a href="#" class="btn btn-reservar btn-primary" data-destino="${pacote.nome}" data-imagem="${pacote.img}" data-resumo="${pacote.resumo}" data-valor="${pacote.valor}">Reserve Agora</a>
        </div>
      </div>
    `;

    containerPacotes.appendChild(card);
  });

  const botoesReserva = document.querySelectorAll(".btn-reservar");

  botoesReserva.forEach((botao) => {
    botao.addEventListener("click", function () {
      const destino = this.dataset.destino || "Destino";
      const imagem = this.dataset.imagem || "../images/img2.png"; 
      const resumo = this.dataset.resumo || "Pacote incrível!";
      const valor = parseFloat(this.dataset.valor) || 0;
      const valorComDesconto = (valor * 0.9).toFixed(2);

      modalReserva.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 10px; text-align: center; max-width: 400px;">
          <img src="${imagem}" alt="${destino}" style="width: 100%; border-radius: 10px;">
          <h2>${destino}</h2>
          <p>${resumo}</p>
          <h4>Valor da Viagem: <s>R$${valor.toFixed(2)}</s> <strong>R$${valorComDesconto}</strong></h4>
          <button id="btnReservarFinal" style="background: green; color: white; padding: 10px; margin: 10px; border: none; border-radius: 5px;">Reservar Viagem</button>
          <button id="btnFechar" style="background: red; color: white; padding: 10px; margin: 10px; border: none; border-radius: 5px;">Fechar</button>
        </div>
      `;

      modalReserva.style.display = "flex";

      document.getElementById("btnFechar").addEventListener("click", function () {
        modalReserva.style.display = "none";
      });
    });
  });

  modalReserva.addEventListener("click", function (e) {
    if (e.target === modalReserva) {
      modalReserva.style.display = "none";
    }
  });
});
