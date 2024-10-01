let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("#todo");
let date = document.querySelector("#date");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    let hr = document.createElement("hr");
    item.innerText = `${input.value} - ${date.value}`
    if(input.value.trim()==="")return;

    let delBtn = document.createElement("button");
    delBtn.classList.add("delete");
    delBtn.innerText = "delete"

    let editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    editBtn.innerText = "edit";

    item.appendChild(delBtn);
    item.appendChild(editBtn);
    ul.appendChild(item);
    ul.appendChild(hr);
    input.value="";
    date.value="";
})

ul.addEventListener("click",function(event){
    //console.dir(event.target.className)
    if(event.target.className ==="delete"){
        //console.log("button delete")
        let parent = event.target.parentElement;
        //console.log(parent)
        parent.remove();
        alert("Element deleted")
    }
})

ul.addEventListener("click",function(event){
    //console.dir(event.target.className)
    if(event.target.className ==="edit"){
        let parent = event.target.parentElement;
        //console.log(parent)
        
        let taskDetails = parent.childNodes[0].nodeValue.split();
        //console.log(taskDetails);
        const task = taskDetails[0].trim()
        //console.log(task)
        input.value = taskDetails;
        parent.remove();
        


        //alert("task deleted")
    }
})

// let delBtns = document.querySelectorAll(".delete");
// for(delbtn of delBtns){
//     delbtn.addEventListener("click",function(){
//         let parent = delbtn.parentElement;
//         console.log(parent)
//         parent.remove();
//     })
// }