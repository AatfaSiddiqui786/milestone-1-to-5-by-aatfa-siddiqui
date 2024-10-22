// Select the form and output div
const resumeForm = document.getElementById('resume-form');
const resumeOutput = document.getElementById('resumeoutput');

// Event listener for form submission
resumeForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Create a FormData object from the form
    const formData = new FormData(resumeForm);
    resumeOutput.style.display = 'block'; // Show the output div

    // Build resume HTML
    let resumeHTML = `
        <h2>${formData.get('name')}</h2>
        <p><strong>Objective:</strong> ${formData.get('OBJECTIVE')}</p>
        <h3>Personal Information</h3>
        <p><strong>Father Name:</strong> ${formData.get('fathername')}</p>
        <p><strong>Religion:</strong> ${formData.get('religion')}</p>
        <p><strong>Email:</strong> ${formData.get('email')}</p>
        <p><strong>Address:</strong> ${formData.get('address')}</p>
        <p><strong>Phone:</strong> ${formData.get('phone')}</p>
        <p><strong>Date of Birth:</strong> ${formData.get('dob')}</p>
        <p><strong>Marital Status:</strong> ${formData.get('marital-status')}</p>
        <p><strong>CNIC Number:</strong> ${formData.get('cnic')}</p>
        <h3>Education</h3>
        <p>${formData.get('education')}</p>
        <h3>Experience</h3>
        <p>${formData.get('experience')}</p>
        <h3>Skills</h3>
        <p>${formData.get('skills')}</p>
        <h3>Reference</h3>
        <p>${formData.get('reference')}</p>
    `;

    // Handle image upload
    const pictureInput = document.getElementById('picture');
    if (pictureInput.files && pictureInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            resumeHTML += `<img src="${e.target.result}" alt="Profile Picture" style="width:150px;height:auto;">`;
            resumeOutput.innerHTML = resumeHTML; // Set the inner HTML with image
        };
        reader.readAsDataURL(pictureInput.files[0]);
    } else {
        resumeOutput.innerHTML = resumeHTML; // Set the inner HTML without image
    }
});

// Event listener for PDF download
document.getElementById('download-pdf').addEventListener('click', function() {
    const opt = {
        margin: 1,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf()
        .from(resumeOutput)
        .set(opt)
        .save(); // Download the PDF
});
