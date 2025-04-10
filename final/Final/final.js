document.getElementById("myform").addEventListener('submit',function(event){
    event.preventDefault();
    
 

   
     const fullname = document.getElementById('fullname').value;
     const email = document.getElementById('email').value;
    


     

        const formdata = {
        fullname: fullname,
        email: email,



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