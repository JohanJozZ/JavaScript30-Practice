const lastKeys = [];
const secretCode = 'johanjozz';

window.addEventListener('keyup',(e)=>{
   lastKeys.push(e.key);
   lastKeys.splice(-secretCode.length-1,lastKeys.length-secretCode.length);
   if (lastKeys.join('')===secretCode){
      console.log('%cFUCKKKKK YEAH','font-size:20px;color:red;');
      cornify_add();

   }

});