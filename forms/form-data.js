const formElem = document.querySelector("form");


// get the form data using formData class
formElem.addEventListener("submit", (event) => {

    event.preventDefault(); // stops the form from default behaviour like html5 form validation

    const formData = new formData(formElem);
    console.log(formData.get("field1"));
    console.log(formData.get("field2"));
});

// formdata handler version for data retrieval
formElem.addEventListener("formdata", (e) => {

    const formData = e.formData;

    // modifies the form data
    formData.set("field1", formData.get("field1").toLowerCase());
    formData.set("field2", formData.get("field2").toUpperCase());
});