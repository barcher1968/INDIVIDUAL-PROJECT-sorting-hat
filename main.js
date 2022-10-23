console.log("Sorting Hat");

const wizards = [
  {
    id: 1,
    name: "Harry Potter",
    house: "Gryffindor"
  },
  {
    id: 2,
    name: "Peter Pettigrew",
    house: "Gryffindor"
  },
  {
    id: 3,
    name: "Hermione Granger",
    house: "Gryffindor"
  },
  {
    id: 4,
    name: "Ron Weasley",
    house: "Gryffindor"
  },
  {
    id: 5,
    name: "Draco Malfoy",
    house: "Slytherin"
  },
  {
    id: 6,
    name: "Luna Lovegood",
    house: "Ravenclaw"
  },
  {
    id: 7,
    name: "Cedric Diggory",
    house: "Hufflepuff"
  },
  {
    id: 8,
    name: "Ernie Macmillan",
    house: "Hufflepuff"
  },
  {
    id: 9,
    name: "Severus Snape",
    house: "Slytherin"
  }

];

// Render to DOM utility function
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//build the cards for the DOM
for (let i=0; i < wizards.length; i++){
  const app = document.querySelector("#app")
  app.innerHTML +=
  `<div class = "card">
  <div class="card-header">
    ${wizards[i].name}
  </div>
  <div class="card-body">
    ${wizards[i].house}
  </div>
  <div class="card-footer">
    <button class="btn btn-danger" id="delete--${wizards.id}">Expel</button>
  </div>
  </div>`
}

//Start sorting button needs to reveal the form.

//   //reveals the form element after the start sorting button is clicked
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
   // const form = document.getElementById ('form');
  //   if (form.style.display === 'block'){
  //     form.style.display = 'block';
  //   } else {
  //     form.style.display = 'none'
  //   }

const submitButton = document.querySelector("#submitButton");
submitButton.addEventListener('click', () => {
  console.log("submit button was clicked");
});

const form = document.querySelector('form');

const newWizard =  (e) => {
  e.preventDefault();

  const houses = [
    "Gryffindor", 
    "Slytherin", 
    "HufflePuff", 
    "Ravenclaw"
  ];

  const randomHouse = (houses) => {
    houses[Math.floor(Math.random() * houses.length)];
    return randomHouse; 
  }
  // randomHouse();
  // console.log(randomHouse);

  const newWizardObj = {
    id: wizards.length +1, 
    name: document.querySelector('#name').value, 
    house: randomHouse
  }
  wizards.push(newWizardObj);
  cardsOnDom(wizards);
  console.log("new wizard was created");
  form.reset();
}
form.addEventListener('submit', newWizard);
