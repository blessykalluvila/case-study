


function check()
{
    var x= document.getElementById("eml").value;
var y=document.getElementById("pass").value;
console.log(x);
console.log(y);


    if(x=="admin"&& y=="1234")
    {
        window.location.replace("./todo.html");

    }
    else
    {
        document.getElementById("labl").innerText="Incorrect username or password!!";

}}
function jsonretrv(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200)
        {
            var response=JSON.parse(this.responseText);
           console.log(response.length);
            var output="";
            //var x=document.createElement("INPUT");
            for(var i=0;i<response.length;i++)
            {
               // output=response[i].title;
                output+='<input type="checkbox" id="t'+(i+1)+'" onchange="callfn()"/>'+ response[i].title+"<br>";
                //var x=document.createElement("INPUT");
               // x.setAttribute("type","checkbox");
               // x.setAttribute("id","check1");
                //var y=document.createElement("P");
               // y.setAttribute("for","check1");
               // y.setAttribute("id","para");
               // var z=document.getElementById("lbl");
               // document.getElementById("lbl").innerHTML=${"output"};
            }
                    document.getElementById("para").innerHTML=output;
                    console.log(output);



              // output= response.title[i];

                
            
        }
    }
        xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
        xhttp.send();
    

}

//var ins=document.getElementsByTagName("input");
//var count=0;
function callfn(){
     
    var count=document.querySelectorAll('input[type="checkbox"]:checked').length;
   
//     console.log(ins.value);
//     for(var i=0;i<ins.length;i++)
//     {
// if(ins[i].type==="checkbox" && ins.checked===true)
// {
//     count++;   
//     console.log(count);
// }
// }
 if(count==5)
{
    alert("Congrats. 5 tasks have been successfully completed"); }
}