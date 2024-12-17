document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const selectedClass = document.querySelector('input[name="class"]:checked').value;
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Welcome, Adventurer!</h2>
                           <p><strong>Username:</strong> ${username}</p>
                           <p><strong>Email:</strong> ${email}</p>
                           <p><strong>Class:</strong> ${selectedClass}</p>
                           <p>Get ready for your adventure!</p>`;
    
    
    document.getElementById('signupForm').reset();
});