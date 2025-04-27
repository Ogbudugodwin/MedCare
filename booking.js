const menuBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});


// JavaScript for Form Submission 

        // Initialize EmailJS with your public key
        emailjs.init("bat5tZDtwGy-l3zrR"); // Replace with your EmailJS public key

        document.getElementById("booking-form").addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from refreshing the page

            // Collect form data
            const formData = {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                date: document.getElementById("date").value,
                department: document.getElementById("department").value,
                message: document.getElementById("message").value,
                to_email: document.getElementById("email").value, // For sending to the customer
            };

            // Send email to the company 
            const companyEmailPromise = emailjs.send("service_b11fnds", "template_nwwb12y", formData);

            // Send confirmation email to the customer
            const customerEmailPromise = emailjs.send("service_b11fnds", "template_4vojm37", {
                ...formData,
                to_email: formData.email, // Ensure EmailJS sends to the customer's email
            });

            // Wait for both emails to be sent
            Promise.all([companyEmailPromise, customerEmailPromise])
                .then(function () {
                    // Show success message
                    document.getElementById("success-message").style.display = "block";
                    document.getElementById("error-message").style.display = "none";
                    document.getElementById("booking-form").reset(); // Reset the form
                })
                .catch(function (error) {
                    // Show error message
                    document.getElementById("error-message").style.display = "block";
                    document.getElementById("success-message").style.display = "none";
                    console.error("Email sending failed:", error);
                });
        });

        document.querySelector(".signup-button").addEventListener("click", function (e) {
            e.preventDefault();
            const email = document.querySelector("#Email").value.trim();
          
            if (!email) {
              alert("Please fill the field");
            } else if (!/\S+@\S+\.\S+/.test(email)) {
              alert("Please enter a valid email address.");
            } else {
              alert("You have successfully signed up for the Newsletter!");
              document.querySelector("#Email").value = "";
            }
          });
           