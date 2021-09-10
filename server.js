const fastify = require('fastify')();

fastify.get('/getUserCount', async (request, reply) => {
    return { count: 100 }
})

fastify.post('/addUserDetails', async (request, reply) => {
    console.log(request.body);
    return { "message": "User Details added successfully!" }
})

fastify.put('/updateUserDetails/:id', async (request, reply) => {
    console.log(request.params);
    console.log(request.body);
    return { "message": "User Details updated successfully!" }
})


// Run the server!
const start = async () => {
try {
    await fastify.listen(3000)
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}
}
start()