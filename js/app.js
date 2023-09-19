const slider = document.querySelectorAll(".portfolio-container");
console.log("This is imported")
// taggle icon navbar

let menu = document.querySelector('#menu');
let navBar = document.querySelector('.navbar');
let flag =false;
 menu.onclick = () => {
      menu.classList.toggle('bx-x');
      navBar.classList.toggle('active');
      flag = !flag; 
      if (flag){
        navBar.style.display='block';

      }
      else{
        navBar.style.display='none';
      }
   };


// // scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

      let header = document.querySelector('header');
      // header.classList.toggle('sticky', window.scrollY > 100);
};

// scroll reveal
    ScrollReveal({ 
        // reset: true,
        distance: '80px',
        duration: 2000,
        dealy: 200 
    
    });

    ScrollReveal().reveal('.home-content, .heading', {origin: 'top' });
    ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right' });

// typed js
const typed = new Typed(".multiple-text", {
    strings: ["Backend Django Developer.", "Data Science Enthusiast."],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop: true
});

function slide() {
  slider.classList.toggle("slide-left");
  console.log("sliding ig")
}

function scrollToTop() {
    console.log("sliding ig")
    const slider = document.querySelector(".portfolio-container");
    slider.classList.toggle("slide-left");
}

// Get the canvas element
const canvas = document.getElementById('myChart');
// Create the chart
new Chart(canvas, {
  type: "bar",
  data: {
    labels: ["React", "JavaScript", "Python", "CSS", "HTML"],
    datasets: [
      {
        label: "Skill Level",
        data: [9, 8, 7, 6, 9],
        backgroundColor: "rgba(0, 123, 255, 0.7)",
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // Hide the x-axis grid lines
        },
        ticks: {
          fontColor: "red", // Set the x-axis tick font color
        },
      },
      y: {
        grid: {
          color: "rgba(0, 0, 0, 0.1)", // Set the y-axis grid line color
        },
        ticks: {
          fontColor: "blue", // Set the y-axis tick font color
        },
      },
    },
    responsive: true,
  },
});

