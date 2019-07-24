const url = 'https://acme-users-api-rev.herokuapp.com/api/users/'

let currentPageNo = '';
const loc = location.href;
if (loc.includes('#') && loc.split('#').length === 2) {
    currentPageNo = loc.split('#')[1];
}

const loadData = async (page) => {
    const response = await fetch(`${url}${page}`);
    const data = await response.json();
    const users = data.users;
    const tbody = document.querySelector('#table_body')
    // console.log(`${userLastName} ${userFirstName}, ${userEmail }, ${userTitle}`)
    let html = '';
    users.forEach(user => {
        html += `<tr><td>${user.firstName}</td><td>${user.lastName}</td><td>${user.email}</td>
        <td>${user.title}</td></tr>`
    });

    tbody.innerHTML = html;

    const curr = currentPageNo ? currentPageNo : 0;
    const prev = curr > 0 ? curr - 1 : curr;
    const last = Math.floor((data.count - 0.1) / 50);
    const next = curr < last ? curr * 1 + 1 : curr;

    document.querySelector('#prePage').innerHTML = `<a href='#${prev ? prev : ''}'>Previous</a>`;
    document.querySelector('#currentPage').innerHTML = curr;
    document.querySelector('#nextPage').innerHTML = `<a href='#${next}'>Next</a>`;
    document.querySelector('#lastPage').innerHTML = `<a href='#${last}'>Last</a>`;
}

window.addEventListener('hashchange', () => {
    currentPageNo = location.hash.split('#')[1];
    if (!currentPageNo) currentPageNo = '';
    loadData(currentPageNo);
});

//let currentPageNo = 0;

loadData(currentPageNo);