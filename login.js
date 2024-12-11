// Add person to local storage
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let interest = document.getElementById('interest').value;

    let person = {
        name: name,
        interest: interest,
        gender: gender,
        profession: profession
    };

    localStorage.setItem(name, JSON.stringify(person));
    alert('Person added successfully!.');
});
