document.getElementById("myForm").addEventListener('submit',function(event){
    event.preventDefault();
    alert( "Form Submitted");
     if(Fullname){
        alert("You need to enter your name");
        return;
     }

   
     const fullname = document.getElementById('fullname').value;
     const email = document.getElementById('email').value;
     const pass = document.getElementById('pass').value;


     

        const formdata = {
        fullname: fullname,
        email: email,
        password: document.getElementById('pass'). value,
        remember: document.getElementById ('state').checked,

     }
    console.log(formData); 
    const xhr = new XMLHttpRequest();
    xhr.open("Get", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if ( xhr.readystate === 4 && xhr.status === 200){
            alert ( 'Form submitted successfully.');
        }   else if ( xhr.readyState === 4) {
            alert( 'Error submitting form.') ;
        }                
    }
    xhr.send( JSON.stringify( formdata));



});