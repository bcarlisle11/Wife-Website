/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//creates a drop down list for the reservations
function dropDownList() {
    document.getElementById("drop_list").classList.toggle("show");
}

//unselect list if clicked off of
window.onclick = function(e) {
    if (!e.target.matches('.dropdown_btn')) {

        var drop = document.getElementsByClassName("dropdown_class");

        //show the list once it's clicked
        for (var d = 0; d < drop.length; d++) {
            var openList = drop[d];
            if (openList.classList.contains('show')) {
                openList.classList.remove('show');
            }
        }
    }
};