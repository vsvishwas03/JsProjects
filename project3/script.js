// document.querySelector("#center")
// .addEventListener("mousemove",function(dets){
//     console.log(dets.clientX,dets.clientY);

// })


// throtling - kisi particular code ke number of executions ko kam krdena 


// const btn = document.querySelector("#throttle");
 
// Throttling Function
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener(
    "mousemove",
    throttleFunction((dets) => {
        // your less rep code

        var div = document.createElement("div");
        div.classList.add('imagediv');

        //div location

        div.style.left=dets.clientX+'px';
        div.style.top=dets.clientY+'px';
        // creating image in div

        var img = document.createElement("img");
        img.setAttribute("src", "https://images.unsplash.com/photo-1715594564891-b4aecdd6e05e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
        div.appendChild(img);






        //adding div on screen
        document.body.appendChild(div);


        gsap.to(img,{
            y:"0",
            ease:Power1,
            duration: .6
        });
        gsap.to(img,{
            y:"100%",
            delay: .6,
            ease:Power2
           
        });

        // removing those divs after mouse move

        setTimeout(function(){
            div.remove();

        },900)




        








    }, 400));

// har baar div banao div ko absolute ek widhth overflow hidden
