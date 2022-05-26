const createPost = document.getElementById('createPost')
const inputBackground = document.getElementById('inputBackground')
const close = document.getElementById('close')
createPost.addEventListener('click', () => {
    inputBackground.style.display =" block";
    image.value = imgURL
    title.value = ''
    content.value = ''
})
close.addEventListener('click', () => {
    inputBackground.style.display = 'none'
})

// post details
let imgURL = 'src/imgs/postImage.jpg'
let title = document.getElementById('title')
let image = document.getElementById('image')
let content = document.getElementById('content')

// create post
const createFullPost = (title, image, content) =>{
    //create post box
    let postBox = document.createElement('div')
    postBox.className = 'postBox'
    //create image scr
    let link = document.createElement('img')
    link.setAttribute("src", image)
    postBox.insertAdjacentElement('afterbegin', link)
    //create post content
    let postContent = document.createElement('div')
    postContent.className = 'postContent'
    link.insertAdjacentElement('afterend', postContent)
    //create post title
    let h3 = document.createElement('h3')
    h3.innerHTML = title
    postContent.appendChild(h3)
    //create post content
    let p = document.createElement('p')
    p.innerHTML = content
    postContent.appendChild(p)

    //add post in body
    let postArr  = [title, image, content]
    localStorage.setItem(title, JSON.stringify(postArr))
    
    let postGrid = document.querySelector('.post-gird')
    postGrid.appendChild(postBox)
}

// Add post
const post = document.getElementById('submit')
post.addEventListener('click', function(e) {
    let title = document.getElementById('title').value
    let image = document.getElementById('image').value
    let content = document.getElementById('content').value
    if(!title || !image || !content){
        alert('Content cant not be empty')
    }else{
        
        createFullPost(title, image, content)
        inputBackground.style.display = 'none'
    }

})
// Load stored posts
let storedPost = JSON.parse(localStorage.getItem("postArr[0]"))
let sotreStr = (JSON.stringify(localStorage)).split('"')
let localKyes = []
for (let i = 1; i < sotreStr.length; i+= 10){
    localKyes.push(sotreStr[i])
}
// const body = document.getElementById('body')
window.addEventListener('load', function(){
    for(let i = 0; i < localKyes.length; i++){
        let localArr = (JSON.parse(localStorage.getItem(localKyes[i])))
        let title = localArr[0]
        let image = localArr[1]
        let content = localArr[2]
        createFullPost(title, image, content)
    }
})