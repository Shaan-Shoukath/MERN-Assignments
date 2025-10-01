// Function to change the background color of boxes
function changeColor(color) {
    const box = document.getElementById(color + 'Box');
    
    // Toggle the color - if already colored, reset to white
    if (box.style.backgroundColor === color || 
        (color === 'yellow' && box.style.backgroundColor === 'rgb(255, 255, 0)') ||
        (color === 'red' && box.style.backgroundColor === 'rgb(255, 0, 0)') ||
        (color === 'blue' && box.style.backgroundColor === 'rgb(0, 0, 255)') ||
        (color === 'green' && box.style.backgroundColor === 'rgb(0, 128, 0)')) {
        
        // Reset to original state
        box.style.backgroundColor = 'white';
        box.style.color = '#333';
    } else {
        // Apply the color
        box.style.backgroundColor = color;
        
        // Adjust text color for better visibility
        if (color === 'yellow') {
            box.style.color = '#333'; // Dark text on yellow background
        } else {
            box.style.color = 'white'; // White text on dark backgrounds
        }
    }
}

// Function to greet the user
function greetUser() {
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    const userName = nameInput.value.trim();
    
    if (userName === '') {
        alert('Please enter your name first!');
        nameInput.focus();
        return;
    }
    
    // Update the greeting message
    greeting.textContent = `Hello, ${userName}!`;
    greeting.style.color = '#4CAF50';
    
    // Add a nice animation effect
    greeting.style.transform = 'scale(1.1)';
    setTimeout(() => {
        greeting.style.transform = 'scale(1)';
    }, 200);
    
    // Clear the input field
    nameInput.value = '';
}

// Allow Enter key to trigger greeting
document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        greetUser();
    }
});

// Add some interactive feedback when typing
document.getElementById('nameInput').addEventListener('input', function() {
    const greeting = document.getElementById('greeting');
    if (this.value.trim() !== '') {
        greeting.style.color = '#FF9800'; // Orange color while typing
    } else {
        greeting.style.color = '#333'; // Reset to default
    }
});