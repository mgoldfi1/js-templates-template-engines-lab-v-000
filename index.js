function createPost() {
    var title = document.getElementById("title").value
    var author = document.getElementById("author").value
    var body = document.getElementById("body").value

    var postTemplate = document.getElementById("post-template").innerHTML
    var templateFn = _.template(postTemplate)
    var postsDiv1 = document.getElementById("post-title");
    var postsDiv2 = document.getElementById("post-author")
    var templateHTML1 = templateFn({ 'title': title});
    var templateHTML2 = templateFn({'author': author })
    postsDiv1.innerHTML += templateHTML1;
    postsDiv2.innerHTML += templateHTML2;


}


function postComment() {

}
