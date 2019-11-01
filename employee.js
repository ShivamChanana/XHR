document.getElementById("button").addEventListener("click", loadEmployee)

//function

function loadEmployee(){
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "employee.json", true)

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
            const employee = JSON.parse(this.responseText)

            const output = `
            <ul>
            <li>ID: ${employee.id}</li>
            <li>Name: ${employee.name}</li>
            <li>Company: ${employee.company}</li>
            <li>Job: ${employee.job}</li>
            <ul>
            
            `
            document.getElementById("Employee").innerHTML = output

        }
    }
    xhr.send();
}

document.getElementById("button2").addEventListener("click", loadEmployee2)

function loadEmployee2(){
    const xhr = new XMLHttpRequest()

    xhr.open("GET", "employee.json", true)

    xhr.onreadystatechange = function(){
                console.log("ready state", this.readyState)

                if (this.status === 200 && this.readyState === 3){
                    console.log("Loading")
                }
            }

    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.response)
            const employees = JSON.parse(this.response)
            let output = ""

            // for loading...

            

            employees.forEach(function(employee){
             output += `
            <ul>
            <li>ID: ${employee.id}</li>
            <li>Name: ${employee.name}</li>
            <li>Company: ${employee.company}</li>
            <li>Job: ${employee.job}</li>
            </ul>
            `
            })
            
            document.getElementById("Employee2").innerHTML = output

        }
    }
    xhr.send();
}
