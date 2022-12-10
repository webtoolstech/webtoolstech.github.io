function clicker(){
    const url = document.getElementById("url").value;
    const width = document.getElementById("Width").value;
    const height = document.getElementById("Height").value;
    const cont = document.getElementById("cont");
    const frame = document.getElementById("frame");
    console.log(url);
    console.log(width);
    console.log(height);
    cont.parentNode.removeChild(cont);
    const text = "<iframe src='" + url +"' width='" + width + "px' height= '" + height + "px' ></iframe>";
    console.log(text);

    document.getElementById("partA").innerText = text
    let btn = document.createElement("button");
    btn.innerHTML = "Copy";
    btn.type = "button";
    document.getElementById("frame").appendChild(btn);
    btn.addEventListener('click', ()=>{
        copyclip();
    });
    var show = document.createElement('button');
    show.innerText = "Show"
    show.type = "button"
    document.getElementById("frame_option").appendChild(show);
    show.addEventListener('click', ()=>{
        showfun()
    })
    function showfun(){
        let h = document.createElement('div');
        h.innerHTML = text;
        document.getElementById("frame_option").appendChild(h);
    }
    

    function copyclip(){
        const textbox = document.createElement('textarea');
        textbox.setAttribute('readonly', '');
        textbox.style.position= 'asolute', '';
        textbox.value = text
        
        document.body.appendChild(textbox);
        textbox.select();
        document.execCommand('copy');
        textbox.parentNode.removeChild(textbox)
        copy()

    }
    function copy(){
        btn.innerHTML = "Done!"
        
    }



}