// Swal.fire("SweetAlert2 is working!");

// document.getElementById('nameItem').value


var items = localStorage.getItem('itemlist');

/*if (items){

    items = items.split(',');
}else{

    items = [];
}
*/

items = items ? items.split(',') : [];



function AddItem(){

    let item = document.getElementById('nameItem').value;
    if(item){

        items.push(item);
        localStorage.setItem('itemlist', items)

    


    }
    

}

AddItem();