// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== '') {
            e.preventDefault();
            
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
            
            // Update active link
            document.querySelectorAll('.nav-link').forEach(navLink => {
                navLink.classList.remove('active');
            });
            this.classList.add('active');
        }
    });
});

// Update active navigation link based on scroll position
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Create stars animation for hero section
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starsCount = 100;
    
    for (let i = 0; i < starsCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 2;
        
        // Random opacity
        const opacity = Math.random();
        
        // Random animation delay
        const animationDelay = Math.random() * 5;
        
        star.style.cssText = `
            position: absolute;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: white;
            border-radius: 50%;
            opacity: ${opacity};
            animation: twinkle 5s infinite ${animationDelay}s;
        `;
        
        starsContainer.appendChild(star);
    }
}

// Add CSS animation for stars
const style = document.createElement('style');
style.textContent = `
    @keyframes twinkle {
        0% { opacity: 0; }
        50% { opacity: 1; }
        100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

document.querySelectorAll('.btn-download-cv').forEach(button => {
    button.addEventListener('click', function() {
       alert('CV Downloaded'); 
    })
})

// Initialize typing animation
document.addEventListener('DOMContentLoaded', function() {
    // Add this to your existing DOMContentLoaded event or create a new one
    const options = {
        strings: ['A Product Thinker', 'A Project Manager', 'A Business Enthusiast'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    };
    
    const typed = new Typed('#typed-text', options);

    // Blog functionality
    const blogPosts = [
        {
            id: 1,
            title: "The Future of Product Management in AI Era",
            excerpt: "Exploring how artificial intelligence is reshaping the product management landscape...",
            date: "November 15, 2024",
            author: "Nurrizkyta Aulia",
            category: "Product Management",
            content: `<p>In the rapidly evolving landscape of technology, product management is undergoing a significant transformation due to the integration of artificial intelligence. This shift is not merely about incorporating AI features into products but fundamentally rethinking how products are conceptualized, developed, and delivered to users.</p>
                    <p>AI is enabling product managers to gain deeper insights into user behavior, predict market trends with greater accuracy, and personalize user experiences at scale. The traditional product development cycle is becoming more dynamic, with continuous learning and adaptation based on real-time data.</p>
                    <p>However, this transformation also brings challenges. Product managers now need to develop a stronger understanding of AI capabilities and limitations, ethical considerations in AI implementation, and how to effectively collaborate with data scientists and AI engineers.</p>
                    <p>As we move forward, successful product managers will be those who can balance technical knowledge with human-centered design principles, ensuring that AI serves to enhance rather than replace the human experience.</p>`
        },
        {
            id: 2,
            title: "Effective Project Management in Remote Teams",
            excerpt: "Strategies for maintaining productivity and team cohesion in distributed work environments...",
            date: "October 28, 2024",
            author: "Nurrizkyta Aulia",
            category: "Project Management",
            content: `<p>The shift to remote work has fundamentally changed how project teams operate. While offering flexibility and access to global talent, remote project management presents unique challenges in communication, collaboration, and team building.</p>
                    <p>Successful remote project management requires a deliberate approach to creating structure and maintaining connection. Clear communication protocols, well-defined workflows, and regular check-ins are essential. Tools like Asana, Trello, and Slack have become indispensable, but it's how we use these tools that matters most.</p>
                    <p>In my experience leading distributed teams, I've found that establishing a rhythm of synchronous and asynchronous communication helps balance efficiency with team cohesion. Daily stand-ups provide accountability, while dedicated deep work time allows for focused productivity.</p>
                    <p>Perhaps most importantly, remote project management requires a shift from monitoring presence to measuring outcomes. By setting clear expectations and focusing on deliverables rather than hours worked, we can build a culture of trust and autonomy that drives results.</p>`
        },
        {
            id: 3,
            title: "User-Centered Design: Beyond the Buzzword",
            excerpt: "How to truly implement user-centered principles in your design process...",
            date: "September 10, 2024",
            author: "Nurrizkyta Aulia",
            category: "UX Design",
            content: `<p>"User-centered design" has become such a common phrase in product development that it risks losing its meaning. Yet when properly implemented, it remains the most powerful approach to creating products that truly resonate with users.</p>
                    <p>True user-centered design goes beyond surface-level user research. It requires developing genuine empathy for users, understanding their contexts, motivations, and pain points. This means getting out of the office and observing users in their natural environments, conducting in-depth interviews, and testing prototypes with real users throughout the development process.</p>
                    <p>One often overlooked aspect of user-centered design is the importance of cross-functional collaboration. Designers, developers, product managers, and business stakeholders must all share a commitment to user needs. This alignment ensures that user-centered principles aren't compromised during implementation.</p>
                    <p>In my practice, I've found that creating living user personas and journey maps that evolve with new insights helps keep the user at the center of all decisions. When combined with regular usability testing and a willingness to pivot based on user feedback, this approach leads to products that truly serve user needs while achieving business goals.</p>`
        }
    ];

    // Function to display blog posts
    function displayBlogPosts() {
        const blogContainer = document.querySelector('#blog .blog-container');
        if (!blogContainer) return;
        
        blogContainer.innerHTML = '';
        
        blogPosts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.classList.add('col-lg-4', 'col-md-6', 'mb-4');
            postElement.innerHTML = `
                <div class="blog-card" data-aos="fade-up">
                    <div class="blog-card-body">
                        <div class="blog-category">${post.category}</div>
                        <h3 class="blog-title">${post.title}</h3>
                        <p class="blog-date">${post.date}</p>
                        <p class="blog-excerpt">${post.excerpt}</p>
                        <button class="btn btn-outline-light read-more" data-post-id="${post.id}">Read More</button>
                    </div>
                </div>
            `;
            blogContainer.appendChild(postElement);
        });
        
        // Add event listeners to Read More buttons
        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', function() {
                const postId = parseInt(this.getAttribute('data-post-id'));
                const post = blogPosts.find(p => p.id === postId);
                
                if (post) {
                    const modalTitle = document.querySelector('#blogPostModal .modal-title');
                    const modalBody = document.querySelector('#blogPostModal .modal-body');
                    
                    modalTitle.textContent = post.title;
                    modalBody.innerHTML = `
                        <div class="blog-post-header">
                            <p class="blog-post-meta">
                                <span class="blog-post-date">${post.date}</span> | 
                                <span class="blog-post-category">${post.category}</span>
                            </p>
                        </div>
                        <div class="blog-post-content">
                            ${post.content}
                        </div>
                    `;
                    
                    // Show the modal
                    const blogModal = new bootstrap.Modal(document.getElementById('blogPostModal'));
                    blogModal.show();
                }
            });
        });
    }

    // Initialize blog posts when page loads
    displayBlogPosts();
});

