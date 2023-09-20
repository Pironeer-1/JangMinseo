const homeModel = require('../models/homeModel.js');
const postModel =require('../models/postModel.js');

module.exports = {
    viewPost: async (req, res) => {
        const postId =req.params.post_id;
        const post = await postModel.getPost(postId);
        const posts = await homeModel.getPosts();
        
        res.render('post.ejs', {post: post, posts: posts});
    },
    createPost: async (req, res) => {
        const posts = await homeModel.getPosts();

        res.render('postCreate.ejs', {posts: posts});
    },
    createNewPost: async (req, res) => {
        const newPost = req.body;
        const result = await postModel.createNewPost(newPost);
        res.redirect(`/post/read/${result.insertId}`);
    },
    deletePost: async (req, res) => {
        const postId =req.params.post_id;
        await postModel.deletePost(postId);

        res.redirect('/');
    },
    updatePost: async (req, res) => {
        const postId =req.params.post_id;
        const post = await postModel.getPost(postId);
        const posts = await homeModel.getPosts();

        res.render('postUpdate.ejs', {post: post, posts: posts});
    },
    updateNewPost: async (req, res) => {
        const postId =req.params.post_id;
        const newPostData = req.body;
        await postModel.updatePost(postId, newPostData);

        res.redirect(`/post/read/${postId}`);
    }
}