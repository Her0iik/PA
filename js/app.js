


function checkCookie() {  
            if (typeof $.cookie('LS_user') === 'undefined'){
                window.location="../index.html?";
            }              
            else if (Cookies.get('LS_user')){
                jsonUser = JSON.parse(Cookies.get('LS_user'));
                var prenom =jsonUser["surname"];
                var typeUser =jsonUser["userTypeEnum"];
                
                if (prenom!=null){
                    $('#nomUserMenu').text(prenom);
                }
            } 
        }
        
function loadHeader(){
    jsonUser = JSON.parse(Cookies.get('LS_user'));
    var typeUser =jsonUser["userTypeEnum"];
    if(typeUser=="STUDENT"){
        $.get("../header/headerStudent.html", function(data) {
            $("#header").html(data);
            loadClick();
        });
    }else{
        $.get("../header/headerTeacher.html", function(data) {
            $("#header").html(data);
            loadClick();
        });
    }
}

function loadClick(){ 
    $("#logout").click(function(){
        Cookies.remove('LS_user');
        Cookies.remove('LS_token');
        document.location.href='../index.html?'
    });
    $("#profil").click(function(){
        document.location.href='../profil.html?'         
    });
}

function checkProfil() {  
    jsonUser = JSON.parse(Cookies.get('LS_user'));
    var prenom =jsonUser["surmane"];
    if (prenom!=null){
        $('#nomUserMenu').text("Welcome " +prenom);
    
    }else{
        alert("Première connexion? Aller dans votre profil pour mettre à jours vos informations personelles.");
        // can add redirection on profil + accept the GRPD
    }
}