var swiper = new Swiper(".mySwiper", {
  // Optional parameters
  observer: true,
  observeParents: true,
  parallax: true,
  direction: "horizontal",
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function clickButton() {
  var button = document.getElementById("myButton"); // Replace 'myButton' with the actual ID of your button
  console.log("Woops I am getting clicked")
  button.click();
}
setInterval(clickButton, 10000);

let number1 = document.getElementById("number1");
let counter1 = 0;
setInterval(() => {
  if (counter1 == 65) {
    clearInterval();
  } else {
    counter1 += 1;
    number1.innerHTML = counter1 + "%";
  }
}, 30);

let number2 = document.getElementById("number2");
let counter2 = 0;
setInterval(() => {
  if (counter2 == 65) {
    clearInterval();
  } else {
    counter2 += 1;
    number2.innerHTML = counter2 + "%";
  }
}, 30);

let number3 = document.getElementById("number3");
let counter3 = 0;
setInterval(() => {
  if (counter3 == 65) {
    clearInterval();
  } else {
    counter3 += 1;
    number3.innerHTML = counter3 + "%";
  }
}, 30);

const experiences = [
  {
    jobTitle: "Python Web Api developer",
    companyName: "Proditech Soln Limited",
    description: `* Worked on google Analytics, different python APIs like Google Calendar, Google Drive, Google Sheets inorder to integrate the API into the websites. <br>
 * Developed different dashboards inorder to provide high quality customer analytics to the website users as to increase the demand and supply of the business.`,
    startDate: "Feb 2023",
    endDate: "May 2023",
  },
  {
    jobTitle: "Data Analyst",
    companyName: "The Sparks Foundation",
    description: `* Made some amazing machine learning models with Scikit and tensorflow on many different varirty of datasets. <br>
* Used the Jupyter notebook and the Tableau for Data Analysis. <br>
* Achieved 98% accuracy for TSLA stock data using Tensorflow framework and performed EDA on different datasets.
`,
    startDate: "May 2022",
    endDate: "Jun 2022",
  },
  {
    jobTitle: "Creative Designer",
    companyName: "DJS S4ds",
    description: `* Worked the team of more than 40+ students to create posters and organise the Hackathons and pan-India workshop`,
    startDate: "Jun 2021",
    endDate: "Jul 2022",
  },
];

const timeline = document.querySelector(".timeline");

experiences.forEach((experience) => {
  const item = document.createElement("div");
  item.classList.add("timeline-item");

  const content = `
    <div class="timeline-content">
      <h2>${experience.jobTitle}</h2>
      <h3>${experience.companyName}</h3>
      <p>${experience.description}</p>
      <span class="timeline-date">${experience.startDate} - ${experience.endDate}</span>
    </div>
  `;

  item.innerHTML = content;
  timeline.appendChild(item);
});



// Get the container element
const container = document.querySelector('.certificates-container');

// Create an array of service objects with their data
const services = [
  {
    imageSrc: "image/awsml.png",
    title: "AWS Academy Machine Learning Foundations",
    description:
      "AWS Academy Hands on experience with various AWS services for data handling, analysis and visualization.",
    link: "https://www.credly.com/earner/earned/badge/6c35502f-b709-4621-a2a4-840f2bc0fc91",
    linkText: "Credentials",
  },
  {
    imageSrc: "image/awssaa.png",
    title: "AWS Academy Cloud Architecting",
    description: `AWS Academy
Gained knowledge about AWS Data Engineering services for Big Data Handling and Analytics`,
    link: "https://www.credly.com/earner/earned/badge/73530ecb-9f15-4aaf-b4d8-c806b74f9627",
    linkText: "Credentials",
  },
  {
    imageSrc: "image/awsanal.png",
    title: "AWS Academy Data Analytics",
    description: `AWS Academy
Hands on experience with various AWS services for data handling, analysis and visualization`,
    link: "https://www.credly.com/earner/earned/badge/c3074533-abf6-4f2b-bf37-7ab16a715917",
    linkText: "Credentials",
  },
  {
    imageSrc: "image/awseng.png",
    title: "AWS Academy Data Engineering",
    description: `AWS Academy
Gained knowledge about AWS Data Engineering services for Big Data Handling and Analytics`,
    link: "https://www.credly.com/earner/earned/badge/0fb3dbd7-67bb-4c32-a38d-9be9ee2d6cdc",
    linkText: "Credentials",
  },
];

// Iterate over the services array and create HTML elements for each service
services.forEach(service => {
  // Create service box elements
  const serviceBox = document.createElement("div");
  serviceBox.classList.add("services-box");
  serviceBox.classList.add("certificate");

  const image = document.createElement("img");
  image.src = service.imageSrc;
  image.alt = "";
  serviceBox.appendChild(image);

  const title = document.createElement("h3");
  title.textContent = service.title;
  serviceBox.appendChild(title);

  const description = document.createElement("p");
  description.textContent = service.description;
  serviceBox.appendChild(description);

  const link = document.createElement("a");
  link.href = service.link;
  link.classList.add("btn");
  link.textContent = service.linkText;
  link.target = "_blank"; // Open link in a new tab
  serviceBox.appendChild(link);

  // Append the service box element to the container
  container.appendChild(serviceBox);
});

// Get the container and certificates
const contain = document.querySelector('.certificates-container');
const certificates = contain.querySelectorAll('.certificate');

// Set the maximum number of certificates to display
const maxCertificates = 3;

// Hide additional certificates initially
for (let i = maxCertificates; i < certificates.length; i++) {
  certificates[i].style.display = 'none';
}

// Function to handle the "Show More" button click
function showMoreCertificates() {
  for (let i = maxCertificates; i < certificates.length; i++) {
    certificates[i].style.display = 'block';
  }
  document.getElementById('showMoreBtn').style.display = 'none';
}

// Add event listener to the "Show More" button
document.getElementById('showMoreBtn').addEventListener('click', showMoreCertificates);
