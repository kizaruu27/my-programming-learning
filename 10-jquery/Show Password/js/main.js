let pwdIsShow = false;
$(document).ready(() => {
    const passwordInput = $('#password');

    $('#show-hide-password').click(() => {
        if (!pwdIsShow) {
            pwdIsShow = true;
            passwordInput.attr('type', 'text'); 
        } else {
            pwdIsShow = false;
            passwordInput.attr('type', 'password');
        }
    })
})