document.getElementById( "myform").addEventListener('submit', function(event) {
    event.preventDefault();

    const Fullname = document.getElementById ("fullname").value;
    const email = document.getElementById("email").value;
    

    if ( !Fullname ){
        alert("Please provide a fullname");
        return;
    }

    if ( !email){
        alert( "Please enter your email");
        return;
    }




const data = {
    Fullname: fullname,
    email: email,
    
}

const xhr = new XMLHttpRequest ();
xhr.open ("GET", "submit.json", true );
xhr.setRequestHeader ("Content-type", "application/json;charset=UTF-8");
xhr.onreadystatechange = function (){
    if ( xhr. readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    alert("Success");
    document.getElementById("Message").innerHTML = response.message;
    document.getElementById("myform").innerHTML = "";
    } else if ( xhr.readystate ===4){
        alert('error submitting form.');
    }
};
xhr.send(JSON.stringify(data));
console.log(data);

});