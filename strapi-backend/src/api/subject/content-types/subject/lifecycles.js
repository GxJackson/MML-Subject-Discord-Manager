module.exports = {
    beforeCreate(event) {
        functionName(event);
    },
    beforeUpdate(event) {
        functionName(event);
    }
};

    // Do something...
    async function functionName(event) {
        console.log(event);
    };