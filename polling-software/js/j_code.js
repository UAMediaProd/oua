//-------Setting Up Variables-----------

// An array containing a list of objects which each contain the number of the bone, the name of the bone, it's correct section and it's highlight color

var arrayQuestions = [
    {
        "poll_question": "Why are customers important to the manager’s job?",
        "question_importance": 0,
        "question_totalvotes": 0
    },
    {
        "poll_question": "Why is innovation important to the manager’s job?",
        "question_importance": 0,
        "question_totalvotes": 0
    },
    {
        "poll_question": "Why are diversity and inclusion important to the manager’s job?",
        "question_importance": 0,
        "question_totalvotes": 0
    },
    {
        "poll_question": "Why are social media tools important to the manager’s job?",
        "question_importance": 0,
        "question_totalvotes": 0
    },
    {
        "poll_question": "Why is sustainability important to the manager’s job?",
        "question_importance": 0,
        "question_totalvotes": 0
    },
    {
        "poll_question": "Why is it important for managers to understand the organisational implications of the COVID-19 pandemic on their job?",
        "question_importance": 0,
        "question_totalvotes": 0
    }
]

//var boolIsColoring = false; // If the user has selected a colour, this variable is True. It will only be False before anyone has selected a colour, and after the 'Check' button has been clicked.
//var RGBcurrentColor = "NoColor"; // A variable to store the RGB value of the currently selected bone's colour. The default is "NoColor", which, funnily enough, means no color is selected.

//var numCorrect = 0;

//-------Setting Up the Initial Page-----------

// Sets up all the selectable bone options as clickable objects. This is an example of the HTML link that is generated:
//<a href="#!" onClick="funcSelectBoneButton(this, '1', 'rgb(255,255,255)')">boneName</a>

//Sets up the choice buttons (6 questions) so they are clickable and draggable.

for (i = 0; i < arrayQuestions.length; i++) {
    var choiceElements = document.getElementById("questionChoices");
    console.log("hi");
    choiceElements.innerHTML += "<button class='adx-button primary' onClick=\"funcSelectChoice()\">" + arrayQuestions[i].poll_question + "</button>";

    
    
    //element_1.innerHTML += "<button onClick=\"funcSelectBoneButton(event, this, '" + arrayBoneParts[i].color + "', '" + arrayBoneParts[i].color_class + "')\" class='adx-button primary " + arrayBoneParts[i].color_class + "'>" + arrayBoneParts[i].bone_number + ") " + arrayBoneParts[i].bone + "</button>";

}








// for (i = 0; i < arrayBoneParts.length; i++) {
//     var element_1 = document.getElementById("boneList1");
//     var element_2 = document.getElementById("boneList2");
//     var borderColour;

//     if (i <= 9) {
//         element_1.innerHTML += "<button onClick=\"funcSelectBoneButton(event, this, '" + arrayBoneParts[i].color + "', '" + arrayBoneParts[i].color_class + "')\" class='adx-button primary " + arrayBoneParts[i].color_class + "'>" + arrayBoneParts[i].bone_number + ") " + arrayBoneParts[i].bone + "</button>";
//     } else {
//         element_2.innerHTML += "<button onClick=\"funcSelectBoneButton(event, this, '" + arrayBoneParts[i].color + "', '" + arrayBoneParts[i].color_class + "')\" class='adx-button primary " + arrayBoneParts[i].color_class + "'>" + arrayBoneParts[i].bone_number + ") " + arrayBoneParts[i].bone + "</button>";
//     }
// }

// // For each object in arraySectionIDs array, add a class that makes it transparent.
// for (let i = 0; i < arraySectionIDs.length; i++) {
//     var element = document.getElementById(arraySectionIDs[i]);
//     element.classList.add("invisibleClass");

//     // We also set up an EventListener on click, run the function on the selected item
//     element.addEventListener('click', function (e) {
//         if (boolIsColoring && !e.target.parentElement.classList.contains("correctClass")) {
//             funcRevealFill(e, i);
//         }
//     });
// }

// // Prepares the Check Button
// document.getElementById("checker").addEventListener("click", function (e) {
//     funcCheckProgress(e);
// });

// // Prepares the Function that happens after you click the Check button, or after you click anywhere off the buttons.
// document.getElementById("nothing").addEventListener("click", function (e) {
//     funcUnClick(e);
// });

//--------Functions-----------


function funcSelectBoneButton(event) {
    console.log("oh, I see...");
}

