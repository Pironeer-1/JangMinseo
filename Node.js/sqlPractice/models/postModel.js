require('dotenv').config();
const { populate } = require('dotenv');
const { query } = require('express');
const mysql = require('mysql2/promise');

// create the connection to database
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

module.exports = {
    getPost: async (postId) => {
        const query = 'SELECT * FROM Posts WHERE post_id=?';
        const post = await db.query(query, [postId]); // ? 뒤
        return post[0][0];
    },
    createNewPost: async (newPost) => {
      const query = 'INSERT INTO Posts(title, content) VALUES(?, ?);';
      const creatdNewPost = await db.query(query, [newPost.title, newPost.content]);

      return creatdNewPost[0];
    },
    deletePost: async (postId) => {
      const query = 'DELETE FROM Posts WHERE post_id=?;';
      await db.query(query, [postId]);
    },
    updatePost: async (postId, newPostData) => {
      const query = 'UPDATE Posts SET title=?, content=? WHERE post_id=?;';
      await db.query(query, [newPostData.title, newPostData.content, postId]);
    }
}