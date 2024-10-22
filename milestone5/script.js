document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Collecting form data
    var objective = document.getElementById('objective').value;
    var name = document.getElementById('name').value;
    var fathername = document.getElementById('fathername').value;
    var religion = document.getElementById('religion').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var maritalStatus = document.getElementById('marital-status').value;
    var cnic = document.getElementById('cnic').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    var reference = document.getElementById('reference').value;

    // Generating the resume output
    var resumeOutput = `
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

    document.getElementById('resumeoutput').innerHTML = resumeOutput;
    document.getElementById('resumeoutput').style.display = 'block';
});

// PDF download functionality
document.getElementById('download-pdf').addEventListener('click', function () {
    var resumeOutput = document.getElementById('resumeoutput');

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
