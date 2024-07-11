const fs = require('fs');
const path = require('path');

const usersData = [
  { "id": 1, "name": "Bimbo Davies", "email": "bdavies@gmail.com", "password":"12345678", "role": "admin" },
  { "id": 2, "name": "Tosin Bucknor", "email": "tosca@yahoo.com", "password":"1231145678", "role": "salesrep" },
  { "id": 3, "name": "Angelo Okoro", "email": "angieo@gmail.com", "password":"abcdefght", "role": "admin" },
  { "id": 4, "name": "Rita Spencer", "email": "rispense@yahoo.com", "password":"yejrrign4", "role": "salesmanager" },
  { "id": 5, "name": "Daniel Ogaga", "email": "dhanielo@gmail.com", "password":"teu73oow","role": "salesrep" },
  { "id": 6, "name": "Princess Edeogu", "email": "pricy@yahoo.com", "password":"09876543","role": "salesrep" },
  { "id": 7, "name": "Aishat Attah", "email": "aattah@onebox.co", "password":"mdor9364h","role": "admin" },
  { "id": 8, "name": "Tosin Bucknor", "email": "tosca@yahoo.com", "password":"oapau777","role": "salesrep" },
  { "id": 9, "name": "Usman Yahaya", "email": "usmanu@rockectmail.net", "password":"rwvdbdrj344","role": "salesrep" },
  { "id": 10, "name": "Oreoluwa Smith", "email": "oreoluwa@hotmail.com", "password":"111111111","role": "salesmanager" }
];

const addUserToJSON = (usersData) => {
  const filePath = path.resolve(__dirname, 'users.json');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    let users = [];
    if (data) {
      try {
        users = JSON.parse(data); 
      } catch (error) {
        console.error('Error parsing JSON data:', error);
        return;
      }
    }

    usersData.forEach(user => {
      users.push(user);
    });

    // Write updated data back to users.json
    fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Users added successfully!');
      }
    });
  });
};

addUserToJSON(usersData);

export default usersData;
