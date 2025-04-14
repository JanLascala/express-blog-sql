// main require require
const posts = require('../data/posts.js');

//index
function index(req, res) {
    //the whole list here
    //res.json(posts)

    let filteredpost = posts;
    console.log(req);
    //apply filter for request in postman ?title =something request 

    if (req.query.title) {
        console.log('filter the results');
        filteredpost = posts.filter(posts => posts.title.includes(req.query.title));
    }

    res.json(filteredpost);
};
//show

function show(req, res) {


    let post = posts.find(post => post.slug === req.params.slug);

    if (!post) {
        return res.status(404).json({ message: "Post not found" });
    }

    res.json(post);
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

    //get mit slug
    const postsSlug = req.params.slug;
    // find the post mit id
    const postsIndex = posts.findIndex(posts => posts.slug === postsSlug);


    //if not existing formula
    if (postsIndex === -1) {
        return res.status(404).json({
            error: 'post not found',
            message: 'post not found bad slug',
        })
    }


    //removal
    posts.splice(postsIndex, 1);
    //reposting list with destroyed object
    res.json(posts);

    res.sendStatus(204);
}


module.exports = {
    index,
    show,
    store,
    update,
    patch,
    destroy,
}