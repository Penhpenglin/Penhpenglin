// Get input fields and table body
let input_name = document.getElementById('input_name');
let input_age = document.getElementById('input_age');
let input_city = document.getElementById('input_city');
let input_email = document.getElementById('input_email');
let input_phone = document.getElementById('input_phone');
let input_post = document.getElementById('input_post');
let input_startdate = document.getElementById('input_startdate');
let input_profile = document.getElementById('input_profile');
let user_list_table = document.querySelector('#user_list_table tbody');

// Initialize user list from localStorage
let user_list = getUserList();
renderTableList();

// Function to handle form submission
function onSubmit() {
    let name = input_name.value.trim();
    let age = input_age.value.trim();
    let city = input_city.value.trim();
    let email = input_email.value.trim();
    let phone = input_phone.value.trim();
    let post = input_post.value.trim();
    let startdate = input_startdate.value.trim();
    let Url = input_profile.value.trim();

    if (name === '' || age === '') {
        alert('Please enter your name and age');
        return;
    }

    // Retrieve existing user list
    let old_list = getUserList();

    // Add new user to the list
    old_list.push({ name, age, city, email, phone, post, startdate,Url });

    // Save updated list to localStorage
    localStorage.setItem("user_list", JSON.stringify(old_list));

    // Re-render table
    renderTableList();

    // Clear form
    clearForm();
}

// Function to render the user list in the table
function renderTableList() {
    let list = getUserList();
    user_list_table.innerHTML = '';

    list.forEach(function (item, index) {
        let new_tr = document.createElement('tr');
        new_tr.innerHTML = `
            <tr align="center">
                <td>${index + 1}</td>
                <td>${item.name}</td>
                <td>${item.age}</td>
                <td>${item.city}</td>
                <td>${item.email}</td>
                <td>${item.phone}</td>
                <td>${item.post}</td>
                <td>${item.startdate}</td>
                <td><img style="width: 60px" height="60px" " src="${item.Url}">
                </td>
                <td>
                    <input type="button" value="Edit" onclick="editItem(${index})">
                    <input type="button" value="Delete" onclick="deleteItem(${index})">
                </td>
            </tr>
        `;
        user_list_table.append(new_tr);
    });
}

// Function to retrieve user list from localStorage
function getUserList() {
    let user_list = localStorage.getItem('user_list');
    return user_list ? JSON.parse(user_list) : [];
}

// Function to clear the form inputs
function clearForm() {
    input_name.value = '';
    input_age.value = '';
    input_city.value = '';
    input_email.value = '';
    input_phone.value = '';
    input_post.value = '';
    input_startdate.value = '';
    input_profile.value = '';
    input_name.focus();
}

// Function to delete an item
function deleteItem(index) {
    if (confirm("Do you want to delete this entry?")) {
        let old_list = getUserList();
        old_list.splice(index, 1);
        localStorage.setItem("user_list", JSON.stringify(old_list));
        renderTableList();
    }
}

// Function to edit an item (Optional Feature)
function editItem(index) {
    let old_list = getUserList();
    let user = old_list[index];

    input_name.value = user.name;
    input_age.value = user.age;
    input_city.value = user.city;
    input_email.value = user.email;
    input_phone.value = user.phone;
    input_post.value = user.post;
    input_startdate.value = user.startdate;
    input_profile.value = user.Url;

    // Remove the item from the list and update localStorage
    old_list.splice(index, 1);
    localStorage.setItem("user_list", JSON.stringify(old_list));

    // Re-render the table
    renderTableList();
}






