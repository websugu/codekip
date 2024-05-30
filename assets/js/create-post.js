document.getElementById('fileUpload').addEventListener('change', function(event) {
    const filePreview = document.getElementById('filePreview');
    const files = [...event.target.files];

    files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';

            let fileTypeIcon = '';
            if (file.type.startsWith('image/')) {
                fileTypeIcon = `<img src="${e.target.result}" alt="file">`;
            } else {
                fileTypeIcon = `<span>${file.name}</span>`;
            }

            fileItem.innerHTML = `
                ${fileTypeIcon}
                <button onclick="removeFile(${index})">&times;</button>
            `;
            filePreview.appendChild(fileItem);
        };
        reader.readAsDataURL(file);
    });

    window.files = files;
});

function removeFile(index) {
    window.files.splice(index, 1);
    const fileUpload = document.getElementById('fileUpload');
    const dataTransfer = new DataTransfer();

    window.files.forEach(file => dataTransfer.items.add(file));
    fileUpload.files = dataTransfer.files;

    const filePreview = document.getElementById('filePreview');
    filePreview.innerHTML = '';

    window.files.forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = function(e) {
            const fileItem = document.createElement('div');
            fileItem.className = 'file-item';

            let fileTypeIcon = '';
            if (file.type.startsWith('image/')) {
                fileTypeIcon = `<img src="${e.target.result}" alt="file">`;
            } else {
                fileTypeIcon = `<span>${file.name}</span>`;
            }

            fileItem.innerHTML = `
                ${fileTypeIcon}
                <button onclick="removeFile(${index})">&times;</button>
            `;
            filePreview.appendChild(fileItem);
        };
        reader.readAsDataURL(file);
    });
}

document.getElementById('publishBtn').addEventListener('click', function() {
    
    // 
    const username = document.getElementById('username').value;
    const content = document.getElementById('postContent').value;
    

    if (!username || !content) {
        alert('Please fill in all required fields.');
        return;
    }

    const postData = {
        username: username,
        content: content,
        files: window.files
    };

    console.log('Post Data:', postData);
    // window.location.href='post-created.html';
    const allowedUsernames = ['@ ahmed', '@ daouda', '@ karamoko', '@ dramane']; // List of allowed usernames
    if (allowedUsernames.includes(username)) {
        // Navigate to Google.com
        window.location.href = 'post-created.html';
    } else {
        document.getElementById('validationMessage').innerHTML='Username not found! create. <i class="fa-solid fa-circle-xmark" style="color: #e0271a;"></i>';
        validationMessage.style.color = 'red';
    }
});

document.getElementById('cancelBtn').addEventListener('click', function() {
    window.location.href='index.html';
    // document.getElementById('username').value = '@ ';
    // document.getElementById('postContent').value = '';
    // document.getElementById('fileUpload').value = '';
    // document.getElementById('filePreview').innerHTML = '';
    // document.getElementById('privacySelect').value = 'public';
});






// input username (@) required

document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('username');
    const readOnlyChar = '@ '; // Example read-only character
    inputField.value = readOnlyChar; // Set the initial read-only character

    inputField.addEventListener('keydown', (event) => {
        if (inputField.selectionStart === 0) {
            event.preventDefault(); // Prevent modifying the first character
            inputField.selectionStart = inputField.selectionEnd = 1; // Move cursor to the second position
        }
    });

    inputField.addEventListener('input', (event) => {
        if (!inputField.value.startsWith(readOnlyChar)) {
            inputField.value = readOnlyChar + inputField.value.slice(1); // Ensure the first character stays the same
        }
    });


    // 
    const allowedUsernames = ['@ ahmed', '@ daouda', '@ karamoko', '@ dramane']; // List of allowed usernames
    const usernameInput = document.getElementById('username');
    const validationMessage = document.getElementById('validationMessage');

    usernameInput.addEventListener('input', () => {
        const enteredUsername = usernameInput.value.trim();
        if (allowedUsernames.includes(enteredUsername)) {
            validationMessage.innerHTML = 'username is valid. <i class="fa-solid fa-circle-check" style="color: #17a139;"></i>';
            validationMessage.style.color = 'green';
        } else {
            validationMessage.innerHTML = 'Username not found. <i class="fa-solid fa-circle-xmark" style="color: #e0271a;"></i>';
            validationMessage.style.color = 'red';
        }
    });

        
});

// no inspect

document.addEventListener('contextmenu',function(event) {
   alert('No inspect for secure purpose');
   event.preventDefault();
});

// page loading
