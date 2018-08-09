const uuidv4 = require('uuid/v4');

const createUser = ({name=""} = {}) => (
    {
        id: uuidv4(),
        name
    }
)

const createUrl = ({url="", sender=""}) => (
    {
        id:uuidv4(),
        time: getTime(new Date(Date.now())),
        url,
        sender
    }
)

const createVideo = ({name="Community", users:[]} = {})=>(
    {
        id:uuidv4(),
        name,
        users
    }
)

const getTime = (date) => {
    return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`;
}

module.exports = {
    createUrl,
    createUser,
    createVideo
}