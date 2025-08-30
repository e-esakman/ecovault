// Global state
let currentPoints = 450;
let currentStreak = 5;

// Screen navigation
function showScreen(screenId) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show target screen
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
    }

    // Update navigation
    updateNavigation(screenId);
}

function updateNavigation(activeScreenId) {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active'));

    // Map screen IDs to nav items
    const screenToNavMap = {
        'dashboard-screen': 0,
        'social-screen': 1,
        'upload-screen': 2,
        'organization-screen': 3
    };

    const navIndex = screenToNavMap[activeScreenId];
    if (navIndex !== undefined) {
        navItems[navIndex].classList.add('active');
    }
}

// Points system
function earnPoints(actionType, points) {
    currentPoints += points;
    updatePointsDisplay();
    showToast(`+${points} points for ${actionType}! 🌟`);
}

function updatePointsDisplay() {
    const pointsNumbers = document.querySelectorAll('.points-number');
    pointsNumbers.forEach(element => {
        element.textContent = currentPoints.toLocaleString();
    });

    // Update streak dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        if (index < currentStreak) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

// Upload functionality
function triggerFileUpload() {
    document.getElementById('fileInput').click();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        showToast('📁 Analyzing uploaded image...');
        setTimeout(() => {
            showToast('✅ Plastic bottle detected! +15 points');
            earnPoints('scan', 15);
        }, 2000);
    }
}

// Upload functionality
function triggerFileUpload() {
    document.getElementById('fileInput').click();
}

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        showToast('📁 Analyzing uploaded image...');
        setTimeout(() => {
            showToast('✅ Plastic bottle detected! +15 points');
            earnPoints('scan', 15);
        }, 2000);
    }
}

// Social interactions
function likePost(postId) {
    showToast('❤️ Post liked!');
    
    // Find the like button and increment count
    const postCards = document.querySelectorAll('.post-card');
    if (postCards[postId - 1]) {
        const likeButton = postCards[postId - 1].querySelector('.post-action');
        const countSpan = likeButton.querySelector('.action-count');
        const currentCount = parseInt(countSpan.textContent);
        countSpan.textContent = currentCount + 1;
        
        // Add visual feedback
        likeButton.style.color = '#ef4444';
        setTimeout(() => {
            likeButton.style.color = '#6b7280';
        }, 1000);
    }
}

// Toast notifications
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Initialize app
document.addEventListener('DOMContentLoaded', function () {
    showScreen('welcome-screen');
    updatePointsDisplay();
});// Map funct
ionality
function toggleMapView() {
    const mapContainer = document.getElementById('map-container');
    const organizationList = document.getElementById('organization-list');
    const mapToggle = document.querySelector('.map-toggle');
    
    if (mapContainer.style.display === 'none') {
        // Show map view
        mapContainer.style.display = 'block';
        organizationList.style.display = 'none';
        mapToggle.textContent = '📋';
    } else {
        // Show list view
        mapContainer.style.display = 'none';
        organizationList.style.display = 'flex';
        mapToggle.textContent = '🗺️';
    }
}

// Organization interactions
function joinEvent(eventName) {
    showToast(`✅ Joined ${eventName}! See you there! 🌟`);
}

function getDirections(orgName) {
    showToast(`📍 Opening directions to ${orgName}...`);
}