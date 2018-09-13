var dialogsModule = require('ui/dialogs');

function onSubmitTap() {
    console.log('Submit button tapped!');

    dialogsModule.alert('Your message has been sent.');
}

exports.onSubmitTap = onSubmitTap;