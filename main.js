// Select elements

let question = document.getElementById("quest");
let answer = document.getElementById("answer");
let save = document.querySelector(".save");
let closeCard = document.querySelector(".close");

let arrayOfTask = [];

triggerLocalStorage();

function clearData() {
  question.value = "";
  answer.value = "";
}
function addTaskToArray() {
  const data = {
    quest: question.value.trim(),
    answer: answer.value.trim(),
  };
  arrayOfTask.push(data);
  addDataToPage(arrayOfTask);
  addDataToLocalStorage(arrayOfTask);
  showUpAnswer();
}

save.addEventListener("click", () => {
  if (question.value.trim() != "" && answer.value.trim() != "") {
    addTaskToArray();
    clearData();
  } else {
    alert("Please fill the forms");
  }
});

function addDataToPage(arrayOfTask) {
  // Clear existing content
  document.querySelector(".footer").innerHTML = "";

  arrayOfTask.forEach((e) => {
    // Main Div
    let box_answer = document.createElement("div");
    box_answer.className = "box-answer";

    // span
    let span = document.createElement("span");
    box_answer.appendChild(span);
    // h2
    let h2_box = document.createElement("h2");
    let h2_box_node = document.createTextNode(e.quest);
    h2_box.appendChild(h2_box_node);
    box_answer.appendChild(h2_box);
    // h3
    let h3_box = document.createElement("h3");
    h3_box.className = "final-answer";
    let h3_box_node = document.createTextNode(e.answer);
    h3_box.appendChild(h3_box_node);
    box_answer.appendChild(h3_box);
    // Append Child to footer
    document.querySelector(".footer").appendChild(box_answer);
  });
}

function addDataToLocalStorage(arrayOfTask) {
  window.localStorage.setItem("task", JSON.stringify(arrayOfTask));
}

function triggerLocalStorage() {
  let getData = window.localStorage.getItem("task");

  if (getData) {
    arrayOfTask = JSON.parse(getData);
  }

  addDataToPage(arrayOfTask);
}

// Show up the answer

function showUpAnswer() {
  let card = document.querySelectorAll(".box-answer");
  card.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("show");
    });
  });
  
}
showUpAnswer();
// Close CreateFlashCard

let land = document.querySelector(".land");

function closeFlashCard() {
  closeCard.addEventListener("click", () => {
    land.style.display = "none";
  });
}
closeFlashCard();
// Create Card

let newCard = document.querySelector(".newcard");

function createCard() {
  newCard.addEventListener("click", () => {
    land.style.display = "block";
  });
}
createCard();

// Clear Cards

let del_card = document.querySelector(".delcards");

function clearCards() {
  del_card.addEventListener("click", () => {
    window.localStorage.removeItem("task");
    arrayOfTask = [];
    addDataToPage(arrayOfTask);
  });
}
clearCards();
