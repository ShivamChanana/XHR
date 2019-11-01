document.getElementById("button").addEventListener("click", onLoad)

//function
function onLoad(){
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "xhr.txt", true);
    
    xhr.onload = function(){
    if(this.status === 200){
        console.log("response", this.response)
    }
}
    xhr.onreadystatechange = function(){
    console.log("Ready State", this.readyState)

    if ( this.status === 200 && this.readyState === 3){
        console.log("Loading Loading")
    }

    if( this.status === 200 && this.readyState === 4){
        console.log("response", this.response)
        document.getElementById("output").innerHTML =`${this.responseText}`
    }
    }
xhr.send();
}
