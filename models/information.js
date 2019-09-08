const mongoose = require('mongoose');

var InformationSchema = new mongoose.Schema({
	PageNo: {type: Number},
	IdNo:{type: Number},
	Character_Name: {type: String},
    Level: {type: Number},
	Job_Title: {type: String},
	Class: {type: String},
	Category: {type: String},
	EffectLevel: {type: Number},
	Location: {type: String},
	Chara_Skill: {type: String},
	EquipmentTab: {type: String},
	UseTab: {type: String},
	EtcTab: {type: String},
	SetupTab: {type: String},
	UntradableItem: {type: String},
	ItemmoveablewithinAccount: {type: String},
	Note: {type: String},
	
});

var Information = module.exports = mongoose.model('Information', InformationSchema);
