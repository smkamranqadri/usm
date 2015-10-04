/// <reference path="../../typings/tsd.d.ts" />

import * as express          from "express";

import * as userController   from '../controllers/userController';

let router : express.Router = express.Router();

router.get('/partials/:partial', (req : express.Request, res : express.Response) => {
  res.render('partials/' + req.params.partial);
});

router.get('/', (req : express.Request, res : express.Response) => {
  res.render('index', {title : 'User Managment System'});
});

router.get('/user', userController.getUsers);

router.get('/user/:user', userController.retriveUser);

router.post('/user', userController.createUser);

router.put('/user', userController.updateUser);

router.delete('/user', userController.deleteUser);

module.exports = router;
