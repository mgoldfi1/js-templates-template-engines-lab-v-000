function createPost() {
    var title = document.getElementById("title").value
    var author = document.getElementById("author").value
    var body = document.getElementById("body").value
    var postTemplate = document.getElementById("post-template").innerHTML
    var pageTemplate = document.getElementById("page-template").innerHTML
    var templateFn = _.template(postTemplate)
    var templateFn2 = _.template(pageTemplate)
    var postsDiv = document.getElementById("post-template");
    var templateHTML = templateFn({ 'title': title, 'author': author });
    document.getElementsByTagName("main")[0].innerHTML += pageTemplate();
    postsDiv.innerHTML += templateHTML;


}


function postComment() {

}
