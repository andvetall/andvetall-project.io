let style = document.createElement ( 'style' )
style.textContent = `
                
a:hover {
          background:#6e9fda;
          color: white;
          padding:0px 0px;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
          
}
a {
        cursor: pointer;
        margin-top: 0;
        width: 190px;
        text-decoration: none;
        background:#785830;
        color:white;
        padding:0px 0px;
        text-transform: uppercase;
        line-height:50px; 
        display: block; 
        -moz-transition: all 0.3s 0.01s ease;
        -o-transition: all 0.3s 0.01s ease;
        -webkit-transition: all 0.3s 0.01s ease;
}
             
li {    position: relative;
            cursor: pointer;
          display: inline-block;
          position:relative;
                width: 190px;
          background:#785830;
          color:white;
          padding:0px 0px;
          margin: 0px 0;
          text-transform: uppercase;
          line-height:50px; 
          -moz-transition: all 0.3s 0.01s ease;
          -o-transition: all 0.3s 0.01s ease;
          -webkit-transition: all 0.3s 0.01s ease;
}
li:hover {
          background:#6e9fda;
          padding:0px 0px;
          color: white;
          box-shadow: 0 0 10px rgba(0,0,0,0.5);
}

    li > ul {
        position:absolute;
        top:50px;
        display:none; 
    }
    li:hover > ul {
        margin:0 0;
        padding:5px 0px;
        display:block; 
        width:190px;
        left: 0px;    
        background:#785830; 
        box-shadow: 0 0 10px rgba(0,0,0,0.5);
        
    }
   li:hover > ul > li {
        margin:3px 0;
        padding:0px 0px;
        float:none;
        
    }
    @media (max-width: 768px){
					li:hover > ul {
        margin:0 0;
        padding:5px 0px;
        display:block; 
        width:90px;
        left: 0px;    
        background:#785830; 
        box-shadow: 0 0 10px rgba(0,0,0,0.5);

    }
					  li{
					  	width: 90px;
					  }
					  li a{
					  width: 90px;
					  }
					 
                `
document.head.appendChild(style)

let homeWorks
function getData ( ref ) {
    return fetch ( 'http://localhost:3000/' + ref )
        .then ( response => response.json () )
}
Promise.all ([
    getData ( "homeWorks" )
])
    .then (

        function (response){
            [homeWorks] = response
            console.log(homeWorks)
            homeWorks.slice().sort((a,b) => a.hw - b.hw)
                .forEach(
                function (item) {
                    var list = document.querySelector('.add-link')
                    var link = document.createElement('li')
                    link.innerText = `Home Work ${item.hw}`
                    item.hw !== "" ? list.appendChild(link) : null
                    link.onclick = function(event) {
                        window.location.hash = item.hw
                    }
                })
            homeWorks.slice().sort((a,b) => a.hw - b.hw).forEach(
                function (item) {
                    var select = document.querySelector('#updating-box')
                    var option = document.createElement('option')
                    option.innerHTML = `Home Work ${item.hw}`
                    function findWithAttr(array, attr, value) {
                        for(var i = 0; i < array.length; i += 1) {
                            if(array[i][attr] === value) {
                                return array[i].id;
                            }
                        }
                        return -1;
                    }
                    select.selectNumHw.onchange = function(e){
                        select.inputTaskHw1.innerHTML = homeWorks.slice().sort((a,b) => a.hw - b.hw)[this.selectedIndex].tasks.task1
                        select.inputTaskHw2.innerHTML = homeWorks.slice().sort((a,b) => a.hw - b.hw)[this.selectedIndex].tasks.task2
                        select.inputTaskHw3.innerHTML = homeWorks.slice().sort((a,b) => a.hw - b.hw)[this.selectedIndex].tasks.task3
                        select.inputCodeHw1.innerHTML = homeWorks.slice().sort((a,b) => a.hw - b.hw)[this.selectedIndex].codes.code1
                        select.inputCodeHw2.innerHTML = homeWorks.slice().sort((a,b) => a.hw - b.hw)[this.selectedIndex].codes.code2
                        select.inputCodeHw3.innerHTML = homeWorks.slice().sort((a,b) => a.hw - b.hw)[this.selectedIndex].codes.code3
                    }
                    select.selectNumHw.appendChild(option)
                }
            )
            homeWorks.slice().sort((a,b) => a.hw - b.hw).forEach(
                function (item) {
                    var select = document.querySelector('#removing-box')
                    var option = document.createElement('option')
                    option.innerHTML = `Home Work ${item.hw}`
                    select.selectNumHw.appendChild(option)

                }
            )

        }
    ).then(function () {
    location.hash = "#0"
    console.log(homeWorks)
})

