fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.body)
    .then(body => {const reader = body.getReader})
console.log(reader)