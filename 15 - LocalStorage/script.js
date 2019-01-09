const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const selectAll = document.querySelector('#select');
const unselectAll = document.querySelector('#unselect');

function addItem (e){
   e.preventDefault();
   const text = (this.querySelector('[name=item]')).value;
   const item = {
      text,
      checked:false
   };
   items.push(item);
   addToList(items,itemsList);
   localStorage.setItem('items',JSON.stringify(items));
   this.reset();
}

function addToList(plates=[], platesList){
   platesList.innerHTML = plates.map((plate,i)=>{
      return `
         <li>
            <input type="checkbox" data-index = "${i}" id="${i}" ${plate.checked ? 'checked' : ''}>
            <label for="${i}">${plate.text}</label>
         </li>
      `;
   }).join('');  
}

function checkedState(e){
   if(!e.target.matches('input')) return;
   const element = e.target;
   const index = element.dataset.index
   items[index].checked = !items[index].checked;
   localStorage.setItem('items',JSON.stringify(items));
}

function checkAll(){
   items.forEach(i=>{
      i.checked = true;
      addToList(items,itemsList);
   });
   localStorage.setItem('items',JSON.stringify(items));
   
}
function uncheckAll(){
   items.forEach(i=>{
      i.checked = false;
      addToList(items,itemsList);
   });
   localStorage.setItem('items',JSON.stringify(items));
   
}
addItems.addEventListener('submit',addItem);
selectAll.addEventListener('click',checkAll);
unselectAll.addEventListener('click',uncheckAll);
itemsList.addEventListener('click',checkedState);

addToList(items,itemsList);