
document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const sourceImage = document.getElementById('source-image');
    const ownerImage = document.getElementById('owner-name');
    const descriPtion = document.getElementById('Description')
    const usersProfile = document.getElementById('users-profile');


    // users contact me start
    const instaGram = document.getElementById('insta');
    const gitHub = document.getElementById('github');
    const youTube = document.getElementById('youtube');
    // users contact me end


    const htmlCode = document.getElementById('html-code');
    const cssCode = document.getElementById('css-code');
    const jsCode = document.getElementById('js-code');

    // Fetch the source code data based on the id
    // This data can be fetched from a server or a local object
    const sourceData = {
      1: {
        imgSrc: 'images/sources-img/img-1.webp',
        html: `
        
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery with Source Code</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 class="text-center my-4">Image Gallery</h1>
    <div class="row">
      <!-- Category 1 -->
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="images/img-1.webp" class="card-img-top" alt="Image 1">
          <div class="card-body">
            <h5 class="card-title">Image 1</h5>
            <a href="source-code.html?id=1" class="btn btn-primary">View Source Code</a>
          </div>
        </div>
      </div>
      <!-- Category 2 -->
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="images/img-2.webp" class="card-img-top" alt="Image 2">
          <div class="card-body">
            <h5 class="card-title">Image 2</h5>
            <a href="source-code.html?id=2" class="btn btn-primary">View Source Code</a>
          </div>
        </div>
      </div>
      <!-- Category 3 -->
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="image3.jpg" class="card-img-top" alt="Image 3">
          <div class="card-body">
            <h5 class="card-title">Image 3</h5>
            <a href="source-code.html?id=3" class="btn btn-primary">View Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
        
        `,

        owner:'Abdourahmane Diarra',

        description:'login form using html css js bootstrap',

        usersProfile:'images/sources-img/users-profiles/request-profile-img.jpg',

        // users social links
        insta:'https://www.instagram.com/webspacekit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
        github:'https://github.com/bedimcode?tab=repositories',
        youtube:'https://www.youtube.com/watch?v=VdnQ8GgG14g',
        // users social links


        css: '.example { color: red; }',
        js: 'console.log("Image 1 JS");'
      },

      2: {
        imgSrc: 'images/sources-img/img-2.png',
        html: `
        <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Image Gallery with Source Code</title>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="container">
    <h1 class="text-center my-4">Image Gallery</h1>
    <div class="row">
      <!-- Category 1 -->
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="images/img-1.webp" class="card-img-top" alt="Image 1">
          <div class="card-body">
            <h5 class="card-title">Image 1</h5>
            <a href="source-code.html?id=1" class="btn btn-primary">View Source Code</a>
          </div>
        </div>
      </div>
      <!-- Category 2 -->
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="images/img-2.webp" class="card-img-top" alt="Image 2">
          <div class="card-body">
            <h5 class="card-title">Image 2</h5>
            <a href="source-code.html?id=2" class="btn btn-primary">View Source Code</a>
          </div>
        </div>
      </div>
      <!-- Category 3 -->
      <div class="col-md-4">
        <div class="card mb-4">
          <img src="image3.jpg" class="card-img-top" alt="Image 3">
          <div class="card-body">
            <h5 class="card-title">Image 3</h5>
            <a href="source-code.html?id=3" class="btn btn-primary">View Source Code</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>

        
        `,
        owner:'Daouda Diarra',

        description:'login form using html css js bootstrap',

        usersProfile:'images/sources-img/users-profiles/request-profile-img.jpg',
        
        // users social links
        insta:'404.html',
        github:'https://github.com/bedimcode?tab=repositories',
        youtube:'https://www.youtube.com/watch?v=VdnQ8GgG14g',
        // users social links

        css: '.example { color: green; }',
        js: 'console.log("Image 2 JS");'
      },



      3: {
        imgSrc: 'images/sources-img/img-3.webp',
        html: `
        
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Image Gallery with Source Code</title>
          <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
          <link rel="stylesheet" href="styles.css">
        </head>
        <body>
          <div class="container">
            <h1 class="text-center my-4">Image Gallery</h1>
            <div class="row">
              <!-- Category 1 -->
              <div class="col-md-4">
                <div class="card mb-4">
                  <img src="images/img-1.webp" class="card-img-top" alt="Image 1">
                  <div class="card-body">
                    <h5 class="card-title">Image 1</h5>
                    <a href="source-code.html?id=1" class="btn btn-primary">View Source Code</a>
                  </div>
                </div>
              </div>
              <!-- Category 2 -->
              <div class="col-md-4">
                <div class="card mb-4">
                  <img src="images/img-2.webp" class="card-img-top" alt="Image 2">
                  <div class="card-body">
                    <h5 class="card-title">Image 2</h5>
                    <a href="source-code.html?id=2" class="btn btn-primary">View Source Code</a>
                  </div>
                </div>
              </div>
              <!-- Category 3 -->
              <div class="col-md-4">
                <div class="card mb-4">
                  <img src="image3.jpg" class="card-img-top" alt="Image 3">
                  <div class="card-body">
                    <h5 class="card-title">Image 3</h5>
                    <a href="source-code.html?id=3" class="btn btn-primary">View Source Code</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </body>
        </html>
        
        `,

        owner:'Karamoko Diarra',

        description:'login form using html css js bootstrap',

        usersProfile:'images/sources-img/users-profiles/request-profile-img.jpg',


        css: '.example { color: blue; }',
        js: 'console.log("Image 3 JS");'
      }
    };

    const data = sourceData[id];
    if (data) {
      sourceImage.src = data.imgSrc;
      ownerImage.innerText=data.owner;
      descriPtion.innerText =data.description;
      usersProfile.src = data.usersProfile;
    //   social data name
    instaGram.href= data.insta;
    gitHub.href = data.github;
    youTube.href = data.youtube
    // social data name
      
      htmlCode.innerText = data.html;
      cssCode.innerText = data.css;
      jsCode.innerText = data.js;
    }

    const copyButtons = document.querySelectorAll('.copy-button');
    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const codeBlock = button.previousElementSibling;
        const codeText = codeBlock.innerText;

        navigator.clipboard.writeText(codeText).then(() => {
          button.innerText = 'Copied!';
          setTimeout(() => {
            button.innerText = 'Copy code';
          }, 3000);
        });
      });
    });
  });

