document.addEventListener("DOMContentLoaded", () => {
  setUserName();
  setupLoginForm();
  setupFiltroCursos();
  setupAbaAulas();
  setupBuscaAulas();
});

function setUserName() {
  const nameTitle = document.getElementsByClassName("profile-name").item(0);
  const user = JSON.parse(localStorage.getItem("user"));

  if (nameTitle && user) nameTitle.textContent = user.nome;
}

function setupLoginForm() {
  const form = document.getElementById("loginForm");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const emailInput = document.getElementById("email");
    const senhaInput = document.getElementById("senha");
    const msgErro = document.getElementById("msgErro");

    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();

    if (!email || !senha) {
      msgErro.textContent = "Por favor, preencha todos os campos.";
      return;
    }

    showLoading();

    try {
      const response = await fetch(`/api/users?email=${email}&senha=${senha}`);

      hideLoading();

      if (response.status !== 200) {
        const body = await response.json();
        msgErro.textContent = body.error;

        emailInput.classList.add("input-erro");
        senhaInput.classList.add("input-erro");

        setTimeout(() => {
          emailInput.classList.remove("input-erro");
          senhaInput.classList.remove("input-erro");
        }, 2000);

        return;
      }

      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "menu.html";
    } catch (error) {
      hideLoading();
      msgErro.textContent = "Erro de conexão. Tente novamente.";
    }
  });
}

function setupFiltroCursos() {
  const inputBusca = document.getElementById("buscaCursoIdeia");
  if (!inputBusca) return;

  inputBusca.addEventListener("input", () => {
    const filtro = inputBusca.value.toLowerCase();
    const cursos = document.querySelectorAll(".curso, .ideia");

    cursos.forEach((curso) => {
      const nome = curso.getAttribute("data-nome")?.toLowerCase() || "";
      const visivel = nome.includes(filtro);
      curso.style.display = visivel ? "block" : "none";
    });
  });
}

function setupBuscaAulas() {
  const btnAbrirBusca = document.getElementById("abrirBusca");
  const buscaWrapper = document.getElementById("buscaWrapper");
  const inputBusca = document.getElementById("buscaAula");

  if (!btnAbrirBusca || !inputBusca || !buscaWrapper) return;

  btnAbrirBusca.addEventListener("click", (e) => {
    e.stopPropagation();
    buscaWrapper.style.display = "block";
    inputBusca.focus();
  });

  document.addEventListener("click", (e) => {
    if (!buscaWrapper.contains(e.target) && e.target !== btnAbrirBusca) {
      buscaWrapper.style.display = "none";
    }
  });

  inputBusca.addEventListener("input", () => {
    const termo = inputBusca.value.toLowerCase();
    const aulas = document.querySelectorAll(".aula-item");

    aulas.forEach((aula) => {
      const nome = aula.textContent.toLowerCase();
      aula.style.display = nome.includes(termo) ? "block" : "none";
    });
  });
}

function setupAbaAulas() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const aulaLists = document.querySelectorAll(".aula-list");
  if (!tabButtons.length || !aulaLists.length) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const target = button.dataset.tab;

      if (
        target === "favoritos" &&
        window.location.pathname.endsWith("aulas.html")
      ) {
        e.preventDefault();
        window.location.href = "favoritos.html" + window.location.search;
        return;
      }

      tabButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      aulaLists.forEach((list) => list.classList.remove("active"));
      const targetElement = document.getElementById(`${target}Aulas`);
      if (targetElement) {
        targetElement.classList.add("active");
      }
    });
  });
}

function showLoading() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("visible");
}

function hideLoading() {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.remove("visible");
}
