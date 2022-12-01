let anim;

let npc = {}


fetch('api/name/female')
.then((response) => response.json())
.then((json) => console.log(json));

initNameNPC();

// Fonction récup user (PNJ)

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

function initNameNPC(){
    fetch('data/data.json')
        .then((response)=>response.json())
        .then((json)=>{
            let data = json['npc'];
            console.log(data)
            data.forEach(element => {
               console.log(element) 
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
function sendMessage(waitTime){

    

};



// Fonction menu

function closeMenu(){

    let menuContainer = document.getElementById('menu_container');
    let gameContainer = document.getElementById('game_container');

    console.log("anim")
    document.getElementById('menu_container').style.opacity = '1.0'

    anim = setInterval(animateHideMenu, 40, menuContainer);

}








// Animation

function animateHideMenu(element){

    console.log(document.getElementById('menu_container').style.opacity)

    if(document.getElementById('menu_container').style.opacity <= '0.0'){
        element.style.display = 'none';
        clearInterval(anim)
    } else {
        let opacity = parseFloat(document.getElementById('menu_container').style.opacity)
        console.log("anim")
        opacity=(opacity - 0.1)

        document.getElementById('menu_container').style.opacity = opacity;
    }

}

getMessage(1, function(json){
    console.log(json)
})
