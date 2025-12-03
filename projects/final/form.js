document.getElementById('myForm').addEventListener('submit', function(event){
    event.preventDefault();
    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById('email').value;
    const comment1 = document.getElementById('comments1').value;
    const comment2 = document.getElementById('comments2').value;
            

    if (!fullname || !email) {
        alert("Please leave a name and email.");
        return;
    }

    if(!comment1 || !comment2){
        alert("Please leave a comment");
        return;
    }

    const formData= {
        name: fullname,
        email: email,
        Feedback1: comment1,
        Feedback2: comment2
    };

    console.log(formData);
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200){
            alert("Feedback submitted succesfully!");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            // document.getElementById('myForm').reset;
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        }else if(xhr.readyState === 4){
            alert("Error submitting feedback.");
        }
    };
    xhr.send(JSON.stringify(formData));
    
    
});