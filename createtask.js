const firebaseConfig = {
    apiKey: "AIzaSyBu7ow3Sa_niFT7xH50fKVrBWVLKJBefMU",
    authDomain: "royalbustani-3ea13.firebaseapp.com",
    databaseURL: "https://royalbustani-3ea13-default-rtdb.firebaseio.com",
    projectId: "royalbustani-3ea13",
    storageBucket: "royalbustani-3ea13.appspot.com",
    messagingSenderId: "540706047243",
    appId: "1:540706047243:web:47d3dacb90fff64fdc8e0e",
    measurementId: "G-NLEG1VT0W8"
};

firebase.initializeApp(firebaseConfig);

var totalItem;
var maxCode;
var code;

function storeTask(event) {
    event.preventDefault()

    var task = document.getElementById("task").value;
    var desc = document.getElementById("desc").value;
    document.getElementById("task").value = ""
    document.getElementById("desc").value = ""

    //storing data on the database
    firebase
        .database()
        .ref("tasklist/" + code)
        .set({
            task: task,
            desc: desc,
            status: "pending",

        })
    document.getElementById("tasks-header").insertAdjacentHTML(
        "afterend",

        `
   <div class="task-item" id="${code}">
   <div class="data" id="${task}">
   <button class="done" id="done" onclick="changeStatus('${code}')"><i class="far far-check-circle"></i> </button>
   <h2 class="task">${task}</h2>
   <p class="desc">${desc}</p>
   <p id="pending"></p>
   </div>
  
   <div class="buttons">
   
   <button class="button edit" id="editdata">EDIT TASK</button>
   <button class="button delete" id="deletedata" onclick="deleteTask('${code}')">DELETE TASK</button>
   
   </div>
   
   
   </div>
   
   
   `

    )

}
function deleteTask(code) {
    firebase
        .database()
        .ref("tasklist/" + code)
        .remove();

    document.getElementById(code).remove()

    firebase
        .database()
        .ref("tasklist/" + code)
        .update({
            totalItem: totalItem - 1,
        });


}
//codefor  COUNTRIES API 

function getCountry(name) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${name}`);


    request.addEventListener("load", function () {
        if (request.status === 200) { // Check if the request was successful.
            const [data] = JSON.parse(this.responseText);

            // Create the HTML content for displaying country information.
            const html = `
                <div class="country">
                    <img class="country_img" src="${data.flags.png}">
                    <div class="content">
                        <h3 class="country-name">${data.name.common}</h3>
                        <h4>${data.region}</h4>
                        <p>Population: ${data.population}</p>
                        <p>Capital: ${data.capital[0]}</p>
                        <p>Language: ${Object.values(data.languages).join(', ')}</p>
                    </div>
                </div>`;

            // Insert the HTML content into an element with id 'createdata'.
            document.getElementById('createdata').insertAdjacentHTML('afterend', html);
        } else {
            console.error('Failed to fetch country data.');
        }
    });

    request.send();
}

getCountry('kenya');




