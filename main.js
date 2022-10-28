console.log("Sorting Hat");

const wizards = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {
    id: 2,
    name: "Draco Malfoy",
    house: "Slytherin"
  },
  {
    id: 3,
    name: "Luna Lovegood",
    house: "Ravenclaw"
  },
  {
    id: 4,
    name: "Cedric Diggory",
    house: "Hufflepuff"
  }
];

const exWizards = [
  {
    id: 1,
    name: "Tyler Snape",
    house: "Death Eater"
  }

];

const houses = [
  "Gryffindor", 
  "Slytherin", 
  "HufflePuff", 
  "Ravenclaw"
];


// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//put the initial cards on the DOM

const wizardsCardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class = "card">
      <div class="card-header">
         ${member.name}
       </div>
       <div class="card-body">
         ${member.house}
       </div>
       <div class="card-footer">
         <button class="btn btn-danger" id="expel--${member.id}">Expel</button>
       </div>
       </div>`;
  }
  renderToDom("#wizards", domString);
}
//wizardsCardsOnDom(wizards);

const exWizardsCardsOnDom = (array) => {
  let domString = "";
  for (const member of array) {
    domString += `<div class = "card">
      <div class="card-header">
         ${member.name}
       </div>
       <div class="card-body">
         ${member.house}
       </div>
       <div class="card-footer">
         
       </div>
       </div>`;
  }
  renderToDom("#exWizards", domString);
}
//exwizardsCardsOnDom(exwizards);
//cardsOnDom(exWizards);

//reveals the form element after the start sorting button is clicked
  const startbtn = document.getElementById('startButton');

  startbtn.addEventListener('click', () => {
    const form = document.getElementById('form');
    console.log("start button was clicked");

    form.classList.toggle("hidden") 
  });
   
const form = document.querySelector('form');

const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener('click', (e) => {
  console.log("submit button was clicked");
  newWizard(e);
});

//const form = document.querySelector('form');

const newWizard =  (e) => {
  e.preventDefault();
console.log(e);
  // const houses = [
  //   "Gryffindor", 
  //   "Slytherin", 
  //   "HufflePuff", 
  //   "Ravenclaw"
  // ];
  const newWizardObj = {
    id: wizards.length +1, 
    name: document.querySelector("#name").value,
    //***Put this back in after I get things working.*** 
    house: houses[Math.floor(Math.random() * houses.length)]
  }
  //return newWizard;
  wizards.push(newWizardObj);
  wizardsCardsOnDom(wizards);
  form.reset();
}
//console.log("new wizard was created");

form.addEventListener("form-submit", newWizard);

document.querySelector("#cards").addEventListener('click', (e) => {
  //check e.target.id includes "expel"
  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    console.log(e.target);
    console.log(e.target.id);
    console.log(id);

    //**add logic to push newly expelled wizard to exwizards array
    
    // add logic to remove from array
    const index = wizards.findIndex(e => e.id === Number(id));
    //wizards.push(exWizards);
    //console.log('exwizard created');
    const newexWizard = wizards.splice(index, 1);
    exWizards.push(newexWizard[0]);
    // Repaint the DOM wiconst app = document.querySelector("#app");th the updated array
    wizardsCardsOnDom(wizards);
    exWizardsCardsOnDom(exWizards);
  }
});

const startApp = () => {
  wizardsCardsOnDom(wizards);
  exWizardsCardsOnDom(exWizards);
  //events(); // ALWAYS LAST
}

startApp();
