const tabs = document.querySelectorAll(".offer__img");
//the purpose of this is to put an active state on all images in offer section
const contents = document.querySelectorAll(".offer__details");
//to put an active on all details

tabs.forEach((tab) => { //select all tabs then apply the event listener to each tab
    tab.addEventListener("click", () =>{
        removeActiveTab(); //this is just a variable
        tab.classList.add("active");
        const activeContent = document.querySelector(`#${tab.id}-content`); //select a tab and add the active state
        //'$' is used as its alias  to know tthe string that needs to be imported in JS
        //it is shorthand for the getElementById method
        removeActiveContent();
        activeContent.classList.add("active");
    });
});


function removeActiveTab(){
    tabs.forEach((tab) => {
        tab.classList.remove("active");
    });
}

function removeActiveContent(){
    contents.forEach((content) => {
        content.classList.remove("active");
    });
}