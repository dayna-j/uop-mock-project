// window.addEventListener('load', 
//     function() { 
    
    
    // get the form data
    let getFormData = function() {
        let myForm = $('#development-request-form');
        myFormInputs = myForm.find('input,select,textarea');
        let formData = [];
        
        myFormInputs.each((index,input)=>{
            console.log(input);
            formData.push({
                id: input.id,
                value: input.value
             });
        });
        // console.log(formElements);
        
        // let obj = {};
        // for(element in formElements) {
        //     if(formElements[element].nodeName === 'INPUT') {
        //         obj[formElements[element].id] = formElements[element].value
        //     }
        // }
        // console.log(obj);
        // return obj;

        // let data = {};

        // $('#development-request-form').filter(':input').each( (input) => {
        //     const $id = $(this).attr('id');
        //     const $value = $(this).attr('value');
        //     data[$id] = $value;
        // });
        // console.log(data);
        // return data;

        return formData;
    }



    // post the form data
    let postData = function(event) {
        event.preventDefault();
        // alert('postData working');
        
        let formData = getFormData();
        console.log(formData);
    }




    let URL = 'https://jsonplaceholder.typicode.com/posts';
    document.getElementById('development-request-form').addEventListener('submit', postData);



    
//   }, false)}
