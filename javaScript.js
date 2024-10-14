// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = this.getAttribute('href'); // Get the target section ID
        const targetElement = document.querySelector(targetId); // Select the target element

        if (targetElement) { // Check if the target element exists
            targetElement.scrollIntoView({
                behavior: 'smooth', // Smooth scrolling effect
                block: 'start' // Align to the top of the viewport
            });
        }
    });
});
