const FullName = document.querySelector("#Fullname");
const Email = document.querySelector("#Email")

addBtnElement.addEventListener('click', function() {
    const nameValue = nameElement.value;
    const emailValue = emailElement.value;

    if (nameValue !== "" && emailValue !== "") {
        const listElement = document.createElement('li'); 
        // <li></li>
        const textNode = document.createTextNode(`${nameValue} | ${emailValue}`);
        // Name: arun, Email: arun@gmail.com
        listElement.appendChild(textNode);
        // <li>Name: arun, Email: arun@gmail.com</li>
        outputListElement.appendChild(listElement);
        // <ul><li>Name: arun, Email: arun@gmail.com</li><li>Name: arun, Email: arun@gmail.com</li></ul>
        nameElement.value = '';
        emailElement.value = '';
    } else {
        // validation here
    }
})