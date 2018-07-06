const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://one-time-password-ec7d9.firebaseio.com"
});

exports.createUser = functions.https.onRequest(createUser);
