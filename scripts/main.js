window.addEventListener('load', 
    function() { 

    


    let URL = 'https://jsonplaceholder.typicode.com/posts';
    
        // post the form data
    let postData = function(event) {
        event.preventDefault();
        // alert('postData working');
        let formData = getFormData();
        console.log(formData);
        let postOptions = {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
              }
        };
        fetch(URL, postOptions)
            .then(res => res.json())
            .then(data => console.log(data))
            .catch((err)=>console.log(err));
    }
    // get the form data
    let getFormData = function() {
        let myForm = $('#development-request-form');
        myFormInputs = myForm.find('input,select,textarea');
        let formData = {};
        
        myFormInputs.each( (index,input) => {
            // console.log(input);
            // formData.push({
                // id: input.id,
                // value: input.value
            //  });
            formData[input.id] = input.value
        });
        return formData;
    }


    document.getElementById('development-request-form').addEventListener('submit', postData);    





    
    



    
  }, false);
