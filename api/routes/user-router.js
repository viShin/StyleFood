'use strict'

const express    = require('express');
const router     = express.Router();
const controller = require('../controller/user-controller');
const auth = require('../middleware/authentication');

let _ctrl = new controller();

router.get('/', auth, _ctrl.get);
router.get('/:id', auth, _ctrl.getById);
router.post('/', _ctrl.post);
router.post('/authenticate', _ctrl.authenticate);
router.put('/:id', auth, _ctrl.put);
router.delete('/:id', auth, _ctrl.delete);

module.exports = router;