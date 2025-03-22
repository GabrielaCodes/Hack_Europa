document.addEventListener("DOMContentLoaded", function () {
    // Internship Data
    const internships = [
        { title: "Web Developer Intern", company: "TechCorp", location: "Remote" },
        { title: "Data Science Intern", company: "AI Solutions", location: "Bangalore" },
        { title: "Marketing Intern", company: "AdWorld", location: "Mumbai" },
        
            { title: "Campus Ambassador", company: "Youth Marketer", location: "Agra, Dehradun, Jaipur" },
            { title: "Field Sales Intern", company: "IITians GATE Classes", location: "Bangalore" },
            { title: "Legal Research Intern", company: "URE Legal Advocates", location: "Noida (Hybrid)" },
            { title: "Software Development and Testing Automation Intern", company: "Login2Xplore", location: "Indore (Hybrid)" },
            { title: "Influencer Marketing Intern", company: "Nippetals", location: "Mumbai, Goa Velha (Hybrid)" },
            { title: "Summer Intern", company: "Lumiere Education", location: "India" },
            { title: "Internship Trainee", company: "The Muthoot Group", location: "Belagavi, Karnataka" },
            { title: "Internship Trainee", company: "The Muthoot Group", location: "Vishakhapatnam, Andhra Pradesh" },
            { title: "Firstcry.com - Intern - Catalog Management", company: "FirstCry.com (BrainBees Solutions Ltd.)", location: "Pune, Maharashtra" },
            { title: "Human Resources (HR) Internship", company: "FirstCry.com (BrainBees Solutions Ltd.)", location: "Pune, Maharashtra" },
            { title: "Human Resources Trainee", company: "Schbang", location: "Mumbai, Maharashtra" },
            { title: "Marketing Intern", company: "Deccan AI", location: "Hyderabad, Telangana" },
            { title: "Human Resources (HR) Internship", company: "FirstCry.com (BrainBees Solutions Ltd.)", location: "Thane, Mumbai" },
            { title: "CSE Intern", company: "Tripify", location: "India" },
            { title: "Internship", company: "Tata Group", location: "India" },
            { title: "Internship", company: "Tata Consultancy Services", location: "India" },
            { title: "Summer Internship", company: "Nbyula", location: "India" },
            { title: "Summer Internship", company: "Future Nine Information Technologies", location: "India" },
            { title: "Summer Internship", company: "MindTribe HealthCare", location: "India" },
            { title: "Summer Internship", company: "GE Aerospace", location: "India" },
            { title: "Summer Internship", company: "Adobe", location: "India" },
            { title: "Internship Program", company: "Wells Fargo", location: "India" },
            { title: "Internship", company: "Bosch", location: "India" },
            { title: "Internship", company: "NITI Aayog", location: "India" },
            { title: "Global Health Experiential Education Intern", company: "Child Family Health International", location: "India" },
            { title: "Medical and Healthcare Intern", company: "Volunteering Solutions", location: "India" },
            { title: "Journalism Intern", company: "Internships Kerala", location: "Kerala, India" },
            { title: "Professional Immersion Experience Intern", company: "Pave", location: "Mumbai, India" },
            { title: "Social Entrepreneurship Intern", company: "Skilled Impact", location: "India" }
        
        
    ];

    // Function to Display Internships
    function displayInternships(internshipsToShow = internships) {
        const internshipList = document.getElementById("internship-list");
        if (!internshipList) {
            console.error("Error: Internship list element not found!");
            return;
        }

        internshipList.innerHTML = ""; // Clear previous data

        if (internshipsToShow.length === 0) {
            internshipList.innerHTML = "<p>No internships found.</p>";
            return;
        }

        internshipsToShow.forEach(internship => {
            let li = document.createElement("li");
            li.textContent = `${internship.title} - ${internship.company} (${internship.location})`;
            internshipList.appendChild(li);
        });
    }

    // Chatbot Functionality
    function sendMessage() {
        const userInput = document.getElementById("user-input");
        const chatBox = document.getElementById("chat");

        if (userInput.value.trim() === "") return;

        // Append user message
        let userMessage = document.createElement("p");
        userMessage.textContent = "You: " + userInput.value;
        chatBox.appendChild(userMessage);

        // Generate bot response
        let botMessage = document.createElement("p");
        botMessage.textContent = "Bot: " + getBotResponse(userInput.value);
        chatBox.appendChild(botMessage);

        userInput.value = "";
        chatBox.scrollTo({ top: chatBox.scrollHeight, behavior: "smooth" }); // Auto-scroll
    }

    // Basic Chatbot Responses
    function getBotResponse(input) {
        input = input.toLowerCase();
        if (input.includes("internship")) {
            return "We have internships in Web Development, Data Science, and Marketing!";
        } else if (input.includes("job")) {
            return "Check out our recommendations for job opportunities!";
        } else if (input.includes("exam")) {
            return "Visit the 'Exams & Training' section for upcoming exams!";
        } else {
            return "I'm here to help! Ask me about internships, jobs, exams, or training.";
        }
    }

    // Search Functionality
    document.getElementById("search").addEventListener("input", function () {
        let query = this.value.toLowerCase();
        let filteredInternships = internships.filter(internship =>
            internship.title.toLowerCase().includes(query) ||
            internship.company.toLowerCase().includes(query) ||
            internship.location.toLowerCase().includes(query)
        );

        displayInternships(filteredInternships);
    });

    // Event listener for chatbot
    document.getElementById("send-btn").addEventListener("click", sendMessage);
    document.getElementById("user-input").addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            sendMessage();
        }
    });

    // Load Data on Page Load
    displayInternships();
});
document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll(".star");
    let selectedRating = 0;

    // Star click event
    stars.forEach(star => {
        star.addEventListener("click", function () {
            selectedRating = this.getAttribute("data-value");

            // Reset all stars
            stars.forEach(s => s.classList.remove("selected"));

            // Highlight selected stars
            for (let i = 0; i < selectedRating; i++) {
                stars[i].classList.add("selected");
            }
        });
    });

    // Review submission event
    document.getElementById("reviewForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value || "Anonymous";
        const internship = document.getElementById("internship").value;
        const year = document.getElementById("year").value;
        const month = document.getElementById("month").value;
        const reviewText = document.getElementById("review").value;

        if (!internship || !year || !month || !reviewText || selectedRating === 0) {
            alert("Please fill all required fields and select a rating.");
            return;
        }

        const reviewHTML = `
            <div class="review-item">
                <strong>${name}</strong>
                <small>${internship} - ${month} ${year}</small>
                <div class="stars">${"★".repeat(selectedRating)}${"☆".repeat(5 - selectedRating)}</div>
                <p>${reviewText}</p>
            </div>
        `;

        document.getElementById("reviewsList").innerHTML += reviewHTML;

        // Reset form
        this.reset();
        selectedRating = 0;
        stars.forEach(s => s.classList.remove("selected"));
    });
});
document.getElementById("resume-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let resume = document.getElementById("resume").files[0];

    if (!resume) {
        alert("Please upload a resume.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function() {
        let text = reader.result.toLowerCase();

        let keywords = ["experience", "skills", "education", "projects", "certifications"];
        let feedback = "<h3>Feedback for " + name + "</h3>";

        let foundKeywords = keywords.filter(keyword => text.includes(keyword));
        
        if (foundKeywords.length > 0) {
            feedback += "<p>✅ Good job! Your resume includes: " + foundKeywords.join(", ") + ".</p>";
        } else {
            feedback += "<p>⚠️ Your resume is missing key sections like Experience, Skills, or Education.</p>";
        }

        document.getElementById("feedback").innerHTML = feedback;
    };

    reader.readAsText(resume);
});
