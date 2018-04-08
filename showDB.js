const showData = async () => {
    try {
        const response = await fetch('http://localhost:3000/people');
        const val = await response.json();
        document.getElementById("list").innerHTML = [];
        for (let i in val) {
            var myJSON = JSON.stringify(val[i]);
            document.getElementById("list").innerHTML += myJSON;
        }
    }
    catch (e) {
        console.log(e);
    }
}
    const addData = async () =>{
        const userName = document.getElementById("name").value;
        const userSurname = document.getElementById("surname").value;
        const email = document.getElementById("email").value;
        try{
            fetch('http://localhost:3000/people', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                },
                body: JSON.stringify({
                    name: userName,
                    surname: userSurname,
                    email: email,
                }),
            })
                .then(response => response.json())
        } catch(e){
            console.log(e);
        }
}

const changeData = async () => {
    const userName = document.getElementById("changeName").value;
    const userSurname = document.getElementById("changeSurname").value;
    const email = document.getElementById("changeEmail").value;
    let id = document.getElementById("changeId").value;

    try {
        fetch('http://localhost:3000/people/' + id, {
            method: 'PUT',
            body: JSON.stringify({
                name: userName,
                surname: userSurname,
                email: email,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
    } catch (e) {
        console.log(e);
    }
}
const deleteData = async () => {
    const id = document.getElementById("delId").value;
    try {
        fetch('http://localhost:3000/people/' + id, {
            method: 'DELETE',
        })
            .then(response => response.json())
    } catch (e) {
        console.log(e);
    }
}

// function toAdd() {
//     addData(); 
//     showData();
// }

// function toChange() {
//     changeData();
//     showData();
// }

// function toDelete() {
//     deleteData();
//     showData();
// }