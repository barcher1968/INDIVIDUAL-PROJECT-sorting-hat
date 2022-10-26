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

const cardsOnDom = (array) => {
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
         <button class="btn btn-danger" id="delete--${member.id}">Expel</button>
       </div>
       </div>`;
  }
  renderToDom("#app", domString);
}
cardsOnDom(wizards);
//cardsOnDom(exWizards);

//reveals the form element after the start sorting button is clicked
  const startbtn = document.getElementById('startButton');

  startbtn.addEventListener('click', () => {
    const form = document.getElementById('form');
    console.log("start button was clicked");

    if (form.style.visibility === 'hidden') {
      form.style.visibility = 'visible';
    } else {
      form.style.visibility = 'hidden';
    }
  });
   
const form = document.querySelector('form');

const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener('click', () => {
  console.log("submit button was clicked");
});

//const form = document.querySelector('form');

const newWizard =  (e) => {
  e.preventDefault();

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
  cardsOnDom(wizards);
  form.reset();
}
console.log("new wizard was created");

form.addEventListener("form-submit", newWizard);

const startApp = () => {
  cardsOnDom(wizards);
//  events(); // ALWAYS LAST
}

startApp();
