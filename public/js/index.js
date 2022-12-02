

let anim;

let ending = 0

let npc = {}

let def = ['VIH', 'SIDA', 'IST']

initNameNPC(start);

// Fonction récup user (PNJ)

function scrollToBottom(element){
    element.scrollTop = element.scrollHeight;
}

/**
 * 
 * @param {String} name ID du personnage non joueur
 * 
 * @returns {JSON} renvoie les données du PNJ
 */
function getUser(id, callback){
    fetch('data/data.json')
        .then((response) => response.json())
        .then((json) => callback(json['npc'][id]['color']));
}


function getMessage(id, callback){
    fetch('data/data.json')
        .then((response) => response.json())
        .then((json) => callback(json['path'][id]));
}

function initNameNPC(start){
    fetch('data/data.json')
        .then((response)=>response.json())
        .then((json)=>{
            let data = json['npc'];
            console.log(data)
            data.forEach((element, index) => {
                npc[index] = {}
                if(element['gender'] === "Male"){
                    fetch('api/name/male')
                        .then((response) => response.json())
                        .then((_json) => {
                            npc[index]['name'] = _json['name'];
                            npc[index]['color'] = json['npc'][index]['color'];
                        });
                } else {
                    fetch('api/name/female')
                        .then((response) => response.json())
                        .then((_json) => {
                            npc[index]['name'] = _json['name']
                            npc[index]['color'] = json['npc'][index]['color'];
                        });
                }
                if(index == data.length-1){
                    start();
                }
            });
        })
}

// Fonction chat (avec animation)

/**
 * 
 * @param {Number} waitTime Temps pour que le message s'envoie
 * @param {String} author Auteur du message (voir sendAction pour les actions)
 * @param {String} message Message à envoyé
 */
function sendMessage(json){

    let msg_container = document.getElementById('msg_container');
    
    let container_message = document.createElement('div');
    let message_image = document.createElement('img');
    let message_content = document.createElement('div');
    let content_author = document.createElement('span');
    let content_text = document.createElement('p');

    container_message.className = "msg";
    message_image.className = "avatar";
    message_content.className = "content";
    content_author.className = "nom";

    message_content.appendChild(content_author);
    message_content.appendChild(content_text);

    container_message.appendChild(message_image);
    container_message.appendChild(message_content);

    msg_container.appendChild(container_message);

    if(json['by'] == "narrator"){
        // C'est une action / ignorer la récup du nom et la mise en couleur du texte
        message_image.remove();
        content_author.remove();

        content_text.textContent = json['message']? json['message'] : "[ERREUR DANS LE MESSAGE | VERIFIER LE MESSAGE DANS LES DONNEES!]";
    } else {
        // C'est un personnage
        message_image.src = "";
        message_image.alt = "Image";

        let by = json['by']

        if(by != "1"){
            content_author.textContent = npc[by]['name']? npc[by]['name'] : "[ERREUR DANS LE BY = "+by+"]";
        } else {
            content_author.textContent = "Moi"
        }
        content_author.style.color = npc[by]['color']? ""+npc[by]['color'] : "[ERREUR DANS LE BY = "+by+"]";
        content_text.textContent = json['message'].replace('(nom)', npc[by]['name']);
    }

    // mise en place des 2 choix
    setChoice(json)

};

function setChoice(json){

    let left = document.getElementById('left_btn');
    let right = document.getElementById('right_btn');
    left_clone = left.cloneNode(true)
    right_clone = right.cloneNode(true)

    left_clone.innerText = json['choix']['1']['message']
    left_clone.addEventListener('click', (ev)=>{choice(json, "1")})

    right_clone.innerText = json['choix']['2']['message']
    right_clone.addEventListener('click', (ev)=>{choice(json, "2")})
    
    left.replaceWith(left_clone);
    right.replaceWith(right_clone);
    scrollToBottom(document.getElementById('msg_container'))

    window.data = json;

}

function choice(json, id){

    end(json['choix'][id]['to']);
    return;
    if(json['choix'][id]['to'].contains('end')){
    }

    let element = getMessage(json['choix'][id]['to'], sendMessage)
}



// Fonction menu

function closeMenu(){

    let menuContainer = document.getElementById('menu_container');
    let gameContainer = document.getElementById('game_container');

    document.getElementById('menu_container').style.opacity = '1.0'

    anim = setInterval(animateHideMenu, 40, menuContainer);

}




// Animation

function animateHideMenu(element){


    if(document.getElementById('menu_container').style.opacity <= '0.0'){
        element.style.display = 'none';
        clearInterval(anim)
    } else {
        let opacity = parseFloat(document.getElementById('menu_container').style.opacity)
        opacity=(opacity - 0.1)

        document.getElementById('menu_container').style.opacity = opacity;
    }

}

function animateHideGame(element){

    if(document.getElementById('game_container').style.opacity <= '0.0'){
        document.getElementById('end_container').style.display = 'flex'
        document.body.style.display = "flex"
        document.body.style.justifyContent = "end"
        document.body.style.alignItems = "center"
        element.style.display = 'none';
        clearInterval(anim)
    } else {
        let opacity = parseFloat(document.getElementById('game_container').style.opacity)
        opacity=(opacity - 0.1)

        document.getElementById('game_container').style.opacity = opacity;
    }
}


function start(){
    getMessage(1, sendMessage)

    window.addEventListener('keydown', function (e) {

        if(e.key == "ArrowLeft"){
            choice(e.currentTarget.data, "1")
        }

        if(e.key == "ArrowRight"){
            choice(e.currentTarget.data, "2")
        }
      }, false);

}

function end(){
    let gameContainer = document.getElementById('game_container');
    document.getElementById('game_container').style.opacity = 1.0
    anim = setInterval(animateHideGame, 40, gameContainer);


    let openDataText = document.getElementById('open-data');
    let openAIText = document.getElementById('openai');

    let random = Math.floor(Math.random()*10)

    let randomDef = Math.floor(Math.random()*3)

    fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=laboratoires-danalyses-medicales")
    .then((response) => response.json())
    .then((data) => {

        console.log(data['records'][random]['fields']['laboratoire'])

        openDataText.innerHTML = "Le saviez vous ?<br/>Le laboratoire "+data['records'][random]['fields']['laboratoire']+" qui est ouvert "+data['records'][random]['fields']['horaires'].toLowerCase()+" fait des tests de dépistage gratuitement !<br/><br/>"

    });
    fetch('api/def/'+def[randomDef])
        .then((response) => response.json())
        .then((_json) => {
            openAIText.innerText=_json['def']
        });

}