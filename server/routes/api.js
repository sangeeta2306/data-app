const express = require('express');
const router = express.Router();
var mysql = require('mysql');
var fs = require('fs');
var data ;

var connection = mysql.createConnection({
	host: 'localhost',
	user : 'root',
	password : 'Newuser123',
	database: 'master_data'
});

//no need to call connection.connect() and connection.end(). This is implicitly called 
//by the node server itself.

router.get('/',(req,res)=>{
   res.send('API works!!');
});

router.get('/data', function (req, res) {   
		var sql = "SELECT * FROM master_tbl"; 
    	connection.query(sql,function(err,results,fields){
    	if(err) throw console.log(err);
    	return res.send({ error: false, data: results, message: 'Got the list' });
    });
}); 

module.exports = router;
