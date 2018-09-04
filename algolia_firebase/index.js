const algoliasearch = require('algoliasearch');
const dotenv = require('dotenv');
const firebase = require('firebase');

dotenv.load();

console.log("FIREBASE", process.env.FIREBASE_DATABASE_URL);

firebase.initializeApp({
    databaseURL: process.env.FIREBASE_DATABASE_URL
});
const database = firebase.database();

const algolia = algoliasearch(
    process.env.ALGOLIA_APP_ID,
    process.env.ALGOLIA_API_KEY
);

const index = algolia.initIndex(process.env.ALGOLIA_INDEX_NAME);

// Promise.all([
//     database.ref('/contacts').push({
//         name: 'Josh',
//         city: 'San Francisco'
//     }),
//     database.ref('/contacts').push({
//         name: 'Tim',
//         city: 'Paris'
//     })]).then(function() {
//         console.log("Contacts added to Firebase");
//         process.exit(0);
//     }).catch(function(error) {
//         console.error("Error adding contacts to Firebase", error);
//         process.exit(1);
//     });

database.ref('/contacts').once('value', contacts => {
    const records = [];
    contacts.forEach(contact => {
        const childKey = contact.key;
        const childData = contact.val();
        childData.objectID = childKey;
        records.push(childData);
    });

    index
        .saveObjects(records)
        .then(() => {
            console.log('Contacts imported into Algolia');
            process.exit(0);
        })
        .catch(error => {
            console.error('Error when importing contact into ALgolia', error);
            process.exit(1);
        });
});