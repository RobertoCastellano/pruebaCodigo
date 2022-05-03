const express = require('express');
const router = express.Router();
const db = require('../config/db');


router.post('/add',async (req, res) => {

	const obj = {
		title: req.params.title,
		release_date: req.params.release_date,
	};
	
	const result = await db('movies').insert(obj);

	//Devolver true or false
	if( result.length > 0 ){
		//true
		return res.json({status:true, data: result[0]});
	}else{
		//false
		return res.json({status:false});
	}
	
});

router.get('/movies', (req, res) => {
    res.render('Favoritos')
})

module.exports= router;