const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp()
exports.checkAlias = functions.https.onCall((data,context)=>{
    // data paremter = every data called with this function
    // context paramter = context of the funciton called like userAuthStatus
    const ref = admin.firestore().collection('user').doc(data.slug)
    return ref.get().then(doc=>{
        return {
            unique: !doc.exists
        }
    })
    .catch(err=>{
        throw new functions.https.HttpsError('failed to connect')
    })
})