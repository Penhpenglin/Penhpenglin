let main_box = document.getElementById("main_box");

renderTableList();

// Function to render the user list in the table
function renderTableList() {
    let list = getUserList();
    main_box.innerHTML = '';

    list.forEach(function (item, index) {
        let new_card = document.createElement('div');
        new_card.classList.add('col-3')
        new_card.innerHTML = `
                <div class="col-3">
                <div class="card" style="width: 100%;" >
                <img src="${item.Url}" class="card-img-top" alt="${item.Url}" style="width: 100px" height="100px" border-radius="100px">
                <div class="card-body">
                    <h5 class="card-title"><b>Name   :</b>${item.name}</h5>
                    <p class="card-text">  <b>Age    :</b> ${item.age}</p>
                    <p class="card-text">  <b>City   :</b>${item.city}</p>
                    <p class="card-text">  <b>Email  :</b>${item.email}</p>
                    <p class="card-text">  <b>Phone  :</b>${item.phone}</p>
                    <p class="card-text">  <b>Post   :</b>${item.post}</p>
                    <p class="card-text">  <b>StartDate:</b>${item.startdate}</p>
                    <a href="index.html" class="boxsizing">Student Form</a>
                </div>
                </div>
                </div>
                <br><br>

        `;
        main_box.append(new_card);
    });
}

// Function to retrieve user list from localStorage
function getUserList() {
    let user_list = localStorage.getItem('user_list');
    return user_list ? JSON.parse(user_list) : [];
}