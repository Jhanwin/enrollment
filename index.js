console.log('hello');

//pages
var home = document.getElementById('home-page');
var enrollFormPage = document.getElementById('enrollForm-page');
var enrollPage = document.getElementById('btn-enroll');

enrollPage.addEventListener('click',() => {
    home.style.display = 'none';
    enrollFormPage.style.display = 'block';
});




//button
var submit = document.getElementById('btn-submit');
var back = document.getElementById('btn-back');

back.addEventListener('click',() => {
    home.style.display = 'block';
    enrollFormPage.style.display = 'none';
});

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdXyN9-w-tz1RcuyNk7YNfoUisOgbc66c",
  authDomain: "mydatabase-38ede.firebaseapp.com",
  projectId: "mydatabase-38ede",
  storageBucket: "mydatabase-38ede.appspot.com",
  messagingSenderId: "354932493429",
  appId: "1:354932493429:web:7f1e5028ec4954bf30fc3c",
  measurementId: "G-6NLG6DTD7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import {getDatabase,get,ref,set,child,update,remove}
from "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";

var db = getDatabase()

submit.addEventListener('click',() => {

    //inputs
    var fname = document.getElementById('firstname');
    var mname = document.getElementById('middlename');
    var lname = document.getElementById('lastname');
    var age = document.getElementById('age');
    var bdate = document.getElementById('Birthdate');
    var grade = document.getElementById('grade');
    var guardian = document.getElementById('guardianname');
    var lrn = document.getElementById('lrn');
    
    var student = {
        Name:fname.value+" "+mname.value+" "+lname.value,
        Age:age.value,
        Birthday:bdate.value,
        GradeToEnroll:grade.value,
        NameOfGuardian:guardian.value,
        LRN:lrn.value
    }

    get(child(ref(db),'STUDENT/')).then((snapshot) => {
        var id = snapshot.size+1;

        set(ref(db,'STUDENT/'+id),student).then(()=>{
                alert('YOU ARE SUCCESSFULLY ENROLL');
            }).catch(()=>{
                alert('something error');
            })

    });
        console.log(student);
    });
