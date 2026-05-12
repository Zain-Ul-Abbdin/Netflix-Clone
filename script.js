// Netflix Clone JavaScript

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Movie modal functionality
const modal = document.createElement('div');
modal.className = 'movie-modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="modal-body">
            <img src="" alt="Movie Poster" class="modal-poster">
            <div class="modal-info">
                <h2 class="modal-title"></h2>
                <p class="modal-description">This is a sample movie description. In a real Netflix clone, this would contain detailed information about the movie or TV show.</p>
                <div class="modal-buttons">
                    <button class="modal-play-btn"><i class="fas fa-play"></i> Play</button>
                    <button class="modal-add-btn"><i class="fas fa-plus"></i> My List</button>
                    <button class="modal-like-btn"><i class="fas fa-thumbs-up"></i></button>
                </div>
            </div>
        </div>
    </div>
`;
document.body.appendChild(modal);

// Add click event to movie posters
document.querySelectorAll('.row-posters img').forEach(img => {
    img.addEventListener('click', function() {
        const modalPoster = modal.querySelector('.modal-poster');
        const modalTitle = modal.querySelector('.modal-title');
        const altText = this.alt;

        modalPoster.src = this.src;
        modalTitle.textContent = altText;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Hover effects
    img.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08)';
        this.style.zIndex = '10';
    });

    img.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.zIndex = '1';
    });
});

// Close modal
modal.querySelector('.close-modal').addEventListener('click', function() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Language dropdown functionality (basic)
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        alert('Language selection would open here');
    });
});

// Search functionality (basic)
document.querySelector('.fa-search').addEventListener('click', function() {
    alert('Search functionality would open here');
});

// Play button functionality
document.querySelector('.play-btn').addEventListener('click', function() {
    alert('Playing Stranger Things...');
});

// More Info button functionality
document.querySelector('.info-btn').addEventListener('click', function() {
    alert('More info about Stranger Things...');
});

// Sign In button functionality
document.querySelector('.signin-btn').addEventListener('click', function() {
    alert('Sign In page would open here');
});

// Modal play button
modal.addEventListener('click', function(e) {
    if (e.target.classList.contains('modal-play-btn')) {
        alert('Playing movie...');
    }
    if (e.target.classList.contains('modal-add-btn')) {
        alert('Added to My List!');
    }
    if (e.target.classList.contains('modal-like-btn')) {
        alert('Liked!');
    }
});