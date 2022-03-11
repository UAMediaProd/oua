//------ Danger Zone - Firebase Set up ------

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDNcTSvPaxr3tibN451b5Bl0OTF4hTS-Jo",
    databaseURL: "https://lrd-interactions-default-rtdb.asia-southeast1.firebasedatabase.app/",
    authDomain: "lrd-interactions.firebaseapp.com",
    projectId: "lrd-interactions",
    storageBucket: "lrd-interactions.appspot.com",
    messagingSenderId: "432588601822",
    appId: "1:432588601822:web:78c52f8679cd01b1ff454f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// get data from Firebase

// var polls = firebase.database().ref('poll/');


// NOTE: getting the data from Firebase involves taking a snapshot of the data at the current point in time. You can do different things with Firebase where it will constantly update live and all that but we don't need that here. We look at what the current data looks like inside 'poll/' and return that info as a JSON string.

// polls.once('value').then(function (snapshot) {
//     data = snapshot.val();
//     console.log("inital data", data);
// });






//-------Setting Up Variables-----------

// NOTE: as you make changes to the code, make sure you also make changes to comments - so many bones haha!
// NOTE: the array used inside genRandom is fit for purpose for building the interface - something like this would work for creating the data we send to the database (sans-totalVotes; we'll work that out on the server side and might not need/want the total votes like this) 

var list = document.getElementById('questionChoices')
var base, randomized, dragging, draggedOver;

const genRandom = (array) => {
    // NOTE: For clarity, what I believe this is doing is making a copy of the array pre-randomisation (base) and then creates a version which is randomised in order. So later it can compare what the "current" list is compared to the original (base)

    base = array.slice()
    randomized = array.sort(() => Math.random() - 0.5)

    if (randomized.join("") !== base.join("")) {
        renderItems(randomized)
    }
}

const renderItems = (data) => {

    //document.getElementById('isRight').innerText = isRight;

    list.innerText = '';
    data.forEach(item => {
        // var node = document.createElement("button"); NOTE: buttons will work as an element but might be confusing. List Items make sense inside of a list that you re-order imo.
        var node = document.createElement("div");
        node.draggable = true;

        // NOTE: you can only add one class at a time here so you need to add each one individually like: node.classList.add('adx-button'); node.classList.add('primary'); etc.

        //node.className = "adx-button primary";
        //node.classList.add('adx-button primary');
        node.style.textAlign = "center";
        node.classList.add('adx-button');
        node.classList.add('primary');
        node.classList.add('listQuestion');
        node.addEventListener('drag', setDragging);
        node.addEventListener('dragover', setDraggedOver);
        node.addEventListener('drop', compare);
        node.innerText = item;
        list.appendChild(node);
        console.log(list + "List");
    })
}

const compare = (e) => {

    var index1 = randomized.indexOf(dragging);
    var index2 = randomized.indexOf(draggedOver);
    //console.log(index1 + ": dragging");
    //console.log(index2 + ": draggedOver");
    randomized.splice(index1, 1)
    randomized.splice(index2, 0, dragging)
    renderItems(randomized);
};


const setDraggedOver = (e) => {
    e.preventDefault();
    draggedOver = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText.toLowerCase() : parseInt(e.target.innerText)
}

const setDragging = (e) => {
    dragging = Number.isNaN(parseInt(e.target.innerText)) ? e.target.innerText.toLowerCase() : parseInt(e.target.innerText)
}

//The list of 
genRandom([
    'why are customers important to the manager\'s job?',
    'why is innovation important to the manager\'s job?',
    'why are diversity and inclusion important to the manager\'s job?',
    'why are social media tools important to the manager\'s job?',
    'why is sustainability important to the manager\'s job?',
    'why is it important for managers to understand the organisational implications of the covid-19 pandemic on their job?'
])



//-------- Event Listeners -----------
// NOTE: set up an event listener here for the #checker button to do `a thing` when it's clicked. Eventually it's where it will save to the database and all that but for now just hook it up.

// Prepares the Check Button
document.getElementById("checker").addEventListener("click", function (e) {
    funcSubmit(e);
});

//--------Functions-----------

function funcSubmit() {
    // NOTE: turn this into the function for clicking the 'submit' button
    
    if (collateData()) {
        $('#MainModal').modal();
    };

}


function collateData() {
    // NOTE: temp function to read through the answers, build up the JSON object that will be sent to firebase
    let answers = {};

    for (i = 0; i < randomized.length; i++) {
        answers[i] = randomized[i];

    }


    // NOTE: go through the list that the student has built and save them in a list that also saves their order - that will be important to keep around

    let success = fireData(answers); //NOTE: when that's done, call fireData, which will do all the database stuff and send it off - no further logic. Success is a variable that will be true or false 

    // NOTE: we'll have a return statement here. Return uh returns a value after the function has run. So let success = fireData(answers); would then make success == true. We'll use this to check if there was an error in sending the data and if so, we return 'false' and can alert the user. Else, it's true.
    return success;
}

function fireData(data) {
    // NOTE: function to send the data to the database - simple Firebase functions and if it's successful we return true; else we return false

    
    console.log(firebase);
    console.log(data);

firebase.database().ref('poll/').push(data);

    return true;
}