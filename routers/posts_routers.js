//basic export for routers
const express = require('express');
const router = express.Router();
//export posts jinc
const posts = require('../data/posts.js')
//export controllers
const postsControllers = require('../controllers/posts_controllers.js')


//index
router.get('/', postsControllers.index);

//show
router.get('/:slug', postsControllers.show);

//store
router.post('/', postsControllers.store);

//update
router.put('/:slug', postsControllers.update);

// patch/modify
router.patch('/:slug', postsControllers.patch);

//destroy
router.delete('/:slug', postsControllers.destroy);

module.exports = router;
