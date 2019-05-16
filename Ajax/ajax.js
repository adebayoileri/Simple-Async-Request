//load User
document.getElementById("btn1").addEventListener('click',
 loadUser);
 //Load Users
document.getElementById("btn2").addEventListener('click',
loadUsers);
 function loadUser()
{
    let xhr = new XMLHttpRequest();
    xhr.open("GET" ,'user.json',true);
    xhr.onload = function()
    {
        if(xhr.status==200)
        {
            let user = JSON.parse(this.responseText);
            // document.getElementById("")
            output =`<ul>
            <li> Firstname: ${user.firstName} </li>
            <li> Lastname:  ${user.lastName} </li>
            <li> Age: ${user.age} </li>
            <li> Gender: ${user.Gender} </li>
            <li> Salary Monthly: ${user.salary} </li>
                  </ul>
                   `;
            document.getElementById("user").innerHTML = output;
        }
    }
    xhr.send();
}
    function loadUsers()
    {
        let xhr = new XMLHttpRequest();
        xhr.open("GET" ,'users.json', true);
        xhr.onload = function()
        {
            if(xhr.status == 200)
            {
                let outputs =" ";
                let users = JSON.parse(xhr.responseText);
                // document.getElementById("")
                for( let i=0; i< users.length; i++){
                    outputs +=`<ul>
                    <li> Firstname: ${users[i].firstName} </li>
                    <li> Lastname:  ${users[i].lastName} </li>
                    <li> Age: ${users[i].age} </li>
                    <li> Gender: ${users[i].Gender} </li>
                    <li> Salary Monthly: ${users[i].salary} </li>
                          </ul>
                           `; }
                document.getElementById("users").innerHTML = outputs;
            }
        }
        xhr.send();
}