const content = document.querySelector("#content");


window.addEventListener('load', ()=>{
    getUsers();
})

function getUsers(){
    let html="";
    //fetch                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               "
    fetch('https://api.sampleapis.com/codingresources/codingResources', {mode:'cors'})
    .then(response=>{
        console.log(response);
        return response.json();
    })
    .then(data=>{
        console.log(data);
        data.forEach(element=>{
            html+= `<li>${element.description} ${element.topics}</li>`
        })

        content.innerHTML = html
    })


}
