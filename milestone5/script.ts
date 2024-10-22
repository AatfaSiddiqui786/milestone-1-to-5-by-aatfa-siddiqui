

document.getElementById('resume-form')!.addEventListener('submit', function (event) {
    event.preventDefault();

    // Collecting form data
    const objective = (document.getElementById('objective') as HTMLInputElement).value;
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const religion = (document.getElementById('religion') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const address = (document.getElementById('address') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const dob = (document.getElementById('dob') as HTMLInputElement).value;
    const maritalStatus = (document.getElementById('marital-status') as HTMLInputElement).value;
    const cnic = (document.getElementById('cnic') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const reference = (document.getElementById('reference') as HTMLInputElement).value;

    // Generating the resume output
    const resumeOutput = `
        <div class="resume-header">
            <h2>${name}</h2>
            <p>${address} | ${phone} | ${email}</p>
            <p>Date of Birth: ${dob} | CNIC: ${cnic} | Marital Status: ${maritalStatus}</p>
        </div>
        <div class="resume-section">
            <h3>Objective</h3>
            <p>${objective}</p>
        </div>
        <div class="resume-section">
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <div class="resume-section">
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>
        <div class="resume-section">
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
        <div class="resume-section">
            <h3>Reference</h3>
            <p>${reference}</p>
        </div>
    `;

    document.getElementById('resumeoutput')!.innerHTML = resumeOutput;
    document.getElementById('resumeoutput')!.style.display = 'block';
});

// PDF download functionality
document.getElementById('download-pdf')!.addEventListener('click', function () {
    const resumeOutput = document.getElementById('resumeoutput');

    if (resumeOutput && resumeOutput.innerHTML.trim() !== "") {
        html2pdf()
            .from(resumeOutput)
            .save('resume.pdf')
            .then(() => {
                console.log("PDF generated successfully.");
            })
            .catch(err => {
                console.error("Error generating PDF:", err);
            });
    } else {
        console.error('Resume output not found or is empty');
    }
});
