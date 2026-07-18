// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===============================
// Navbar Shadow on Scroll
// ===============================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";

    }

    else{

        header.style.boxShadow = "0 3px 10px rgba(0,0,0,0.1)";

    }

});

// ===============================
// Welcome Message
// ===============================

window.onload = function(){

    console.log("Welcome to Golden Care Old Age Home");

};



// ===============================
// Admission Form Validation
// ===============================

const form = document.getElementById("admissionForm");

if(form){

    form.addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("name").value;
        let age = document.getElementById("age").value;
        let mobile = document.getElementById("mobile").value;


        if(name == ""){
            alert("Please enter your name");
            return;
        }


        if(age < 60){
            alert("Age should be 60 or above");
            return;
        }


        if(mobile.length != 10){
            alert("Enter valid mobile number");
            return;
        }


        alert("Admission form submitted successfully!");

        form.reset();

    });

}



// ===============================
// Login Form Validation
// ===============================

const loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(e){

        e.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;


        if(email == ""){
            alert("Please enter your email");
            return;
        }


        if(password == ""){
            alert("Please enter your password");
            return;
        }


        if(password.length < 6){
            alert("Password must be at least 6 characters");
            return;
        }


        alert("Login successful!");

        loginForm.reset();

    });

}



// ===============================
// Contact Form Validation
// ===============================

const contactForm = document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        let name = document.getElementById("contactName").value;
        let email = document.getElementById("contactEmail").value;
        let mobile = document.getElementById("contactMobile").value;
        let message = document.getElementById("contactMessage").value;


        if(name == ""){
            alert("Please enter your name");
            return;
        }


        if(email == ""){
            alert("Please enter your email");
            return;
        }


        if(mobile.length != 10){
            alert("Enter valid mobile number");
            return;
        }


        if(message == ""){
            alert("Please write your message");
            return;
        }


        alert("Your message has been sent successfully!");

        contactForm.reset();

    });

}


// ===============================
// Donation Form Validation
// ===============================

const donationForm = document.getElementById("donationForm");

if (donationForm) {

    donationForm.addEventListener("submit", function(e) {

        e.preventDefault();

        let name = document.getElementById("donorName").value;
        let email = document.getElementById("donorEmail").value;
        let mobile = document.getElementById("donorMobile").value;
        let amount = document.getElementById("donationAmount").value;
        let payment = document.getElementById("paymentMethod").value;

        if (name == "") {
            alert("Please enter your name");
            return;
        }

        if (email == "") {
            alert("Please enter your email");
            return;
        }

        if (mobile.length != 10) {
            alert("Enter valid mobile number");
            return;
        }

        if (amount <= 0) {
            alert("Please enter a valid donation amount");
            return;
        }

        if (payment == "") {
            alert("Please select a payment method");
            return;
        }

        alert("Thank you for your donation!");

        donationForm.reset();

    });

}


// ===============================
// Back To Top Button
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(topBtn){

        if(window.scrollY > 300){
            topBtn.style.display = "block";
        }
        else{
            topBtn.style.display = "none";
        }

    }

});

if(topBtn){

    topBtn.addEventListener("click", function(){

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


// ===============================
// Dashboard Counter
// ===============================

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if(count < target){

            counter.innerText = count + increment;

            setTimeout(updateCounter,20);

        }
        else{

            counter.innerText = target;

        }

    };

    updateCounter();

});