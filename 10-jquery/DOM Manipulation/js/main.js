$(document).ready(() => {
    $('#btn1').click(() => {
        const newP1 = () => {
            $('#p1').text('New text for paragraph 1');
        } 
        newP1();
        // alert(p1);
    })

    $('#btn2').click(() => {
        const newP2 = () => {
            $('#p2').html(`<i>New text for paragraph 2</i>`)
        }
        newP2();
        // alert(p2);
    })

    $('#btn3').click(() => {
        const newInputVal = () => {
            $('#input').val('New input value');
        }
        newInputVal();
        // alert(inputValue);
    })
})