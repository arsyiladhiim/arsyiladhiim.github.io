

        // Typing animation
        const phrases = ['Learn Technology', 'Creating', 'Innovating'];
        let currentPhrase = 0;
        let currentChar = 0;
        let isDeleting = false;
        
        function typeWriter() {
            const typingElement = document.getElementById('typing-text');
            if (!typingElement) return;
            
            const current = phrases[currentPhrase];
            
            if (isDeleting) {
                typingElement.textContent = current.substring(0, currentChar - 1);
                currentChar--;
            } else {
                typingElement.textContent = current.substring(0, currentChar + 1);
                currentChar++;
            }
            
            let typeSpeed = isDeleting ? 100 : 150;
            
            if (!isDeleting && currentChar === current.length) {
                typeSpeed = 2000;
                isDeleting = true;
            } else if (isDeleting && currentChar === 0) {
                isDeleting = false;
                currentPhrase = (currentPhrase + 1) % phrases.length;
                typeSpeed = 500;
            }
            
            setTimeout(typeWriter, typeSpeed);
        }
        
        // Start typing animation
        typeWriter();
        
        // Page navigation
        let currentPage = 'home';
        
        function showPage(pageId) {
            const currentPageElement = document.getElementById(currentPage);
            const newPageElement = document.getElementById(pageId);
            
            if (currentPage === pageId) return;
            
            // Add exit animation
            currentPageElement.classList.add('slide-exit-active');
            
            setTimeout(() => {
                currentPageElement.classList.remove('active', 'slide-exit-active');
                newPageElement.classList.add('active', 'slide-enter');
                
                setTimeout(() => {
                    newPageElement.classList.add('slide-enter-active');
                    newPageElement.classList.remove('slide-enter');
                }, 10);
                
                currentPage = pageId;
            }, 250);
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-gray-500', 'text-gray-400');
                link.classList.add('text-gray-300');
            });
            
            // Set active link
            const activeLinks = document.querySelectorAll(`.${pageId}-link`);
            activeLinks.forEach(link => {
                link.classList.remove('text-gray-300');
                link.classList.add('text-gray-500');
            });
        }
        
        // Mobile navigation
        function toggleMobileNav() {
            const mobileNav = document.querySelector('.mobile-nav');
            const hamburger = document.querySelector('.hamburger');
            
            mobileNav.classList.toggle('active');
            hamburger.classList.toggle('active');
        }
        
        // Contact form handling
        function handleSubmit(event) {
            event.preventDefault();
            
            const form = event.target;
            const formData = new FormData(form);
            const name = formData.get('name');
            
            // Simulate form submission
            const submitButton = form.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = 'Sending...';
            submitButton.disabled = true;
            
            setTimeout(() => {
                alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`);
                form.reset();
                submitButton.textContent = originalText;
                submitButton.disabled = false;
            }, 2000);
        }
        
        // Close mobile nav when clicking outside
        document.addEventListener('click', function(event) {
            const mobileNav = document.querySelector('.mobile-nav');
            const hamburger = document.querySelector('.hamburger');
            
            if (mobileNav.classList.contains('active') && 
                !mobileNav.contains(event.target) && 
                !hamburger.contains(event.target)) {
                toggleMobileNav();
            }
        });
        
        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 768) {
                const mobileNav = document.querySelector('.mobile-nav');
                const hamburger = document.querySelector('.hamburger');
                
                mobileNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
        
        // Project Modal Functions
        const projectData = {
            chatbotwhatsapp: {
                title: "Chatbot-AI WhatsApp",
                subtitle: "NodeJS CLI Application • 2023",
                description: "An AI WhatsApp chatbot is a virtual assistant integrated with WhatsApp that uses artificial intelligence to interact with users automatically. It can understand questions, provide instant responses, and perform tasks without human intervention.",
                technologies: ["React Native", "Firebase", "Biometric API", "Redux", "Node.js", "PostgreSQL"],
                features: [
                    "24/7 Automated Replies",
                    "Natural Language Understanding (NLU)",
                    "Multi-Language Support",
                    "Personalized Responses",
                    "Order & Booking Management",
                    "Analytics & Reporting"
                ],
                challenges: "Handling diverse customer queries in multiple languages while ensuring fast response times, seamless CRM integration, and maintaining user trust in data privacy.",
                outcome: "Successfully automated 70% of customer inquiries, reduced average response time from hours to seconds, achieved 4.6/5 user satisfaction rating, and increased lead conversions by 35%."
            },
            systempraktikum: {
                title: "System Praktikum Laboratorium",
                subtitle: "Full-Stack Web Application • 2018",
                description: "A practicum submission system is a web-based platform designed for students to submit their practicum (lab/assignment) reports and for lecturers to manage, review, and grade them.",
                technologies: ["CodeIgnitier", "Bootstrap CSS", "MySQL", "Javascript"],
                features: [
                    "Studen Portal - Upload reports, track deadlines, view submission status",
                    "Lecturer Dashboard - Download, review, grade",
                    "Secure Storage - All submissions stored in a centralized database",
                    "Role-based Access - Different permissions for students, lecturers, and admins",
                    "Report History - Archive of past practicum submissions for reference"
                ],
                challenges: "Preventing plagiarism and duplicate submissions - Integrating grading and feedback seamlessly into the system",
                outcome: "Streamlined submission process with 100% digital workflow (no paper needed)."
            },
            analytics: {
                title: "Analytics Dashboard",
                subtitle: "Data Visualization Platform • 2023",
                description: "A real-time analytics dashboard providing interactive charts, reports, and insights for business intelligence and data-driven decision making.",
                technologies: ["Vue.js", "D3.js", "Chart.js", "Python", "FastAPI", "Redis", "WebSocket"],
                features: [
                    "Real-time data visualization",
                    "Interactive charts and graphs",
                    "Custom report generation",
                    "Data filtering and segmentation",
                    "Export functionality (PDF, Excel)",
                    "User role-based access control",
                    "Automated alert system",
                    "Mobile-responsive design"
                ],
                challenges: "Processing large datasets in real-time while maintaining smooth user experience and creating intuitive data visualizations.",
                outcome: "Reduced report generation time by 80% and improved decision-making speed for 200+ business users."
            },
            gaming: {
                title: "Gaming Platform",
                subtitle: "Multiplayer Web Application • 2023",
                description: "A comprehensive gaming platform featuring multiplayer games, real-time chat, tournaments, and social features for gaming communities.",
                technologies: ["Socket.io", "Express.js", "MongoDB", "WebRTC", "Canvas API", "JWT"],
                features: [
                    "Real-time multiplayer gameplay",
                    "Live chat and voice communication",
                    "Tournament creation and management",
                    "Player ranking and leaderboards",
                    "Friend system and social features",
                    "Game replay and statistics",
                    "Custom game rooms",
                    "Anti-cheat detection system"
                ],
                challenges: "Implementing low-latency real-time communication for smooth gameplay and preventing cheating in competitive matches.",
                outcome: "Hosted 100+ tournaments with 10,000+ registered players and 95% positive community feedback."
            },
            learning: {
                title: "Learning Management System",
                subtitle: "Educational Platform • 2023",
                description: "An online learning platform with video streaming, progress tracking, interactive quizzes, and comprehensive course management tools.",
                technologies: ["Next.js", "Prisma", "PostgreSQL", "AWS S3", "Stripe", "WebRTC"],
                features: [
                    "HD video streaming with adaptive quality",
                    "Interactive quizzes and assignments",
                    "Progress tracking and analytics",
                    "Live virtual classrooms",
                    "Course creation tools for instructors",
                    "Certificate generation",
                    "Discussion forums and Q&A",
                    "Mobile app companion"
                ],
                challenges: "Optimizing video streaming for different connection speeds and creating engaging interactive learning experiences.",
                outcome: "Served 5,000+ students across 50+ courses with 92% completion rate and excellent instructor feedback."
            },
            sustainability: {
                title: "Sustainability Tracker",
                subtitle: "Environmental Impact App • 2023",
                description: "An environmental impact tracking application with carbon footprint calculator, sustainability goals, and community challenges.",
                technologies: ["Flutter", "Firebase", "Google Maps API", "Chart.js", "Node.js", "MongoDB"],
                features: [
                    "Carbon footprint calculation",
                    "Daily sustainability tracking",
                    "Eco-friendly habit suggestions",
                    "Community challenges and rewards",
                    "Local environmental data integration",
                    "Progress visualization and reports",
                    "Social sharing and competitions",
                    "Educational content and tips"
                ],
                challenges: "Accurately calculating carbon footprints from various activities and motivating users to maintain sustainable habits.",
                outcome: "Helped 25,000+ users reduce their carbon footprint by an average of 30% within 6 months of usage."
            }
        };
        
        function openProjectModal(projectId) {
            const modal = document.getElementById('projectModal');
            const project = projectData[projectId];
            
            if (!project) return;
            
            // Set modal content
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalSubtitle').textContent = project.subtitle;
            
            const modalContent = document.getElementById('modalContent');
            modalContent.innerHTML = `
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-300 mb-3">Project Overview</h3>
                        <p class="text-gray-400 leading-relaxed">${project.description}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-300 mb-3">Technologies Used</h3>
                        <div class="flex flex-wrap gap-2">
                            ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-300 mb-3">Key Features</h3>
                        <div class="space-y-2">
                            ${project.features.map(feature => `
                                <div class="feature-item">
                                    <i class="fas fa-check"></i>
                                    <span>${feature}</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-300 mb-3">Challenges & Solutions</h3>
                        <p class="text-gray-400 leading-relaxed">${project.challenges}</p>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-300 mb-3">Results & Impact</h3>
                        <p class="text-gray-400 leading-relaxed">${project.outcome}</p>
                    </div>
                    
                    <div class="flex flex-col sm:flex-row gap-3 pt-4">
                        <button class="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                            <i class="fas fa-external-link-alt mr-2"></i>
                            Live Demo
                        </button>
                        <button class="border border-gray-600 text-gray-300 hover:bg-gray-600 hover:text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                            <i class="fab fa-github mr-2"></i>
                            View Code
                        </button>
                    </div>
                </div>
            `;
            
            // Show modal
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        function closeProjectModal() {
            const modal = document.getElementById('projectModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
        
        // Close modal when clicking outside
        document.getElementById('projectModal').addEventListener('click', function(event) {
            if (event.target === this) {
                closeProjectModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeProjectModal();
            }
        });

(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97931f339406959b',t:'MTc1Njg4MDIyMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
