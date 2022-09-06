function display(value)
{ 
    document.getElementById("result").value+=value;
}
function cleartext()
{ 
    document.getElementById("result").value=" ";
}
function deleter()
{
    var t=document.getElementById("result").value;
     var str=t.substring(0,t.length-1);
    document.getElementById("result").value=str;
}
function result(){ 
   var p=document.getElementById("result").value;
   let q=eval(p);
   document.getElementById("result").value=q;
}