
let x = 1,count=0;

document.getElementById("select").addEventListener("click", myFunction);

function myFunction() {
    // to attach style.css file in javascript
    let link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'style.css';

    // to catch value which is written by user in input text field
    let input = document.getElementById("list").value;

    if (input != "") {
        count++;
        // to create div dynamically and setting different id for every div like div_1, div_2 and so on
        // also assign same class to every div
        let item = document.createElement('div');
        item.id = "div_" + x++;
        item.className = "subdiv";

        //put that value in newly created div which is entered by user 
        item.innerHTML = input;

        //create image tag dynamically 
        let image = document.createElement("img");
        image.src = "cross-icon.png";
        image.alt = "error";
        image.className = "cross";
        image.appendChild(link); // attach css file to this image

        item.appendChild(image); //putting this image in newly created div

        item.appendChild(link); // add css file to newly created div also

        // Now add this complete div in our main div which is declared in our html code
        document.getElementById("maindiv").append(item);

        document.getElementById("list").value = "";
        
        //when we click on cross image then hide() function will execute
        image.addEventListener('click', hide);
    }
    else{
        alert("Please enter a list item");

        //when we click on cross image then hide() function will execute
        image.addEventListener('click', hide);
    }
    
}

function hide() {
    let flag = confirm("Do you want to remove this from your list\nPress OK to confirm\nOtherwise press Cancel");
    
    if (flag) {
        document.getElementById(this.parentNode.id).style.display = "none";
        //with this, that div will be removed from our main div

        count--;
    }
}

document.getElementById("btn").addEventListener("click",function clearAll(){
    if(count==0)
    {
        alert("List is already cleared");
    }
    else{
        document.getElementById("maindiv").style.display = "none";
    }
});