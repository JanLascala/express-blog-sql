//basic export for routers
const express = require('express');
const router = express.Router();
//export posts jinc
//const posts = require('../data/posts.js')
//export controllers
const postsControllers = require('../controllers/posts_controllers.js')


//index
router.get('/', postsControllers.index);

//show
router.get('/:id', postsControllers.show);

//store
router.post('/', postsControllers.store);

//update
router.put('/:id', postsControllers.update);

// patch/modify
router.patch('/:id', postsControllers.patch);

//destroy
router.delete('/:id', postsControllers.destroy);

module.exports = router;
