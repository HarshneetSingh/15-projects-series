// form input  (text )value type is string whether you type some thing or not ( leaving blank will show "")
// secondly initially input  value = false(if you dont type in it )
// else true (if youll type anything) like checking in .......if (value)


// ? The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.


// ******************bringing events*********

const form = document.querySelector('.container-form')
const clearBtn = document.querySelector(".clear-item")
const alertContent = document.querySelector('.alert')
const formInput = document.querySelector(".form-input")
const itemContainer = document.querySelector('.item')
const submitBtn = document.querySelector('.submit');
// ***********clear btn event listener
clearBtn.addEventListener('click', clearItem)
//* ********************adding event listener  ********************

form.addEventListener('submit', addItem)

// *******************variable decleartion*********************
let editFlag = false
let editItem;
let EditId = "";

// *********************function********************


// function for submit button
function addItem(e) {
    e.preventDefault()
    const id = new Date().getTime().toString()
    const value = formInput.value
    if (value && editFlag === false) {
        //* creating element article
        const element = document.createElement("article")
        //* creating attiribute
        const attr = document.createAttribute("data-id")
        // *assigning id in attribute
        attr.value = id
        // * setting attribute in the element
        element.setAttributeNode(attr)
        //*  adding class of styling 
        element.classList.add('item-article')

        element.innerHTML = `<div class="item-name">${value}</div>
                    <div class="item-settings">
                        <button type="button" class="edit"><i class="fa-solid fa-pen-to-square "></i></button>
                     <button type="button" class="delete"><i class="fa-solid fa-trash-can"></i></button>
                    </div>`;

        // adding event listener to button 
        const itemSetting = element.querySelector('.item-settings')
        itemSetting.addEventListener('click', deleteEdit)

        // we can also do it by singly
        // * const deleteBtn = element.querySelector(".delete");
        // * deleteBtn.addEventListener("click", deleteItem);
        // * const editBtn = element.querySelector(".edit");
        // *   editBtn.addEventListener("click", editItem);

        // now appending element to the item container 
        itemContainer.appendChild(element)
        console.log(element)

        displayAlert(`${value}, is added in the cart`, "success")
        clearBtn.classList.add("clear-visible")

        setDefault();
    } else if (value && editFlag === true) {
        editItem.innerHTML = value

        displayAlert(`${value}, value changed`, "success")
        setDefault();
    } else {
        displayAlert("please enter value", "danger");
    }

}


// alert function
function displayAlert(content, status) {

    alertContent.textContent = content;
    alertContent.classList.add(`alert-${status}`)

    // adding set timeout so that it can fade away after 1 sec
    setTimeout(() => {
        alertContent.classList.remove(`alert-${status}`);
        alertContent.textContent = "";
    }
        , 1000)
}

// set default function()

function setDefault() {
    formInput.value = "";
    editFlag = false;
    EditId = "";
    submitBtn.textContent = "submit";

}


// delete item

function deleteEdit(e) {
    const element = e.target;
    const ppOfItem = element.parentElement.parentElement.parentElement;

    // for deleteing item
    if (element.classList.contains("fa-trash-can")) {

        itemContainer.removeChild(ppOfItem);
        // ALERTING 
        displayAlert(`item removed`, "danger")

        // IF ALL ARE DELETED THEN REMOVE CLEAR ITEM
        const ttlArticle = document.querySelectorAll('.item-article')
        if (ttlArticle.length === 0) {
            clearBtn.classList.remove("clear-visible");

            displayAlert(`Cart cleared`, "danger");

        }
        setDefault();

    }
    // edit item
    else {
        // bringing  item container(item-name)
        editItem = element.parentElement.parentElement.previousElementSibling;

        // setting the value now bringing the id of the prwe witten item name 
        formInput.value = editItem.innerHTML;
        editFlag = true;
        EditId = ppOfItem.dataset.id;


        // replacing submit button to edit btn 


        submitBtn.textContent = "Edit";


        // displayAlert(`edited`, "success");

    }
    // removeFromLocalStorage();


}
// clear item function

function clearItem() {

    // making item 0

    itemContainer.innerHTML = ""

    // removing button

    clearBtn.classList.remove("clear-visible")

    // alerting
    displayAlert(`Cart cleared`, "danger");

    // removeFromLocalStorage();
    setDefault()
}



// *local storage 
/*
local storage api
getItem()
setItem()
JSON.Stringify()
JSON.parse()
removeItem()

*/

// addToLocalStorage()

function addToLocalStorage() {
}
// removeFromLocalStorage
function removeFromLocalStorage() {
    console.log("heo")
}
// editLocalStorage

function editLocalStorage() {
    console.log("heo")
}
