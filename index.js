// Sign Up bar Cancelling
var x = document.getElementById("x")
var signup = document.getElementById("signup")

x.addEventListener("click", function () {
    signup.style.display = "none"
})


var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
    closenav.addEventListener("click", function () {
        sidenav.style.left = "-50%"
    })
})

var leftbutton = document.getElementById("left-activate")
var rightbutton = document.getElementById("right-activate")
var slidephoto = document.querySelector(".slideimg")
var border = 0

rightbutton.addEventListener("click",
    function () {
        border += 100
        if (border > 200) {
            border = 0
            slidephoto.style.marginLeft = 0;
        }
        else {
            slidephoto.style.marginLeft = "-" + border + "vh";
        }
    }
)

leftbutton.addEventListener("click",
    function () {
        if (border == 0) {

            border = 200
            slidephoto.style.marginLeft = "-" + border + "vh";
        }
        else {

            border -= 100
            slidephoto.style.marginLeft = "-" + border + "vh";
        }
    }
)

var likebuttons=document.getElementById("heart")

likebuttons.forEach((btn)=>{
    btn.addEventListener("click",function(event){
        
        if(event.target.src.indexOf("blackheart")>0)
        {
            console.log("jkjk");
            event.target.src="img/redheart.png"
        }
        else{
            event.target.src="img/blackheart.png"
        }
    })
})
 