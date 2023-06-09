        // fetching p tag
        var p =document.getElementsByTagName('p');

        // fetching containers
        var choice=document.getElementsByClassName('choice');

        var dragItem=null;
   

   // giving dragstart and dragsnd event handlers
        for(var i of p){
            i.addEventListener('dragstart',dragStart);
            i.addEventListener('dragend',dragEnd);
        }

        function dragStart(){
            dragItem=this;
            setTimeout(()=>this.style.display="none",0); 
            console.log("DragStart has been triggered");  
        }
        function dragEnd(){
            setTimeout(()=>this.style.display="block",0);
            dragItem=null;
            console.log("DragEnd has been triggered"); 
        }


        // giving dragover, dragenter, dragleave, drop event handlers

        for(j of choice){
            j.addEventListener("dragover",dragOver);
            j.addEventListener("dragenter",dragEnter);
            j.addEventListener("dragleave",dragLeave);
            j.addEventListener("drop",drop);
        }
function drop(){
            this.append(dragItem);
          var display=document.getElementsByClassName('text');
          display[0].innerText="Hurray!! Successfully dropped"
          display[0].style.backgroundColor="#7cba34";
          display[0].style.color="white";
          console.log("Element has been dropped");
          
        }
        function dragOver(e){
           e.preventDefault();
        }
        function dragEnter(e){
            e.preventDefault();
            console.log("DragEnter has been triggered");
        }
        function dragLeave(){
this.style.border="1px solid blue";
console.log("DragLeave has been triggered");

        }