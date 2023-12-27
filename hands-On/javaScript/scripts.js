// studentModal.open = true // funciona para abrir o dialog
// studentModal.open = false// funciona para fechar o dialog
// studentModal.setAttribute('open', true) // funciona para abrir o dialog
// studentModal.setAttribute('open', false) // não funciona para fechar o dialog
// studentModal.removeAttribute('open') funciona para fechar o dialog
// studentModal.showModal() // funciona para abrir o dialog
// studentModal.close() funciona para fechar o dialog

const baseUrl = "http://localhost:3000";

// Passo 1: Selecionar os elementos HTML necessários
const studentModal = document.querySelector("#student-modal");
const studentTable = document.querySelector("#student-table");
const studentForm = document.querySelector("#student-form");
const studentModalTitle = document.querySelector("#student-modal-title");
const saveStudentButton = document.querySelector("#save-student");


// studentModal.showModal()
// Passo 2: Definir função para abrir o modal do estudante
const openStudentModal = () => studentModal.showModal();
const createStudent = () => {
  studentModalTitle.innerHTML = `Novo Aluno`;
  saveStudentButton.innerHTML = "Criar";
  openStudentModal();
  saveStundentData(`${baseUrl}/alunos`, "POST");
};



// Passo 3: Definir função para fechar o modal do estudante
const closeStudentModal = () => studentModal.close();



// Passo 4: Criar uma linha na tabela do estudante
const createStudentTableRow = (id, name, matricula, curso) => {
  const tableTr = document.createElement("tr");
  tableTr.innerHTML = `
    <td>${name}</td>
    <td>${matricula}</td>
    <td>${curso}</td>
    <td align="center">
      <button class="button button--danger" onclick="deleteStudentTable(${id})">Apagar</button>
      <button class="button button--success" onclick="editdStudentModal(${id})"}>Editar</button>
    </td>`;
  studentTable.appendChild(tableTr);
};

const saveStundentData = (url, method) => {
  studentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // capturar os dados do formulário
    const formData = new FormData(studentForm);
    // transformar os dados do formulário em um objeto
    const payload = new URLSearchParams(formData);
    fetch(url, {
      method: method,
      body: payload,
    }).catch((error) => {
      closeStudentModal();
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
  });
};

