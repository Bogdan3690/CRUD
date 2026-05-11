const BASE_URL = "https://jsonplaceholder.typicode.com/"

// отримати всі пости за допомого HTTP-метода GET
//READ

function getAllPosts() {
    return fetch(`${BASE_URL}posts`)
      .then(response => response.json())
}

getAllPosts()
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})

// отримати один пост по ідентифікатору за допомогою HTTP-метода GET
//READ

function getPostById(id) {
    return fetch(`${BASE_URL}posts/${id}`)
      .then(response => response.json())
}

getPostById(41)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})


// створити новий пост за допомогою за допомогою HTTP-метода POST

const newPost = {
    body : 'Hello',
    title : 'My new post',
    userId : 11
}

function createPost(newPost) {
    const options = {
        method : "POST",
        body : JSON.stringify(newPost)
    }
    return fetch(`${BASE_URL}posts`, options)

      .then(response => response.json())
}

createPost(newPost)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})


// оновити існуючий пост по ідентифікатору за допомогою HTTP-метода PUT/PATCH

const updatePost = {
    title : 'update my post'
}

function updatePostById(updatePost, id) {
    const options = {
        method : "PATCH",
        body : JSON.stringify(newPost)
    }
    return fetch(`${BASE_URL}posts/${id}`, options)

      .then(response => response.json())
}

updatePostById(updatePost, 1)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})

// видалити новостворений пост по ідентифікатору за допомогою HTTP-метода DELETE

function deletePostById(id) {
    const options = {
        method : "DELETE"
    }
    return fetch(`${BASE_URL}posts/${id}`, options)

      .then(response => response.json())
}

deletePostById(11)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})