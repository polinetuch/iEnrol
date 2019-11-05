// import React, { Component } from 'react';
// var mongo = require('mongodb');
// var assert = require('assert');

// var url = 'mongodb://localhost:21707/ienrol';

// router.get('/', function(req, res, next) {
//     res.render('index');
// });

// router.get('/get-data', function(req, res, next) {
//     var enrollmentArray = [];
//     mongo.connect(url, function(err, db) {
//         // using assert to check if there is an error
//         // or there is no data at all
//         assert.equal(null, err);
//         var cursor = db.collection('enrollment').find();
//         cursor.forEach(function(data, error) {
//             assert.equal(null, error);
//             enrollmentArray.push(data);
//         }, function() {
//             db.close();
//             res.render('index', {item: enrollmentArray});
//         })
//     })
// });

// router.post('/insert', function(req, res, next) {
//     const item = {
//         name: req.body.name,
//         age: req.body.age,
//         gender: req.body.gender,
//         father: req.body.father,
//         mother: req.body.mother
//     }

//     mongo.connect(url, function(err, db) {
//         assert.equal(null, err);
//         // accessing the database using collection enrollment
//         db.collection('enrollment').insertOne(item, function(errm, result) {
//             assert.equal(null, err);
//             console.log("New enrollment inserted");
//             db.close();
//         })
//     })
// });

// router.post('/delete', function(req, res, next) {
    
// })

// // class Admin extends Component {

//   // this.state = {
//   //   name: '',
//   //   age: '',
//   //   gender: '',
//   // },

//     render() {
//         return(
//           <>
//             <h1>Enrol now</h1>
//             <section className="insert">
//               <form action="/insert" method="post">
//                 <div className="input">
//                   <label for={this.name}>Name:</label>
//                   <input type="text" id={this.name} name="name"/>
//                 </div>
//                 <div className="input">
//                   <label for={this.age}>Age</label>
//                 </div>
//               </form>
//             </section>
//             </>
//         )
//     }
// // }

// export default Admin;