# railway-mongoose

A Railwayjs Extension for the mongoose ODM. 

Sets up mongoose, connects it to the mongodb database, and places mongoose in the global namespace. 

## Installation
    npm install railway-mongoose

## Configuration

Railway-mongoose uses database configuration settings from ``config/mongoose.json`` in a manner similar to how jugglingdb uses ``config/database.json``; howbeit with some differences in the JSON keys. for example:


    { 
        "development": { 
            "url": "mongodb://localhost:27017/myappdevdb" 
        } 
        , "production": { 
            "url": "mongodb://localhost:27017/myappproductiondb" 
        }
        , "test": { 
            "url": "mongodb://localhost:27017/myapptestdb" 
        } 
    } 

## Defining models

Models and their schemas should be defined in model files placed in ``app/models``. 
For instance to define a ``Post`` model, the following code can be placed in the file ``app/models/Post.js``

    var postSchema = new mongoose.Schema({
      title: String
      , author: String
      , body: String
      , date_created: {type:Date, default:Date.now}
    });

    var postModel = mongoose.model('Post', postSchema);
    postModel.modelName =  'Post'; // this is for some features inside railway (helpers, etc)
    module.exports = postModel
