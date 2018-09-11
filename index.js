function createPost() {
    var title = document.getElementById("title").value
    var author = document.getElementById("author").value
    var body = document.getElementById("body").value
    console.log(title)
    var postTemplate = document.getElementById("post-template").innerHTML
    var templateFn = _.template(postTemplate)
    var postsDiv = document.getElementById("post-template");
    var templateHTML = templateFn({ 'title': title, 'author': author });
    postsDiv.innerHTML += templateHTML;


}


function postComment() {

}
