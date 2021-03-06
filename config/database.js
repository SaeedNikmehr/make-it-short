require('dotenv').config()


    module.exports = {
        database:{
            mongodb:{
                url:process.env.MONGO_URL,
                database:process.env.MONGO_DB
            }
        },
        cache:{
            redis:{
                url:process.env.REDIS_URL
            }
        }
    }