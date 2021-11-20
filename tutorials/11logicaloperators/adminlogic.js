who = prompt('who\'s there?');

if( who == 'Admin'){

    pass = prompt('Password?');   
    
    if (pass == 'TheMaster'){
        alert('Welcome!');
    } else if (pass == null) {
        alert('Cancelled');
    } else {
        alert('Wrong Password');
    }

} else if (who == null){

    alert('cancelled');

} else {

    alert('I don\'t know you');

}