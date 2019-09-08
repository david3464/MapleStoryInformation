var express = require('express');
var router = express.Router();

var Information = require('../models/information');


router.get('/', function(req, res, next) {
        res.render('1-users/index');
});

router.get('/characterinformation', function(req, res, next) {
        Information.find((err, docs) => {
                if (!err) {
                    res.render('1-users/1-1charainfo', {charainfo: docs});
                }else {
                    console.log('Error in retrieving employee list :' + err);
                }
        });
});

router.get('/characterinfoadd', function(req, res, next) {
        res.render('1-users/1-2charainfoadd');
});

router.post('/characterinfoadd', function(req, res, next) {
        // console.log(req.body)
         if(req.body._id == "")
            insertCharainfo(req,res);
         else
            updateCharainfo(req,res);
});

function insertCharainfo(req, res) {
        var info = new Information();
        info.PageNo = req.body.PageNo;
        info.IdNo = req.body.IdNo;
        info.Character_Name = req.body.Character_Name;
        info.Level = req.body.Level;
        info.Job_Title = req.body.Job_Title;
        info.Class = req.body.Class;
        info.Category = req.body.Category;
        info.EffectLevel = req.body.EffectLevel;
        info.Location = req.body.Location;
        info.Chara_Skill = req.body.Chara_Skill;
        info.save((err, doc)=>{
                if(!err){ 
                        res.redirect('/users/characterinformation');
                } else {
                        res.send('Error Occurred');
                }
        });
}

function updateCharainfo(req, res) {
        Information.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
            if (!err) { res.redirect('/users/characterinformation'); 
            } else {
                    console.log('Error during record update : ' + err);
            }
        });
    }


router.get('/characterinfoadd/:id', function(req, res, next) {
        Information.findById(req.params.id,(err,doc)=>{
                if(!err){
                         res.render('1-users/1-2charainfoadd',{
                         information: doc
                })  
                }
        });
});

router.post('/characterinfoadd/:id', function(req, res, next) {
        Information.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
                if (!err) { 
                           res.redirect('/users/characterinformation'); }
                else {
                      console.log('Error during record update : ' + err);
                }
            }); 
});

router.get('/characterinformation/delete/:id', (req, res) => {
        Information.findByIdAndRemove(req.params.id, (err) => {
                if (!err) {
                           res.redirect('/users/characterinformation');
                           console.log('Delete Corresponding ID information');
                }else{
                      console.log('Error in employee delete :' + err);
                }
        });
});

router.get('/characterequipment', function(req, res, next) {
        res.render('1-users/2characterequipment');
});

router.get('/characterpets', function(req, res, next) {
        res.render('1-users/3characterpets');
});

router.get('/itemprice', function(req, res, next) {
        res.render('1-users/4itemprices');
});

router.get('/abbreviation', function(req, res, next) {
        res.render('1-users/5abbreviation');
});

router.get('/more', function(req, res, next) {
        res.render('1-users/6more');
});

router.get('/addinfo', function(req, res, next) {
        res.render('1-users/7additionalinformation');
});

module.exports = router;