document.addEventListener("DOMContentLoaded", () => {
  const sections = [
      {   
          btn:"<i class='fa-solid fa-code' style='color:rgb(225, 223, 223);'></i> Get Code",
          postdate:"10 December 2024",
          name: "Login form using HTML CSS JAVASCRIPT...",
          image: "https://themewagon.com/wp-content/uploads/2019/06/restaurant.jpg",
          views:"200 views",
          ownerprofile:"images/content-img/CodEkip.png",
          ownername:"CodEkip <i class='ri-verified-badge-fill' style='color:#4449EE; cursor:pointer' title='verified'></i>",
          bio:"your users to be at your site for much more longer. Built with HTML & CSS",
          insta:"404.html",
          user:`<button class="item-button" onclick="showItem('CodEkip ', 'assets/p1.png', 'Total Posts', 
          'An Instagram caption is a written description or explanation about an Instagram photo to provide more context. Instagram captions can include emojis, hashtags, and tags. Here’s an example of a caption on Instagram: Anna Kendrick posted a photo of her with a cute animal. Her Instagram caption reads “He followed me home ma! Can I keep him',
          'HTML - CSS - JAVASCRIPT - PHP',
          'codekip10@gmail.com')">View profile</button>`,
          source: {
              html: `
            {/* HTML Code for Section 1 
              `,
              css: `
              /* CSS Code for Section 1 */
              `,
              js: "// JavaScript Code for Section 1"
          }
      },
      {
          btn:"<i class='fa-solid fa-code' style='color:rgb(225, 223, 223);'></i> Get Code",
          name: "Furniture shoping profesional website",
          image: "https://themewagon.com/wp-content/uploads/2017/12/Frame-175-1.png",
          views:"10k views",
          ownerprofile:"assets/p1.png",
          ownername:"Abdourahmane Diarra",
          bio:"your users to be at your site for much more longer. Built with HTML & CSS",
          insta:"https://www.instagram.com/codeekip?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
          user:`<button class="item-button" onclick="showItem('Item 2', 'assets/p2.jpeg', '30.00')">View profie</button>`,
          source: {
              html: "<div>HTML Code for Section 2</div>",
              css: "/* CSS Code for Section 2 */",
              js: "// JavaScript Code for Section 2"
          }
      },
      // Add more sections as needed
      {   
          btn:"<i class='fa-solid fa-code' style='color:rgb(225, 223, 223);'></i> Get Code",
          name: "section 1",
          image: "https://themewagon.com/wp-content/uploads/2015/08/reign-v5.png",
          views:"20k views",
          ownerprofile:"http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080",
          ownername:"Karamoko Diarra",
          bio:"Your users to be at your site for much more longer. Built with HTML & CSS",
          user:`<button class="item-button" onclick="showItem('Item 3', 'http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080', '40.00')">View profile</button>`,
          source: {
              html: "<div>HTML Code for Section 3</div>",
              css: "/* CSS Code for Section 3 */",
              js: "// JavaScript Code for Section 3"
          }
      },
      {
        btn:"<i class='fa-solid fa-code' style='color:rgb(225, 223, 223);'></i> Get Code",
        name: "Section 4",
        image: "https://themewagon.com/wp-content/uploads/2015/08/reign-v5.png",
        views:"20k views",
        ownerprofile:"https://wallpapers.com/images/hd/cool-profile-picture-paper-bag-head-4co57dtwk64fb7lv.jpg",
        ownername:"Daily developers",
        bio:"Your users to be at your site for much more longer. Built with HTML & CSS",
        user:`<button class="item-button" onclick="showItem('Item 3', 'http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080', '40.00')">View profile</button>`,
        source: {
            html: "<div>HTML Code for Section 3</div>",
            css: "/* CSS Code for Section 3 */",
            js: "// JavaScript Code for Section 3"
        }
    },
    
    {
        btn:"<i class='fa-solid fa-code' style='color:rgb(225, 223, 223);'></i> Get Code",
        name: "Section 5",
        image: "https://themewagon.com/wp-content/uploads/2015/08/reign-v5.png",
        views:"20k views",
        ownerprofile:"https://imgv3.fotor.com/images/gallery/AI-3D-Female-Profile-Picture.jpg",
        ownername:"Teninba Diarra",
        bio:"Your users to be at your site for much more longer. Built with HTML & CSS",
        user:`<button class="item-button" onclick="showItem('Item 3', 'http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080', '40.00')">View profile</button>`,
        source: {
            html: "<div>HTML Code for Section 3</div>",
            css: "/* CSS Code for Section 3 */",
            js: "// JavaScript Code for Section 3"
        }
    },
    //    ADS POST START  HERE
    {
        btn:"Learn more <i class='ri-external-link-line'></i>",
        name: "Section 6",
        image: "https://themewagon.com/wp-content/uploads/2015/08/reign-v5.png",
        views:"<span>Sponsoried</span>",
        ownerprofile:"https://scontent.fblr2-2.fna.fbcdn.net/v/t39.30808-1/452672591_122163458282194817_2873358918980160074_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=107&ccb=1-7&_nc_sid=e8ff23&_nc_ohc=7Hzz1gmSK50Q7kNvgEwut4a&_nc_ht=scontent.fblr2-2.fna&oh=00_AYA1BRdCz6mW6qNKZGgC5t0zq6AOEdgmdQiSFB70k_iShw&oe=66AD0FE8",
          ownername:"Webglory <i class='ri-verified-badge-fill' style='color:#4449EE; cursor:pointer' title='verified'></i>",
          bio:"Your users to be at your site for much more longer. Built with HTML & CSS",
          user:`<button class="item-button" onclick="showItem('Item 3', 'http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080', '40.00')">View profile</button>`,
        source: {
            html: "<div>HTML Code for Section 3</div>",
            css: "/* CSS Code for Section 3 */",
            js: "// JavaScript Code for Section 3"
        }
    },
    // ads end here
    {
        btn:"<i class='fa-solid fa-code' style='color:rgb(225, 223, 223);'></i> Get Code",
        name: "Section 7",
        image: "https://themewagon.com/wp-content/uploads/2015/08/reign-v5.png",
        views:"20k views",
        ownerprofile:"http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080",
        ownername:"Karamoko Diarra",
        bio:"Your users to be at your site for much more longer. Built with HTML & CSS",
        user:`<button class="item-button" onclick="showItem('Item 3', 'http://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8fDB8fHx8MTYyNTY2NzI4OQ&ixlib=rb-1.2.1&q=80&w=1080', '40.00')">View profile</button>`,
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
                <div class="post-info">    
                    <div>
                        <h3>${section.name}</h3>
                        <img src="${section.ownerprofile}"><span>${section.ownername}</span><br>
                        <small>${section.views}</small>
                    </div>    
                    <div class="action-btn">
                        <button onclick="viewSourceCode(${sections.indexOf(section)})"> ${section.btn}</button>
                    <div>
                <div>
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
              <img src="${foundSection.image}" alt="${foundSection.name}" loading="lazy">
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
      button.innerHTML = 'Getting code...';
      setTimeout(() => {
          localStorage.setItem('selectedSection', JSON.stringify(sections[index]));
          window.location.href = 'source-code.html';
      }, 2000);
  };

  displaySections();
});
// sugg buttonsest
document.getElementById('formSection').onclick = function(){
    document.getElementById("search-input").value ='Login form';
}
document.getElementById('buttonsSection').onclick = function(){
    document.getElementById("search-input").value ='Buttons';
}
document.getElementById('cardsSection').onclick = function(){
    document.getElementById("search-input").value ='Cards';
}
document.getElementById('inputsSection').onclick = function(){
    document.getElementById("search-input").value ='Inputs';
}
document.getElementById('patternSection').onclick = function(){
    document.getElementById("search-input").value ='Pattern';
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

 // USER PROFILE JS
 function showItem(name, image, price, about, skils, email) {
    const url = `user-profile.html?name=${encodeURIComponent(name)}&image=${encodeURIComponent(image)}&price=${encodeURIComponent(price)}&about=${encodeURIComponent(about)}&skils=${encodeURIComponent(skils)}&email=${encodeURIComponent(email)}`;
    window.location.href = url;
}