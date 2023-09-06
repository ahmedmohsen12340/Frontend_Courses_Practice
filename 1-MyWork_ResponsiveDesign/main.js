// information 

let lis = document.querySelectorAll(".information>.container ul>li");
let infos = document.querySelectorAll(".information>.container .info");
lis.forEach(element => {
    element.addEventListener("click",()=>{
        lis.forEach((e)=>{
            e.classList.remove("active");
            infos.forEach((info)=>{
                info.classList.remove("active");
            })
        })
        element.classList.add("active");
        infos.forEach((info)=>{
        })
        infos.forEach((info)=>{
            if(element.innerHTML===info.dataset.content)
            {
                info.classList.add("active");
            }
        })    
    })
});