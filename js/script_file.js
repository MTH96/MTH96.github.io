function dummyPost() {
    document.write('<div class="card">' +
        dummyContactData() +
        '   <div class="cardBody">' +
        ' this is a user post' +
        ' </div>' +
        ' <div class="cardFooter">' +
        '  <button class="btn">like</button>' +
        ' <button class="btn">dislike</button>' +
        '<button class="btn">comment</button>' +

        '</div>' +
        ' </div>');
}

function dummyContactData() {
    return ' <div class="cardHeader">' +
        '  <span>' +
        '   <img src="https://www.interlinecenter.com/wp-content/uploads/2016/10/dummy-user-img.png">' +
        ' </span >' +
        '  <span class="cardHeader">user name</span>' +
        ' </div>';
}

function dummyContact() {
    document.write(
        '<div class="card">' +
        dummyContactData() +
        ' </div>'

    )
}
// function WelcomeUser(){

// }

function WelcomeUser() {
    try {
        var url = window.location.href;
        var name = url.split('?')[1].split('&')[0].split('=')[1].replace('+', ' ');
        console.log(name);
        document.write(' ' + name);



    } catch (error) {
        document.write(' ' + 'Default User Name');

    }

}