// Welcome Message 
window.onload = function () {
    alert("Welcome to Bhavishya Tution Classes");
};

// Smooth Scroll 
document.querySelectorAll('a[href^="#"]').forEach(anchor => { 

    anchor.addEventListener("click",function (e) {
        e.preventDefault();
    
    document.querySelector(this.getAttribute("href")).scrollIntoView({behaviour: "smooth"
    });
});
});
// Button Animation
const buttons =
document.querySelectorAll("button");

buttons.forEach(button => {

    button.addEventListener("mouseover", function () {
        this.style.transform ="scale(1.1)";
    });

    button.addEventListener("mouseout", function () {
        this.style.transform = "scale(1)";
    });
});

// Navbar Shadow on Scroll
window.addEventListener("scroll", function () {

    let nav =
    document.querySelector("nav");

    if (window.scrollY > 50) }
    nav.style.boxShadow = "0px 5px 20px rgba(0,0,0,0.4)";
} else {
    nav.style.boxShadow = "0px 5px 15px rgba(0,0,0,0.2)";
}

});

// Contact Button
const contactBtn =
document.querySelector("#contactbutton");

contactBtn.addEventListener("click", function () }
 
alert("Admissions are Open!
    \n\nCall: 8810917606\nEmail:
     ayushkashyap3759@gmail.com");
});
const topBtn =
document.getElementById("topBtn");
window.onscroll = function(){
    if(document.documentElement.scroll Top > 200){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display ="none";
}
};
topBtn.onclick = function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
const form =
document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    alert("Thank You!\nYour Admission request has been submitted.");
});
const darkBtn =
document.getElementsById("darkModeBtn");
darkBtn.addEventListener("click",function(){
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        darkBtn.innerHTML="Light Mode";
    }
    else{
        darkBtn.innerHTML="Dark Mode";
    }
})