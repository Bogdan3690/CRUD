const BASE_URL = "https://jsonplaceholder.typicode.com/"

// отримати всі пости за допомого HTTP-метода GET
//READ

// function getAllPosts() {
//     return fetch(`${BASE_URL}posts`)
//       .then(response => response.json())
// }

async function getAllPosts(params) {
    const response = await fetch(`${BASE_URL}posts`)
    const posts = await response.json()
    return posts
}

getAllPosts()
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})

// отримати один пост по ідентифікатору за допомогою HTTP-метода GET
//READ

// function getPostById(id) {
//     return fetch(`${BASE_URL}posts/${id}`)
//       .then(response => response.json())
// }

async function getPostById(id) {
    const response = await fetch(`${BASE_URL}posts/${id}`)
    const postById = await response.json()
    return postById
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

// function createPost(newPost) {
//     const options = {
//         method : "POST",
//         body : JSON.stringify(newPost)
//     }
//     return fetch(`${BASE_URL}posts`, options)

//       .then(response => response.json())
// }

async function createPost(newPost) {
        const options = {
        method : "POST",
        body : JSON.stringify(newPost)
    }
    const response = await fetch(`${BASE_URL}posts`, options)
    const result = await response.json()
    return result
}

createPost(newPost)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})


// оновити існуючий пост по ідентифікатору за допомогою HTTP-метода PUT/PATCH

const updatePost = {
    title : 'update my post'
}

// function updatePostById(updatePost, id) {
//     const options = {
//         method : "PATCH",
//         body : JSON.stringify(newPost)
//     }
//     return fetch(`${BASE_URL}posts/${id}`, options)

//       .then(response => response.json())
// }

async function updatePostById(updatePost, id) {
        const options = {
        method : "PATCH",
        body : JSON.stringify(newPost)
    }
    const response = await fetch(`${BASE_URL}posts/${id}`, options)
    const updatedPost = await response.json()
    return updatedPost
}

updatePostById(updatePost, 1)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})

// видалити новостворений пост по ідентифікатору за допомогою HTTP-метода DELETE

// function deletePostById(id) {
//     const options = {
//         method : "DELETE"
//     }
//     return fetch(`${BASE_URL}posts/${id}`, options)

//       .then(response => response.json())
// }

async function deletePostById(id) {
        const options = {
        method : "DELETE"
    }
    const response = await fetch(`${BASE_URL}posts/${id}`, options)
    const deletedPost = await response.json()
    return deletedPost
}

deletePostById(11)
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})





async function fetchThreePosts(arr) {
    const arrOfPromises =  arr.map(async (id) => {
        const response = await fetch(`${BASE_URL}posts/${id}`)
        return response.json()
    })
    const posts = await Promise.all(arrOfPromises)
    return posts
}

fetchThreePosts([1,5,10])
.then((result) => {console.log(result)})
.catch((error) => {console.log(error);
})
