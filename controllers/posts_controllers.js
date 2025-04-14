//require myseql
const connection = require('../data/db.js')

// main require require
//const posts = require('../data/posts.js');

//index
function index(req, res) {
    const sql = 'SELECT * FROM posts';

    connection.query(sql, (err, results) => {
        if (err) return res.status(500).json({ error: 'database query failed' });
        res.json(results);
        //console.log(results);
        //res.send('return all blogs')
    })


};
//show

function show(req, res) {
    const id = req.params.id
    const sql = 'SELECT * FROM posts WHERE id = ?';



    connection.query(sql, [id], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database query failed' });
        if (results.length === 0) return res.status(404).json({ error: 'post not found' });
        res.json(results[0]);
    });

};

//store
function store(req, res) {

    const newSlug = req.body.title.toLowerCase().replace(/\s+/g, '-');

    const newPost = {
        title: req.body.title,
        slug: newSlug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,

    }
    posts.push(newPost);

    // control
    console.log(posts);

    res.status(201);
    res.json(newPost);


};
//update
function update(req, res) {
    //find the post bu slug
    let post = posts.find(post => post.slug === req.params.slug);

    // error in case wrong slug
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    //require che modifications 
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    //check
    console.log(posts);
    //res the updated posts
    res.json(post);
};


//modify or patch
function patch(req, res) {
    //find the post bu slug
    let post = posts.find(post => post.slug === req.params.slug);

    // error in case wrong slug
    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }
    //require che modifications 
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;
    //check
    console.log(posts);
    //res the updated posts
    res.json(post);
};


//destroy!! destroy!!
function destroy(req, res) {

    const { id } = req.params;

    connection.query('DELETE FROM posts WHERE id =?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'failed to delete Post!' });
        res.sendStatus(204);
    });



}


module.exports = {
    index,
    show,
    store,
    update,
    patch,
    destroy,
}