// Passo 7: Abrir o modal para criar um novo aluno
// Passo 8: Excluir um aluno da tabela
const deleteStudentTable = (id) => {
  fetch(`${baseUrl}/alunos/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  });
};

// Passo 9: Abrir o modal de edição e carregar os dados do aluno
const editdStudentModal = (id) => {
  fetch(`${baseUrl}/alunos/${id}`)
    .then((resp) => resp.json())
    .then((data) => {
      const { nome, matricula, curso } = data;
      studentModalTitle.innerHTML = `Editar Aluno ${nome}`;
      document.querySelector("#nome").value = nome;
      document.querySelector("#matricula").value = matricula;
      document.querySelector("#curso").value = curso;
      saveStudentButton.innerHTML = "Salvar";
      openStudentModal();
      saveStundentData(`${baseUrl}/alunos/${id}`, "PUT");
    })
    .catch((error) => {
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
};

// Passo 10: Chamar a função para carregar dados iniciais da tabela ao carregar a página
const loadStudentTable = async () => {
  try {
    const response = await fetch("http://localhost:3000/alunos");
    const data = await response.json();
    data.forEach((student) => {
      createStudentTableRow(
        student.id,
        student.nome,
        student.matricula,
        student.curso
      );
    });
  } catch (error) {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  }
};

const loadStudentTable2 = () => {
  fetch("http://localhost:3000/alunos")
    .then((resp) => resp.json())
    .then((data) => {
      data.forEach((student) => {
        // pode ser feito assim também
        // const { nome, matricula, curso } = student;
        createStudentTableRow(
          student.id,
          student.nome,
          student.matricula,
          student.curso
        );
      });
    })
    .catch((error) => {
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
};

loadStudentTable();


const subjectModal = document.querySelector("#subject-modal");
const subjectCards = document.querySelector("#subject-cards-list")
const subjectModalTitle = document.querySelector("#subject-modal-title");
const subjectForm = document.querySelector("#subject-form");
const saveSubjectButton = document.querySelector("#save-subject");

const openSubjectModal = () => subjectModal.showModal();
const createSubject = () => {
  subjectModalTitle.innerHTML = `Nova disciplina`;
  saveStudentButton.innerHTML = "Criar";
  openSubjectModal();
  saveSubjectData(`${baseUrl}/disciplinas`, "POST");
};

const closeSubjectModal = () => subjectModal.close();

const createSubjectCard = (id, nome, cargaHoraria, professor, status, observacos) => {
  const subjectCard = document.createElement("div");
  if(status === "Obrigatória"){ 
    subjectCard.innerHTML =`
    <div class="subject-card">
      <h3 class="subject-card__title">${nome}</h3>
      <ul class="subject-card__list">
        <li>carga horária: ${cargaHoraria}</li>
        <li>Professor: ${professor}</li>
        <li>Status <span class="tag tag--danger">${status}</span></li>
      </ul>
      <p>${observacos}</p>
      <div class="tortoPraDireita">
        <button class="button button--danger" onclick="deleteSubjectCards(${id})">Apagar</button>
        <button class="button button--success" onclick="editSubjectModal(${id})"}>Editar</button>
      </div>
    </div>`;
    subjectCards.appendChild(subjectCard);
  } else{
    subjectCard.innerHTML =`
    <div class="subject-card">
      <h3 class="subject-card__title">${nome}</h3>
      <ul class="subject-card__list">
        <li>carga horária: ${cargaHoraria}</li>
        <li>Professor: ${professor}</li>
        <li>Status <span class="tag tag--success">${status}</span></li>
      </ul>
      <p>${observacos}</p>
      <div class="tortoPraDireita">
        <button class="button button--danger" onclick="deleteSubjectCards(${id})">Apagar</button>
        <button class="button button--success" onclick="editSubjectModal(${id})"}>Editar</button>
      </div>
    </div>`;
    subjectCards.appendChild(subjectCard);
  }
};

const saveSubjectData = (url, method) => {
  subjectForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(subjectForm);
    const payload = new URLSearchParams(formData);
    fetch(url, {
      method: method,
      body: payload,
    }).catch((error) => {
      closeSubjectModal();
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
  });
};

const editSubjectModal = (id) => {
  fetch(`${baseUrl}/disciplinas/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const { nome, cargaHoraria, professor, status, observacos } = data;
      studentModalTitle.innerHTML = `Editar disciplina ${nome}`;
      document.querySelector("#nome").value = nome;
      document.querySelector("#cargaHoraria").value = cargaHoraria;
      document.querySelector("#professor").value = professor;
      document.querySelector("#status").value = status;
      document.querySelector("#observacos").value = observacos;
      saveSubjectButton.innerHTML = "Salvar";
      openSubjectModal();
      saveSubjectData(`${baseUrl}/disciplinas/${id}`, "PUT");
    })
    .catch((error) => {
      alert("Ocorreu um erro. Tente mais tarde.");
      console.error(error);
    });
};

const deleteSubjectCards = (id) => {
  fetch(`${baseUrl}/disciplinas/${id}`, {
    method: "DELETE",
  }).catch((error) => {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  });
};

const loadSubjectCards = () =>{
  fetch(`${baseUrl}/disciplinas`)
  .then((response) => response.json())
  .then((data) =>{
    data.forEach((subject) =>{
      createSubjectCard(
        subject.id,
        subject.nome,
        subject.cargaHoraria,
        subject.professor,
        subject.status,
        subject.observacos
      );
    })
  })
  .catch((error) => {
    alert("Ocorreu um erro. Tente mais tarde.");
    console.error(error);
  });
};

loadSubjectCards();