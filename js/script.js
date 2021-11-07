function ibg(){

    let ibg=document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
            if(ibg[i].querySelector('img')){
                ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
            }
    }
}
    
ibg();

// var a = 0;
// function ibgStyle(){

//     let ibg=document.querySelectorAll(".ibg");
//     for (var i = 0; i < ibg.length; i++) {
//             if(ibg[i].querySelector('img')){
//                 var image = ibg[i].querySelector('img');
//                 var imgContainer = ibg[i];
//                 imgContainer.style.backgroundImage = 'url('+image.style.src+')';
//                 image.css('min-height', 100);
//                 console.log(image.style.minHeight);
//                 // console.log(a)
//                 // a++;
//             }
//     }
// }

// ibgStyle();

function fullscreenblock(){
   var h = window.outerHeight;
   let fullscreen=document.querySelectorAll(".fullscreen");
   //console.log(h);
   for (var i = 0; i < fullscreen.length; i++) {
        if(fullscreen[i].querySelector('fullscreen')){
            document.querySelector('.fullscreen').style.minHeight = h;
        }
    }
   
}

window.onresize = (function(event) {
    fullscreenblock();
    //ibgStyle();
    ibg();
})

fullscreenblock();



//console.clear();


let toDos = []

let toDoBtn = document.querySelector('.to-do__btn');
let toDoInput = document.querySelector('.to-do__input');

let toDoList = document.querySelector('.to-do__list');


toDoBtn.addEventListener('click', function(e) {
    console.clear();
    addToDo(toDoInput.value);
    toDoInput.value = "";
    printToDoList();
    setCheckboxClickEvent();
});
toDoInput.addEventListener('keyup', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
        console.clear();
        addToDo(toDoInput.value);
        toDoInput.value = "";
        printToDoList();
        setCheckboxClickEvent();
    }
});

function addToDo(text){
    let ID = toDos.length;
    const toDo = {
        id: ID,
        text: "",
        isChecked: false
    }
    toDos.push(toDo);
    ID = toDos.length;
    toDos[ID-1].id = ID;
    toDos[ID-1].text = text;
}

function printToDoList(){
    toDoList.innerHTML = "";
    for (let i = 0; i < toDos.length; i++) {

        let id = toDos[i].id;
        let text = toDos[i].text;
        toDoList.innerHTML += createToDoItem(id, text);
        console.log(id + " - " + text);
    }
}

function createToDoItem(id, text){
    return `<div class="to-do__item">
    <span class="to-do__id">${id}</span>
    <span class="to-do__text">${text}</span>
    <div class="to-do__checkbox custom_checkbox">
        <input type="checkbox" value="value-1">
        <span></span>
    </div>
    </div>`
}

function setCheckboxClickEvent(){
    let checkboxList = document.querySelectorAll(".custom_checkbox");
    for (let i = 0; i < checkboxList.length; i++) {
        let element = checkboxList[i];
        element.addEventListener('click', function(e) {
            let input = element.querySelector('input');
            input.toggleAttribute('checked')
        });
    }
}
setCheckboxClickEvent();