// Initialize stars on page load
document.addEventListener('DOMContentLoaded', function() {
    createStars();
});

// Project category navigation
document.addEventListener('DOMContentLoaded', function() {
    // Show projects when category is clicked
    document.querySelectorAll('.category-btn').forEach(function(button) {
        button.addEventListener('click', function() {
            const category = this.closest('.category-card').getAttribute('data-category');
            console.log('Category clicked:', category);
            
            // Show project cards container
            document.querySelector('.project-cards').style.display = 'block';
            
            // Hide all category projects first
            document.querySelectorAll('.category-projects').forEach(function(project) {
                project.style.display = 'none';
            });
            
            // Show the selected category projects
            document.getElementById(category + '-projects').style.display = 'block';
            
            // Hide categories section
            document.querySelector('.row.g-4.mb-5.justify-content-center').style.display = 'none';
        });
    });
    
    // Back to categories
    document.querySelector('.back-to-categories').addEventListener('click', function() {
        // Hide project cards
        document.querySelector('.project-cards').style.display = 'none';
        
        // Show categories
        document.querySelector('.row.g-4.mb-5.justify-content-center').style.display = 'flex';
    });
});


// Ensure modals work properly on all devices
document.addEventListener('DOMContentLoaded', function() {
    // Fix for iOS devices
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.addEventListener('shown.bs.modal', function() {
            document.body.classList.add('modal-open');
        });
        
        modal.addEventListener('hidden.bs.modal', function() {
            document.body.classList.remove('modal-open');
        });
    });
    
    // Ensure buttons trigger modals properly
    const modalButtons = document.querySelectorAll('[data-bs-toggle="modal"]');
    modalButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const targetModal = this.getAttribute('data-bs-target');
            if (targetModal) {
                e.preventDefault();
                const modal = new bootstrap.Modal(document.querySelector(targetModal));
                modal.show();
            }
        });
    });
});