
function newElement(){
    //lay gia tri input
    let theInput = document.getElementById("myInput").value;
    console.log(theInput);
    // lay the Ul
    let theUL = document.getElementById("myUL");
    //tao the li moi
    let theLiMoi = document.createElement("li");
    theLiMoi.innerHTML = theInput;
    theLiMoi.addEventListener("click",function(){
        theLiMoi.classList.toggle("checked");
    });
    // chen vao the UL
    theUL.appendChild(theLiMoi);
    //tao nut x
    let nutX = document.createElement("span");
    nutX.innerHTML = "x";
    nutX.className = "close";
    nutX.addEventListener("click", function(){
        theLiMoi.remove();
    });
    theLiMoi.appendChild(nutX);

}

function init(){
    // lay the ul
    let theUL = document.getElementById("myUL");
    // lay the li
    let theLis = theUL.children;
    for(let i=0;i<theLis.length;i++){
        let theLiDangXet = theLis[i];
        theLiDangXet.innerHTML += `<span class = "close">x</span>`;
        // an nut xoa
        theLiDangXet.children[0].addEventListener("click",function(){
            theLiDangXet.remove();
        })
        // khi an vao 1 danh muc thi gach ngang hoac nguoc lai
        theLiDangXet.addEventListener("click",function(){ 
            if(theLiDangXet.className === ""){
                theLiDangXet.className = "checked";
            }
            else{
                theLiDangXet.className = "";
            }
        })
    }
}
init();


