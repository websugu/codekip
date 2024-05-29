document.addEventListener("DOMContentLoaded", () => {
  const sections = [
      {
          name: "Section 1",
          image: "https://themewagon.com/wp-content/uploads/2019/06/restaurant.jpg",
          views:"200k",
          ownerprofile:"images/content-img/CodEkip.png",
          ownername:"CodEkip",
          bio:"your users to be at your site for much more longer. Built with HTML & CSS",
          insta:"404.html",
          source: {
              html: `

{/* CSS Code for Section 1 
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Section Search</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<div>HTML Code for Section 1</div>
<div>HTML Code for Section 1</div>*/}
              `,
              css: `
              /* CSS Code for Section 1 */
              .code-owner{
                  border: 1px solid black;
                  width: 40%;
                  padding: 10px;
                  border-radius: 10px;
              }
              .code-owner img{
                  width: 100%;
              }
              
              .source-codes{
                  border: 1px solid black;
                  width: 70%;
                  border-radius: 10px;
                  padding: 10px;
              }
              
              `,
              js: "// JavaScript Code for Section 1"
          }
      },
      {
          name: "Section 2",
          image: "https://themewagon.com/wp-content/uploads/2017/12/Frame-175-1.png",
          views:"10k",
          ownerprofile:"images/sources-img/users-profiles/request-profile-img.jpg",
          ownername:"Abdourahmane Diarra",
          bio:"your users to be at your site for much more longer. Built with HTML & CSS",
          insta:"https://www.instagram.com/codeekip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          source: {
              html: "<div>HTML Code for Section 2</div>",
              css: "/* CSS Code for Section 2 */",
              js: "// JavaScript Code for Section 2"
          }
      },
      // Add more sections as needed
      {
          name: "Section 3",
          image: "https://themewagon.com/wp-content/uploads/2015/08/reign-v5.png",
          views:"20k",
          source: {
              html: "<div>HTML Code for Section 3</div>",
              css: "/* CSS Code for Section 3 */",
              js: "// JavaScript Code for Section 3"
          }
      },
  ];

  const searchInput = document.getElementById('search-input');
  const sectionsContainer = document.getElementById('sections-container');
  const loadingAnimation = document.getElementById('loading-animation');
  const notFound = document.getElementById('not-found');

  

  function displaySections() {
      sectionsContainer.innerHTML = '';
      sections.forEach(section => {
          const sectionElement = document.createElement('div');
          sectionElement.className = 'section';
          sectionElement.innerHTML = `
          <div class="elements">
                  <img src="${section.image}" alt="${section.name}">
                  <small>${section.views}</small>
                  <h3>${section.name}</h3>
                  <button onclick="viewSourceCode(${sections.indexOf(section)})">View Source Code</button>
                 
          </div>    
          `;
          sectionsContainer.appendChild(sectionElement);
      });
  }

  window.searchSection = () => {
      const query = searchInput.value.toLowerCase();
      loadingAnimation.style.display = 'block';
      notFound.style.display = 'none';
      sectionsContainer.style.display = 'none';

      setTimeout(() => {
          loadingAnimation.style.display = 'none';
          const foundSection = sections.find(section => section.name.toLowerCase().includes(query));
          if (foundSection) {
              sectionsContainer.innerHTML = '';
              const sectionElement = document.createElement('div');
              sectionElement.className = 'section';
              sectionElement.innerHTML = `
              <div class="elements">
              <img src="${foundSection.image}" alt="${foundSection.name}">
              <small>${foundSection.views}</small>
              <h3>${foundSection.name}</h3>
              <button onclick="viewSourceCode(${sections.indexOf(foundSection)})">View Source Code</button>
             
      </div> 
              `;
              sectionsContainer.appendChild(sectionElement);
              sectionsContainer.style.display = 'flex';
          } else {
              notFound.innerHTML = `
              <div class="not-found">
                  <img src="https://img.icons8.com/?size=256&id=I7Z8X2g1kazJ&format=png" width="100">
                  <h2>Section not found!</h2><br>
                  <p> You can search for : Login form - Button and more...</p>
              </div>    
              `;
              // ${sections.map(section => section.name).join(', ')}
              notFound.style.display = 'block';
          }
      }, 3000);
  };

  window.viewSourceCode = (index) => {
      const button = event.target;
      button.innerHTML = '<img src="images/404-img/282.jpg" alt="" width="" class="btn-load">';
      setTimeout(() => {
          localStorage.setItem('selectedSection', JSON.stringify(sections[index]));
          window.location.href = 'source-code.html';
      }, 2000);
  };

  displaySections();
});

// nav dropdown

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
