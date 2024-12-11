// document.getElementById('profile-form').addEventListener('submit', function(event) {
//     event.preventDefault();
//     let name = document.getElementById('name').value;
//     let interest = document.getElementById('interest').value;

//     let person = {
//         name: name,
//         interest: interest,
//         gender: gender,
//         profession: profession
//     };

//     localStorage.setItem(name, JSON.stringify(person));
//     alert('Person added successfully!.');
// });




function searchinterest() {
    let searchValue = document.getElementById('searchInterest').value;
    let cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    let found = false;  

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);

        try {
            let storedObject = JSON.parse(localStorage.getItem(key));

            if (storedObject.interest === searchValue) {
                const card = document.createElement('div');
                card.className = 'card';
                card.innerHTML = `
                    <div class="card-content">
                        <h3>${storedObject.name}</h3>
                        <p>Interest: ${storedObject.interest}</p>
                        <button type="submit">Connect</button>
                    </div>
                `;
                cardContainer.appendChild(card);
                found = true;  
            }
        } catch (error) {
            console.warn(`Skipping key ${key} due to parsing error:`, error);
        }
    }

    if (!found) {
        const noMatchCard = document.createElement('div');
        noMatchCard.className = 'card';
        noMatchCard.innerHTML = `
            <div class="card-content">
                <h2>No matches found</h2>
                <p>Try searching for another interest.</p>
            </div>
        `;
        cardContainer.appendChild(noMatchCard);
    }
}



