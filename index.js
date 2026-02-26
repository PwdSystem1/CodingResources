const content = document.querySelector("#content");


window.addEventListener('load', ()=>{
    getUsers();
})

function getUsers(){
    let html="";
    //fetch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
    fetch('https://sampleemployee112api.onrender.com/api/user', {mode:'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(element=>{
            html+= `<li>${element.first_name} ${element.last_name}</li>`
        })

        content.innerHTML = html
    })

}