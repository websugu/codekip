document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    const profileContainer = document.getElementById('profile-container');
    const formContainer = document.getElementById('form-container');

    const profileImageDisplay = document.getElementById('profileImageDisplay');
    const profileName = document.getElementById('profileName');
    const profileUsername = document.getElementById('profileUsername');
    const profileEmail = document.getElementById('profileEmail');
    const profileBio = document.getElementById('profileBio');
    const profilePhone = document.getElementById('profilePhone');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const profileImage = document.getElementById('profileImage').files[0];
        const name = document.getElementById('name').value;
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const bio = document.getElementById('bio').value;
        const phone = document.getElementById('phone').value;

        const reader = new FileReader();
        reader.onload = function (e) {
            const imageData = e.target.result;
            document.cookie = `profileImage=${encodeURIComponent(imageData)}`;
            document.cookie = `name=${encodeURIComponent(name)}`;
            document.cookie = `username=${encodeURIComponent(username)}`;
            document.cookie = `email=${encodeURIComponent(email)}`;
            document.cookie = `password=${encodeURIComponent(password)}`;
            document.cookie = `bio=${encodeURIComponent(bio)}`;
            document.cookie = `phone=${encodeURIComponent(phone)}`;

            showProfile();
        }
        reader.readAsDataURL(profileImage);
    });

    function showProfile() {
        const cookies = document.cookie.split('; ').reduce((prev, current) => {
            const [name, value] = current.split('=');
            prev[name] = decodeURIComponent(value);
            return prev;
        }, {});

        // profileImageDisplay.src = cookies.profileImage;
        profileName.textContent = `${cookies.name}`;
        profileUsername.textContent = `Username : @${cookies.username}`;
        profileEmail.textContent = `Email : ${cookies.email}`;
        profileBio.textContent = `Bio : ${cookies.bio}`;
        profilePhone.textContent = `Phone Number : ${cookies.phone}`;

        formContainer.style.display = 'none';
        profileContainer.style.display = 'block';
    }

    document.getElementById('logoutButton').addEventListener('click', function () {
        document.cookie.split(";").forEach(function (c) {
            document.cookie = c.trim().split('=')[0] + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/';
        });
        formContainer.style.display = 'block';
        profileContainer.style.display = 'none';
        form.reset();
    });

    document.getElementById('editButton').addEventListener('click', function () {
        formContainer.style.display = 'block';
        profileContainer.style.display = 'none';
    });

    if (document.cookie) {
        showProfile();
    }
});
