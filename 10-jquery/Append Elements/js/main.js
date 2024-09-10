$(document).ready(() => {
    const newElement = document.createElement('p').innerHTML = `New element has been created`;

    $('#container').append('<p>New text</p>', newElement);
})