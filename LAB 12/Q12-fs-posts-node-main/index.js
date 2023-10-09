const fs = require('fs');
const path = require('path');

// create a directory
fs.mkdir(path.join(__dirname, '/posts'), (err) => {
  if (err) {
    console.log(err);
    console.log('folder with that name already exists');
    return;
  }
  console.log('posts folder created');
});





// node index.js  #create a posts directory
//  node createPost.js  #create a blogPost.txt file
//  node updatePost.js  #update the file
//  node readPost.js  #read contents from the file
//  node deletePost.js  #delete the post file