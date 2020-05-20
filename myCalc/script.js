document.getElementById("n1").addEventListener("click",n1);
document.getElementById("n2").addEventListener("click",n2);
document.getElementById("n3").addEventListener("click",n3);
document.getElementById("n4").addEventListener("click",n4);
document.getElementById("n5").addEventListener("click",n5);
document.getElementById("n6").addEventListener("click",n6);
document.getElementById("n7").addEventListener("click",n7);
document.getElementById("n8").addEventListener("click",n8);
document.getElementById("n9").addEventListener("click",n9);
document.getElementById("n0").addEventListener("click",n0);
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("ndot").addEventListener("click",ndot);
document.getElementById("add").addEventListener("click",add);
document.getElementById("sub").addEventListener("click",sub);
document.getElementById("div").addEventListener("click",div);
document.getElementById("mul").addEventListener("click",mul);
document.getElementById("equal").addEventListener("click",equal);

// NUMBERS
function n1(){
  numbReturn(document.getElementById("n1").innerHTML);
}
function n2(){
  numbReturn(document.getElementById("n2").innerHTML);
}
function n3(){
  numbReturn(document.getElementById("n3").innerHTML);
}
function n4(){
  numbReturn(document.getElementById("n4").innerHTML);
}
function n5(){
  numbReturn(document.getElementById("n5").innerHTML);
}
function n6(){
  numbReturn(document.getElementById("n6").innerHTML);
}
function n7(){
  numbReturn(document.getElementById("n7").innerHTML);
}
function n8(){
  numbReturn(document.getElementById("n8").innerHTML);
}
function n9(){
  numbReturn(document.getElementById("n9").innerHTML);
}
function n0(){
  numbReturn(document.getElementById("n0").innerHTML);
}

function numbReturn(numb){
  if (document.getElementById("memory").getAttribute("last-click-eq")==="true"){
    clear();
    document.getElementById("memory").setAttribute("last-click-eq","false");
  }
  let value = document.getElementById("result").innerHTML;
  if (value==="0" || document.getElementById("memory").getAttribute("pre-val")==="true"){
    document.getElementById("result").innerHTML = numb;
    document.getElementById("memory").setAttribute("pre-val","false");
  }else if (value.length < 10){
    document.getElementById("result").innerHTML = value + numb;
  }
  document.getElementById("memory").setAttribute("last-click-op","false");
}

//MISC
function clear(){
  document.getElementById("result").innerHTML = "0";
  document.getElementById("memory").setAttribute("cont",0);
  document.getElementById("memory").setAttribute("op","");
  document.getElementById("memory").setAttribute("bool-op",false);
  document.getElementById("memory").setAttribute("last-click-op","false");
}
function ndot(){
  let value = document.getElementById("result").innerHTML;
  document.getElementById("result").innerHTML = value + ".";
  document.getElementById("memory").setAttribute("last-click-op","false");
}

//OPERATIONS
function equal(){
  if (document.getElementById("memory").getAttribute("op")!==""){
    let cont = parseFloat(document.getElementById("memory").getAttribute("cont"));
    if (document.getElementById("memory").getAttribute("last-click-op")==="false"){
      let value = parseFloat(document.getElementById("result").innerHTML);
      cont = calq(cont,value);
      document.getElementById("memory").setAttribute("cont",cont);
    }
    if (cont>99999999999999999 || cont<-9999999999999999){
      document.getElementById("result").innerHTML="Too Long!";
    }else{
      document.getElementById("result").innerHTML=cont;
    }
  }
  document.getElementById("memory").setAttribute("op","");
  document.getElementById("memory").setAttribute("bool-op","false");
  document.getElementById("memory").setAttribute("last-click-eq","true");
}
function add(){
  allops();
  document.getElementById("memory").setAttribute("op","+");
}
function sub(){
  allops();
  document.getElementById("memory").setAttribute("op","-");
}
function mul(){
  allops();
  document.getElementById("memory").setAttribute("op","x");
}
function div(){
  allops();
  document.getElementById("memory").setAttribute("op","/");
}
function allops(){
  document.getElementById("memory").setAttribute("last-click-eq","false");
  if (document.getElementById("memory").getAttribute("last-click-op")!=="true"){
  let value = parseFloat(document.getElementById("result").innerHTML);
  if (document.getElementById("memory").getAttribute("bool-op")==="false"){
      document.getElementById("memory").setAttribute("cont",value);
      document.getElementById("memory").setAttribute("bool-op","true");
    }else{
      let cont = parseFloat(document.getElementById("memory").getAttribute("cont"));
      let op = document.getElementById("memory").getAttribute("op");
      cont = calq(cont,value);
      document.getElementById("memory").setAttribute("cont",cont);
    }
  }
  document.getElementById("result").innerHTML=document.getElementById("memory").getAttribute("cont");
  document.getElementById("memory").setAttribute("pre-val","true");
  document.getElementById("memory").setAttribute("last-click-op","true");
}
function calq(cont,value){
  let op = document.getElementById("memory").getAttribute("op");
  if (op==="+"){
    if ((cont+value)>99999999999999999 || (cont+value)<-9999999999999999){
      return ("Too Long!");
    }else{
      return cont + value;
    }
  }else if (op==="-"){
    if ((cont-value)>99999999999999999 || (cont-value)<-9999999999999999){
      return ("Too Long!");
    }else{
      return cont - value;
    }
  }else if (op==="x"){
    if ((cont*value)>99999999999999999 || (cont*value)<-9999999999999999){
      return ("Too Long!");
    }else{
      return cont * value;
    }
  }else if(op==="/"){
    if ((cont/value)>99999999999999999 || (cont/value)<-9999999999999999){
      return ("Too Long!");
    }else{
      if (value!=0){
        return cont / value;
      }else{
        return "Math Error!";
      }
    }
  }else{
    return cont;
  }
}