/* // Function to write a function funcSelectBoneButton() which enables colouring and does something
function funcSelectBoneButton(event, element, color, color_class) {
    funcUnClick();
    console.log("Click on a colored button");
    RGBcurrentColor = color;
    element.classList.add("selected");

    // set colouring to True, because we have now selected a bone option
    boolIsColoring = true;

    // Because of complexities with the MouseOver event, we do something different... Everytime we select a bone option, we set ALL bone part sections on the image to that colour. However, since they are all invisible, the only one that appears is the one that's being hovered over; thus seeming to change only that colour when you hover over it!
    for (var i = 0; i < arraySectionIDs.length; i++) {
        var element = document.getElementById(arraySectionIDs[i]);
        element.classList.add("activeClass");
        if (boolIsColoring && !element.classList.contains("selectedClass") && !element.classList.contains("correctClass")) {
            element.style = "fill: " + RGBcurrentColor;
        }
    }
    event.stopPropagation();
}

//When the user clicks off of a button, or clicks the Check button, we reset the interactive so nothing happens.
function funcUnClick() {
    console.log("unclick");
    for (var i = 0; i < arrayBoneParts.length; i++) {
        var element = document.getElementsByClassName(arrayBoneParts[i].color_class);
        if (element[0].innerHTML.substring(element[0].innerHTML.length-4, element[0].innerHTML.length) !=  "</i>") {
            element[0].classList.remove("selected");
        }
    };
    for (var i = 0; i < arraySectionIDs.length; i++) {
        var element = document.getElementById(arraySectionIDs[i]);
        element.classList.remove("activeClass");
    }
    boolIsColoring = false;
    RGBcurrentColor = "NoColor";
}

// Function that reveals the selected bone segment on the image and adds the associated classes. * Note - The segments are already coloured, we just need to reveal them.
function funcRevealFill(e, index) {
    console.log("Clicks on a bone");
    var element = document.getElementById(arraySectionIDs[index]);
    var selectedItems = document.getElementsByClassName("selectedClass");

    // Applies the appropriate classes to each bone segment as it is clicked on - or removes it if you're clicking it again and is the same colour
    //NOTE - Trying to replace a coloured bone segment with a different selected colour currently DOES NOT WORK!!
    if (element.classList.contains("selectedClass") & element.style.fill == RGBcurrentColor) {
        element.classList.remove("selectedClass");
    } else {
        for (var i = 0; i < selectedItems.length; i++) {
            if (selectedItems[i].style.fill == RGBcurrentColor) {
                selectedItems[i].classList.remove("selectedClass");
            }
        }
        element.classList.add("selectedClass");
    }

    e.stopPropagation();
}

// Function to check the progress of what bone segments you've gotten correct and what you have gotten wrong. This function will also reset any of the incorrect bones segments, but leave the correct ones as they are. It also adds a 'Correct' class to the segment, indicating that it can't be reset or even changed to a different colour.
function funcCheckProgress(e) {
    console.log("Clicks on the check button");

    //This line is essentially the same as GetElementID, but works slightly differently. <bit hazy on the details>
    var colouredInSegments = document.querySelectorAll(".selectedClass");

    //We go through each segment that has been coloured in (no need to check the ones that have not been)
    for (var i = 0; i < colouredInSegments.length; i++) {

        // Get the id of what has been coloured
        var clickedID = colouredInSegments[i].id;

        //If it ISN'T a grey section (ie, not a valid part), then we check to see if it is a correct element
        if (clickedID != "section_21" && clickedID != "section_22" && clickedID != "section_23" && clickedID != "section_24" && clickedID != "section_25" && clickedID != "section_26") {

            // Looks inside of arrayBoneParts, finds the `correct` value of the selected bone
            var test = (arrayBoneParts.find(element => element.correct == clickedID));

            // If it is a correct selection, we assign the 'CorrectClass' to it, meaning it can't ever be unselected
            if (colouredInSegments[i].style.fill == test.color) {
                colouredInSegments[i].classList.add("correctClass");
                var correctButton = document.getElementsByClassName("adx-button primary " + test.color_class)[0];
                correctButton.disabled = true;

                if (correctButton.innerHTML.substring(correctButton.innerHTML.length-4, correctButton.innerHTML.length) !=  "</i>") {
                    correctButton.innerHTML += ": <i class=\"fas fa-check-circle\"></i>";
                    correctButton.style.borderColor = "green";
                    correctButton.style.borderWidth = "5px";
                    numCorrect++;
                }
            } else {
                colouredInSegments[i].classList.remove("selectedClass");
            }
        }

    }
    //numCorrect = 20;
    var ModalBodyText;
    if (numCorrect == 0) {
         ModalBodyText = "If you didn't click this button buy mistake, perhaps you'd like to revisit the material?";
    } else if (numCorrect >=1 & numCorrect <=10){
        ModalBodyText = "A good start, but there are many more to go. If you need to revist the material, feel free!";
    } else if (numCorrect >=11 & numCorrect <=15) {
        ModalBodyText = "Very nice work! Remember, this is a formative activity, so you're more than welcome to revist the material if you need some guidance.";
    } else if (numCorrect >=16 & numCorrect <=19) {
         ModalBodyText = "You've obviously got a great grasp of this material. Keep going, you got this!";
    } else if (numCorrect == 20) {
        ModalBodyText = "Fantastic! You have got all of them right. There's nothing stopping you from revisting this activity at any time should you need a refresher. Click the 'Reset' button below to have another go.";
        document.getElementById('modalButton').innerHTML = "Reset";
        document.getElementById("modalButton").addEventListener("click", function () {
            location.reload();
        });
    }
    document.getElementById('MainTitle').innerHTML = "Your score: " + numCorrect;
    document.getElementById('MainBody').innerHTML = "<p>" + ModalBodyText + "</p>";
    $('#MainModal').modal();

    e.stopPropagation();


}

 */