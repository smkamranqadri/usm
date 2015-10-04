/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var userController = require('../controllers/userController');
var router = express.Router();
router.get('/partials/:partial', function (req, res) {
    res.render('partials/' + req.params.partial);
});
router.get('/', function (req, res) {
    res.render('index', { title: 'User Managment System' });
});
router.get('/user', userController.getUsers);
router.get('/user/:user', userController.retriveUser);
router.post('/user', userController.createUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);
module.exports = router;
