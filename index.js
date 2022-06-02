var anc=''; 
var ancWeb='';
function deployed(event) {
    console.log('-')
    var target = event.target || event.srcElement;
    // ancien lien actif passé à inactif
    if ( anc != '' ) { // on vérifie qu'il y avait bien un ancien lien actif enregistré
        anc.className = 'inactif';
    }
    // nouveau lien en actif
    target.className = 'actif';
    // on stock le nouveau lien comme ancien lien actif
    anc = target;
}
//inactifWeb
function deployedWeb(event) {
    console.log('-')
    var target = event.target || event.srcElement;
    // ancien lien actif passé à inactif
    if ( ancWeb != '' ) { // on vérifie qu'il y avait bien un ancien lien actif enregistré
        ancWeb.className = 'inactifWeb';
    }
    // nouveau lien en actif
    target.className = 'actifWeb';
    // on stock le nouveau lien comme ancien lien actif
    ancWeb = target;
}