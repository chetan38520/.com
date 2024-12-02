document.addEventListener("DOMContentLoaded", function() {
  emailjs.init("dKTKktX-6IjCTSvcQ");

  document.getElementById('askMeForm').addEventListener('submit', function(event) {
    event.preventDefault();
   
    emailjs.sendForm('service_sfxzxjf', 'template_sk5g94k', this) // Use the correct template ID here
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // document.getElementById('responseMessage').innerText = "Thank you! Your question has been sent successfully.";
          }, function(error) {
        console.log('FAILED...', error);
        document.getElementById('responseMessage').innerText = "Oops! Something went wrong. Please try again.";

      });
      this.reset();
  });
});











// Open lightbox with the clicked image
function openLightbox(element) {
  const lightboxModal = document.getElementById("lightboxModal");
  const lightboxImage = document.getElementById("lightboxImage");
  lightboxImage.src = element.src;
  lightboxImage.style.transform = "scale(1)"; // Reset zoom level
  lightboxModal.style.display = "block";
}

// Close lightbox
function closeLightbox() {
  document.getElementById("lightboxModal").style.display = "none";
}

// Zoom functionality
let scale = 1;
function zoomIn() {
  scale += 0.1;
  document.getElementById("lightboxImage").style.transform = `scale(${scale})`;
}

function zoomOut()
 {
  if (scale > 0.5) { // Prevent excessive zooming out
      scale -= 0.1;
      document.getElementById("lightboxImage").style.transform = `scale(${scale})`;
  }
}




















function submitForm(event) {
  event.preventDefault(); // Prevent actual form submission
 
  const successCard = document.getElementById("successCard");

  // Show success message card with transition
  successCard.style.display = "block";
  setTimeout(() => successCard.classList.add("visible"), 5);

  // Hide success message card after 3 seconds
  setTimeout(() => {
    successCard.classList.remove("visible");
    setTimeout(() => successCard.style.display = "none", 500);

  }, 1000);
}











const skillDescriptions = {
  python: {
      title: "Python",
      description: "Proficient in data analysis, automation, and visualization using libraries like NumPy, Pandas, and Matplotlib. Experienced in creating efficient data pipelines and automating tasks with Python."
  },
  sql: {
      title: "SQL",
      description: "Skilled in querying, data extraction, and optimization for data-driven applications. Capable of designing and maintaining complex databases with an emphasis on performance and reliability."
  },
  excel: {
      title: "Excel",
      description: "Expert in using Excel for data manipulation, pivot tables, formulas, and data visualization through charts. Experienced in developing Excel-based dashboards and automated reports."
  },
  powerbi: {
      title: "Power BI",
      description: "Experienced in creating interactive Power BI dashboards and reports that provide insights and aid in decision-making. Skilled in data modeling and transforming raw data into meaningful visuals."
  },
  data: {
      title: "Data Visualization",
      description: "Adept at creating compelling data visualizations that communicate trends and insights using tools like Python, Excel, and Power BI."
  }
};

function openSkillModal(skill) {
  const modal = document.getElementById("skillModal");
  document.getElementById("skillTitle").innerText = skillDescriptions[skill].title;
  document.getElementById("skillDescription").innerText = skillDescriptions[skill].description;
  modal.style.display = "flex";
}

function closeSkillModal() {
  document.getElementById("skillModal").style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById("skillModal");
  if (event.target === modal) {
      modal.style.display = "none";
  }
}





























scrollLefts = function (containerClass) {
  const container = document.querySelector(`.${containerClass}`);
  if (container.scrollLeft > 0) {
      container.scrollBy({
          left: -500, // Adjust scroll distance
          behavior: 'smooth',
      });
  }
};

scrollRight = function (containerClass) {
  const container = document.querySelector(`.${containerClass}`);
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  if (container.scrollLeft < maxScrollLeft) {
      container.scrollBy({
          left: 500, // Adjust scroll distance
          behavior: 'smooth',
      });
  }
};

