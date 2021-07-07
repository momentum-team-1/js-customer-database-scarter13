// items you will need:
//  Name as an h2
// email
// address, two lines
// date of birth
// customer since

// for (let customer of customers) {
//     // console.log (customer)
//     let dude = customers [0]
//     console.log (dude.picture.large)
// }


function renderPageContent () {
    let targetElement = document.querySelector(".profiles")
    for (let customer of customers) {
        let listItemElement = document.createElement("div")
        listItemElement.innerHTML = `<img src=${customer.picture.large}>`
        // console.log (listItemElement.innerHTML)
        // console.log (listItemElement)
        listItemElement.appendChild(createNameElement(customer.name.first + " " + customer.name.last))
        listItemElement.appendChild(createEmailElement(customer.email))
        listItemElement.appendChild(createAddressLineOneElement (customer.location.street))
        listItemElement.appendChild(createAddressLineTwoElement (customer.location.city + ", " + customer.location.state + " " + customer.location.postcode))
        listItemElement.appendChild(createDOBElement(customer.dob))
        listItemElement.appendChild(createCustSinceElement(customer.registered))
        targetElement.appendChild(listItemElement)
    }
}

function createImageElement (picture) {
    return `<img src=$(picture)>`
}

function createNameElement (name) {
    let nameEl = document.createElement("h3")   
    nameEl.innerText = `${name}`
    // console.log (nameEl)
    return nameEl
}
function createEmailElement (email) {
    let emailEl = document.createElement("p")   
    emailEl.innerText = `${email}`
    return emailEl
}

function createAddressLineOneElement (addressOne) {
    let AddOneEl = document.createElement("p")
    AddOneEl.innerText = `${addressOne}`
    return AddOneEl
}

function createAddressLineTwoElement (addressTwo) {
    let AddTwoEl = document.createElement("p")
    AddTwoEl.innerText = `${addressTwo}`
    return AddTwoEl
}

function createDOBElement (dob){
    let dobEl = document.createElement("p")
    dobEl.innerText = `${dob}`
    return dobEl
}

function createCustSinceElement (custSince) {
    let custSinceEl = document.createElement("p")
    custSinceEl.innerText = `${custSince}`
    return custSinceEl

}

renderPageContent ()
