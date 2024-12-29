function loadContent(page) {
    // Hide all content
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected content
    const selectedSection = document.getElementById(page);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    } else {
        console.error(`Section with ID "${page}" not found.`);
    }
}
