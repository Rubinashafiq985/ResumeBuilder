// Grabbing the DOM elements
const nameInput = document.getElementById("name") as HTMLInputElement;
const contactInput = document.getElementById("contact") as HTMLInputElement;
const degreeInput = document.getElementById("degree") as HTMLInputElement;
const institutionInput = document.getElementById("institution") as HTMLInputElement;
const skillsInput = document.getElementById("skills") as HTMLInputElement;
const experienceInput = document.getElementById("experience") as HTMLInputElement;
const resumeOutput = document.getElementById("resume-output") as HTMLElement;
const viewResumeButton = document.getElementById("view-resume") as HTMLButtonElement;

viewResumeButton.addEventListener("click", () => {
    const name = nameInput.value;
    const contact = contactInput.value;
    const degree = degreeInput.value;
    const institution = institutionInput.value;
    const skills = skillsInput.value;
    const experience = experienceInput.value;

    // Generating Resume Output
    resumeOutput.innerHTML = `
        <h2>${name}</h2>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Degree:</strong> ${degree} at ${institution}</p>
        <p><strong>Skills:</strong> ${skills}</p>
        <p><strong>Experience:</strong> ${experience}</p>
    `;
    
    // Display the resume output
    resumeOutput.style.display = "block";
});