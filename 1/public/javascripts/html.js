// Get references to the elements
const dropdownMenu = document.querySelector('.dropdown-menu');
const link = document.querySelector('.link');
const overlay = document.querySelector('.overlay');

// Function to toggle the dropdown
function toggleDropdown() {
    dropdownMenu.classList.toggle('active');
    overlay.classList.toggle('overlay-active');
}

// Function to close the dropdown when clicking outside
function closeDropdown(event) {
    if (dropdownMenu.classList.contains('active') && !link.contains(event.target)) {
        toggleDropdown();
    }
}

// Add click event listeners
link.addEventListener('click', toggleDropdown);
document.addEventListener('click', closeDropdown);
