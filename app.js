function displayResume(data) {
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = "\n        <h2>".concat(data.name, "</h2>\n        <p><strong>Email:</strong> ").concat(data.email, "</p>\n        <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n        <p><strong>Education:</strong> ").concat(data.education, "</p>\n        <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n        ").concat(data.experience ? "<p><strong>Experience:</strong> ".concat(data.experience, "</p>") : '', "\n      ");
    }
}
function handleSubmit(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        skills: skills,
        experience: experience
    };
    displayResume(resumeData);
}
var form = document.getElementById('resumeForm');
if (form) {
    form.addEventListener('submit', handleSubmit);
}
