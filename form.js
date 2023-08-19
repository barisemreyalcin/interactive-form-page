let emailCollector = document.getElementById("email-collector");

emailCollector.addEventListener("submit", event => {
    event.preventDefault();

    let ourFormData = new FormData(event.target);
    let userFirstName = ourFormData.get("firstName");
    let userEmailAddress = ourFormData.get("emailAddress");

    let updatedHtmlContent = `
    <h2>Congratulations, ${userFirstName}</h2>
    <p>You are on your way to becoming a BBQ Master!</p>
    <p class="small-text">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
    `

    let updatedMainContent = document.getElementById("main-content");
    updatedMainContent.innerHTML = updatedHtmlContent;
})