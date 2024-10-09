alert("Hello World!");

const ap = document.getElementById("ap");
ap.onclick = ()=>{
    const teem1 = document.getElementById("teem1");
    const teem2 = document.getElementById("teem2");
    const n1 = Number(teem1.value);
    const n2 = Number(teem2.value);
    const result = document.getElementById("res")
    if(n1 > n2){
        result.innerHTML = "TEEM 2 ELIMINADA";
        result.style.color = "red"
    }  else if( n1 === n2){
        result.innerHTML = "EMPATE";
        result.style.color = "green"
    }
    else {
        result.innerHTML = "TEEM 1 ELIMINADA"
        result.style.color = "blue"
    }
}