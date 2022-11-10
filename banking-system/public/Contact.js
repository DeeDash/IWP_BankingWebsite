document.querySelector(".contact-form").addEventListener("submit", submitForm);
function submitForm(e){
    e.preventDefault();

    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let message = document.querySelector(".message").value;

    saveContactInfo(name, email, message);

    document.querySelector(".contact-form").requestFullscreen();

    sendEmail(name, email, message);
}

//Send email info
function sendEmail(name, email, message){
    Email.send({
        Host: "smtp.gmail.com",
        Username: 'utkarshagrawal947@gmail.com',
        Password: "hwbxlajwkipyogkh",
        To: "utkarsh.agrawal2020@vitstudent.ac.in",
        From: "utkarshagrawal947@gmail.com",
        Subject: `${name} sent you a message`,
        Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`

    })
}
