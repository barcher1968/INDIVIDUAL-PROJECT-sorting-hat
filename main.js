console.log("Sorting Hat");
//starting array of objects
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
//array of houses to be used in the function to randomize the houses later
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

//put the initial cards on the DOM for Wizards

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

//puts the initial cards on the dom for exwizards (because Tyler told me all of the Harry Potter stuff, this is a ode to him)
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

//reveals the form element after the start sorting button is clicked
//in this line I set startbtn equal to the id startButton in the html using the getElementById() method.
  const startbtn = document.getElementById('startButton');
//event listener for the start sorting button 
  startbtn.addEventListener('click', () => {
    const form = document.getElementById('form');
    console.log("start button was clicked");
//I used the toggle method for revealing the form.
    form.classList.toggle("hidden") 
  });
   
const form = document.querySelector('form');
//this is the query selector and event listener for the sort button
const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener('click', (e) => {
  console.log("submit button was clicked");
  newWizard(e);
});

//this is the new wizard function
const newWizard =  (e) => {
  e.preventDefault();
console.log(e);
// newWizardObj creates the new wizard to push on to the array of wizards. 
  const newWizardObj = {
    id: wizards.length +1, 
    name: document.querySelector("#name").value,
    //this is the line of code that randomizes the house assigned to the new wizards 
    house: houses[Math.floor(Math.random() * houses.length)]
  }
  //this is where we push the new wizard to the array and rerender the cards on the dom
  wizards.push(newWizardObj);
  wizardsCardsOnDom(wizards);
  form.reset();
}
form.addEventListener("form-submit", newWizard);

//this is the query selector and event listener for the expel button o n each of the cards in the wizards array.
document.querySelector("#cards").addEventListener('click', (e) => {

  if (e.target.id.includes("expel")) {
    const [, id] = e.target.id.split("--");
    //this was me trying to understand how to refer to and target the id to push to the exwizards array.
    console.log(e.target);
    console.log(e.target.id);
    console.log(id);

    
    const index = wizards.findIndex(e => e.id === Number(id));
//this is the splice function that returns a new array I called new ex wizard
    const newexWizard = wizards.splice(index, 1);
    //this is where I push the newexwizard index 0 created by using the .splice method to the exwizard array
    exWizards.push(newexWizard[0]);
    // this puts the cards back on the dom
    wizardsCardsOnDom(wizards);
    exWizardsCardsOnDom(exWizards);
  }
});
//this is the start app function that calls the cards on dom functions at the top
const startApp = () => {
  wizardsCardsOnDom(wizards);
  exWizardsCardsOnDom(exWizards);
  //events(); // ALWAYS LAST
}
//this is where I call the start app function
startApp();
