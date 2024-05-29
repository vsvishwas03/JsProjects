var istatus= document.querySelector("h5")
var add= document.querySelector("#Add")
var remove=document.querySelector("#Remove")

add.addEventListener("click",function(){
    istatus.innerHTML="Friends"
    istatus.style.color="green"

})

remove.addEventListener("click",function(){
istatus.innerHTML="Strangers"
istatus.style.color="red"
})