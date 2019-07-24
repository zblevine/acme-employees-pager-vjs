const loadData = async () => {
    const response = await fetch('https://acme-users-api-rev.herokuapp.com/api/users/2');
    const data = await response.json();
    const users = data.users;
    console.log(data);
    const firstUser = users[27];
    console.log(`User 0: ${firstUser.firstName} ${firstUser.lastName}, ${firstUser.title}, ${firstUser.email}`)
}

loadData();