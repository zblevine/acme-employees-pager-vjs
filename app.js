const url = 'https://acme-users-api-rev.herokuapp.com/api/users/'

const loadData = async (page) => {
    const response = await fetch(`${url}${page}`);
    const data = await response.json();
    const users = data.users;
    const tbody = document.querySelector('#table_body')
    // console.log(`${userLastName} ${userFirstName}, ${userEmail }, ${userTitle}`)
    html = '';
    users.forEach(user => {
        html += `<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td>
        <td>${user.title}</td></tr>`
    });

    tbody.innerHTML = html;


}

let currentPageNo = 0;
loadData(currentPageNo);

// cosnt firstPage = 