document.addEventListener('DOMContentLoaded', (event) => {
    const copyButtons = document.querySelectorAll('.copy-button');
  
    copyButtons.forEach(button => {
      button.addEventListener('click', () => {
        const codeBlock = button.previousElementSibling;
        const codeText = codeBlock.innerText;
  
        navigator.clipboard.writeText(codeText).then(() => {
          button.innerText = 'Copied!';
          setTimeout(() => {
            button.innerText = 'Copy code';
          }, 3000);
        });
      });
    });
  });
  

  // pagination scripts

 // Created by ~Aiman Zehra~

function redirectToGoogle1() {
  var continueButton = document.getElementById("continueButton1");
  continueButton.textContent = ""; // Clear button text
  continueButton.classList.add("loading"); // Add loading animation
  setTimeout(function() {
    window.location.href = "source-code.html?id=1"; // Redirect to Google.com after delay
  }, 4000); // Delay in milliseconds
}

function redirectToGoogle2() {
  var continueButton = document.getElementById("continueButton2");
  continueButton.textContent = ""; // Clear button text
  continueButton.classList.add("loading"); // Add loading animation
  setTimeout(function() {
    window.location.href = "source-code.html?id=2"; // Redirect to Google.com after delay
  }, 4000); // Delay in milliseconds
}

function redirectToGoogle3() {
  var continueButton = document.getElementById("continueButton3");
  continueButton.textContent = ""; // Clear button text
  continueButton.classList.add("loading"); // Add loading animation
  setTimeout(function() {
    window.location.href = "source-code.html?id=3"; // Redirect to Google.com after delay
  }, 4000); // Delay in milliseconds
}

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