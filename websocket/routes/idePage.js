//모듈(모델) 가져오기 -> 컨트롤러에 있음 된당
// const Questions = require('../Models/questionsModel');
// const TestCases = require('../Models/testCasesModel');

//컨트롤러 가져오기

const idePageController = require("../Controllers/idePageController");
var router = require("express").Router();

router.get("/:Lv", idePageController.send_questions);

module.exports = router;
