// Get the picture input element
const pictureInput = document.getElementById('picture') as HTMLInputElement;
if (pictureInput.files && pictureInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function(e: ProgressEvent<FileReader>) {
        const resumeHTML = ''; // Make sure to define resumeHTML
        resumeHTML += `<img src="${e.target?.result}" alt="Profile Picture" style="width:150px;height:auto;">`;
        const resumeOutput = document.getElementById('resumeoutput') as HTMLDivElement;
        resumeOutput.innerHTML = resumeHTML; // Set the inner HTML with image
    };
    reader.readAsDataURL(pictureInput.files[0]);
} else {
    const resumeOutput = document.getElementById('resumeoutput') as HTMLDivElement;
    resumeOutput.innerHTML = resumeHTML; // Set the inner HTML without image
}

// Event listener for PDF download
document.getElementById('download-pdf')?.addEventListener('click', function() {
    const opt: {
        margin: number;
        filename: string;
        image: { type: string; quality: number };
        html2canvas: { scale: number };
        jsPDF: { unit: string; format: string; orientation: string };
    } = {
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
