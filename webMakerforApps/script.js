//functions
function clicker() {
    //Variables
    const fav = document.getElementById("fav")
    var title = document.getElementById("title")
    var logo = document.getElementById("img")
    const logo_input = document.getElementById("img")
    const container = document.getElementById("container")
    const button = document.getElementById("Create")
    const text = document.getElementById("text")
    const div = document.getElementById("Container")
    const web = document.getElementById("webmake")
    const div_text = document.getElementById("div-text")
    const apple_link = document.getElementById("apple_link")
    const play_link = document.getElementById("play_link")
    const title_div = document.getElementById("title_div")
    const create = document.getElementById("made")
    const p_made = document.getElementById("p_made")
    const p_name = document.getElementById("p_name")
    //code
    div.parentNode.removeChild(div);
    title_div.parentNode.removeChild(title_div);

    fav.setAttribute('href', logo_input.value);

    document.title = title.value;
    div_text.innerHTML = title.value;
    p_name.innerHTML = ("Created By:");
    p_made.innerHTML = create.value;
    var imgb = document.createElement('img');
    imgb.src = logo_input.value;
    document.getElementById('img_logo').appendChild(imgb);
    var imgplay = document.createElement('img');
    imgplay.src = 'play.png';
    document.getElementById('webmake').appendChild(imgplay);
    imgplay.addEventListener('click', ()=>{
        window.open(play_link.value, '_blank');
    });
    var imgstore = document.createElement('img');
    imgstore.src = 'apple-store-button.png';
    document.getElementById('webmake').appendChild(imgstore);
    imgstore.addEventListener('click', ()=>{
        window.open(apple_link.value, '_blank');
    });  
    
}