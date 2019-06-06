class CustomElementUploaded extends HTMLElement {
    constructor () {
        super()
        let wrapper = document.createElement ( 'div' )
        wrapper.className = 'wrapper'
        this.exersizeTitle = document.createElement('h1')
        this.exersizeTitle.className = 'exersize_title'
        this.levelHomeWork = document.createElement('p')
        this.levelHomeWork.className = 'level_home_work'
        this.exersizeMainBlock = document.createElement('div')
        this.exersizeMainBlock.className = 'exersize_main_block'
        this.exersizeTaskBlock = document.createElement('pre')
        this.exersizeTaskBlock.className = 'exersize_task_block'
        this.exersizeCodeBlock = document.createElement('pre')
        this.exersizeCodeBlock.className = 'exersize_code_block'
        this.exersizeResultBlock = document.createElement('dvi')
        this.exersizeResultBlock.className = 'exersize_result_block'
        this.funcButton = document.createElement('button')
        this.funcButton.className = 'func_button'
        this.funcButton.innerText = 'Run Script'
        this.shadow = this.attachShadow ( { mode: 'open' } )
        let style = document.createElement ( 'style' )
        style.textContent = `
        ::-webkit-scrollbar { width: 3px; height: 3px;}
        ::-webkit-scrollbar-button {  background-color: #666; }
        ::-webkit-scrollbar-track {  background-color: #999;}
        ::-webkit-scrollbar-track-piece { background-color: #ffffff;}
        ::-webkit-scrollbar-thumb { height: 50px; background-color: #666; border-radius: 3px;}
        ::-webkit-scrollbar-corner { background-color: #999;}}
        ::-webkit-resizer { background-color: #666;}       
.wrapper{
    display: flex;
	flex-direction: column;
	justify-content: space-around;
	margin: 25px 0 0 0;
	padding: 20px 0 0 0;
	width: 100%;
	
}
.exersize_title{
    margin: 55px 0 30px 0;
	color: white;
}
.level_home_work{
    margin: 0;
	font-size: 16px;
	font-weight: bold;
	width: 100%;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    text-decoration: none;
    background:#9e7346;
    color:white;
    text-transform: uppercase;
    line-height:50px;
    display: block; 
    -moz-transition: all 0.3s 0.01s ease;
    -o-transition: all 0.3s 0.01s ease;
    -webkit-transition: all 0.3s 0.01s ease;
}
.level_home_work::before{
    content: 'HW';
     padding: 0 15px;
     font-size: 21px;
     background-color: white;
     border-radius: 22px;
     color: #5b595a;
     box-shadow: 0 0 20px rgba(0,0,0,0.5);
     margin-right: 20px;
}
.exersize_main_block{
    display: flex;
	flex-direction: row;
}
.exersize_task_block{
    font-family: lato_reg;
	white-space: pre-wrap;
	overflow: auto;
	text-align: left;
	height: 300px;
	margin: 0 auto;
	width: 50%;
	resize: none;
	padding: 20px;
	color: white;
	background-color: #9e7346c2;
	color: white;
}
.exersize_code_block{
    font-family: lato_reg;
	white-space: pre-wrap;
	overflow: auto;
	text-align: left;
	height: 300px;
	margin: 0 auto;
	width: 50%;
	resize: none;
	padding: 20px;
	color: white;
	font-weight: bold;
	background: #1b2753de;
}
.exersize_result_block{
    font-family: lato_reg;
	white-space: pre-wrap;
	overflow: auto;
	text-align: center;
	min-height: 0;
	margin: 0 auto;
	width: 100%;
	padding: 20px 0;
	border: none;
	color: white;
	font-weight: bold;
}
.func_button{
    font-size: 15px;
	font-weight: bold;
	width: 100%;
    text-decoration: none;
    background:#191f35;
    color:white;
    text-transform: uppercase;
    line-height:50px;
    display: block; 
    cursor: pointer;
    -moz-transition: all 0.3s 0.01s ease;
    -o-transition: all 0.3s 0.01s ease;
    -webkit-transition: all 0.3s 0.01s ease;
}
.func_button:hover{
	background:#6e9fda;
    color: white;
}  
img{
	height: 80%;
}      
@media (max-width: 768px){
    .exersize_main_block{
        display: flex;
	    flex-direction: column;
    }
    .exersize_task_block, .exersize_code_block{
    width: 90%;
    }
}
        `
        wrapper.appendChild(this.exersizeTitle)
        wrapper.appendChild(this.levelHomeWork)
        wrapper.appendChild(this.exersizeMainBlock)
        this.exersizeMainBlock.appendChild(this.exersizeTaskBlock)
        this.exersizeMainBlock.appendChild(this.exersizeCodeBlock)
        wrapper.appendChild(this.exersizeResultBlock)
        wrapper.appendChild(this.funcButton)
        this.shadow.appendChild( style )
        this.shadow.appendChild(wrapper)
    }

    fillTask(numHw, numEx) {
        var currentHw = homeWorks.find(item => item.hw == numHw)
            this.exersizeTitle.textContent = `Home Work № ${currentHw.hw}`
        this.levelHomeWork.textContent = `Level ${numEx} (${numEx + 2} points)`
        this.exersizeTaskBlock.textContent = currentHw.tasks[`task${numEx}`]
        this.exersizeCodeBlock.textContent = currentHw.codes[`code${numEx}`]
        this.funcButton.onclick = function () {
            eval(currentHw.codes[`code${numEx}`])
        }

    }
}
customElements.define ( 'uploaded-element', CustomElementUploaded )

var exersize1 = document.querySelector('.exersize1')
var exersize2 = document.querySelector('.exersize2')
var exersize3 = document.querySelector('.exersize3')

caseFunc = function(num){
    document.querySelector('.main').style = `
	    animation: opacity-main-out 1s; 
    `
    clearing()
    document.querySelector('.main_page').style.display = 'none'
    exersize1.fillTask(num,1)
    exersize2.fillTask(num,2)
    exersize3.fillTask(num,3)
    checking(exersize1,exersize2,exersize3)
    createImg()
    document.querySelector('.main').style = `
	    animation: opacity-main-in 1s; 
    `
}
createImg = function () {
    (exersize1.exersizeCodeBlock.innerText.slice(0, 7)[6] === '/') ?
        exersize1.exersizeCodeBlock.appendChild(document.createElement('img'))
            .src = exersize1.exersizeCodeBlock.innerText : null;
    (exersize2.exersizeCodeBlock.innerText.slice(0, 7)[6] === '/') ?
        exersize2.exersizeCodeBlock.appendChild(document.createElement('img'))
            .src = exersize2.exersizeCodeBlock.innerText : null;
    (exersize3.exersizeCodeBlock.innerText.slice(0, 7)[6] === '/') ?
        exersize3.exersizeCodeBlock.appendChild(document.createElement('img'))
            .src = exersize3.exersizeCodeBlock.innerText : null
}
checking = function  (param1, param2, param3){
    (param1.exersizeCodeBlock.textContent === "") ?
        param1.style.display = 'none' : param1.style.display = 'block';
    (param2.exersizeCodeBlock.textContent === "") ?
        param2.style.display = 'none' : param2.style.display = 'block';
    (param3.exersizeCodeBlock.textContent === "") ?
        param3.style.display = 'none' : param3.style.display = 'block'
}
clearing = function() {
    exersize1.exersizeCodeBlock.innerHTML = null
    exersize1.exersizeResultBlock.innerHTML = null
    exersize1.exersizeTaskBlock.innerHTML = null
    exersize2.exersizeCodeBlock.innerHTML = null
    exersize2.exersizeResultBlock.innerHTML = null
    exersize2.exersizeTaskBlock.innerHTML = null
    exersize3.exersizeCodeBlock.innerHTML = null
    exersize3.exersizeResultBlock.innerHTML = null
    exersize3.exersizeTaskBlock.innerHTML = null
}

window.onhashchange = function ( event ) {
    switch ( location.hash ) {
        case "#0":
            document.querySelector('.main_page').style.display = 'block'
            document.querySelector('.main_page_text')
                    .textContent = homeWorks[0].mainPage
            exersize1.style.display = 'none';
            exersize2.style.display = 'none';
            exersize3.style.display = 'none';
            break
        case location.hash:
            caseFunc(location.hash.slice(1))
            break
        default:
            location.hash = "#0"
            break
    }
}

var uploadingLink = document.querySelector('#uploading-link')
var uploadingBox = document.querySelector('#uploading-box')
uploadingBox.selectNumHw.style.display = 'none'
uploadingLink.onclick = function (e) {
    uploadingBox.style = `top: 0px; animation:opacity-main-in 1s;`
}

var updatingLink = document.querySelector('#updating-link')
var updatingBox = document.querySelector('#updating-box')
updatingBox.h1.textContent = "Chose Home Work to update"
updatingBox.inputNumHw.style.display = 'none'
updatingBox.button.style.display = 'none'
updatingBox.buttonUpdate.style.display = 'block'

updatingLink.onclick = function (e) {
    updatingBox.style = `top: 0px; animation:opacity-main-in 1s;`
}

var removingLink = document.querySelector('#removing-link')
var removingBox = document.querySelector('#removing-box')
removingBox.h1.textContent = "Chose Home Work to Remove"
removingBox.inputNumHw.style.display = 'none'
removingBox.button.style.display = 'none'
removingBox.buttonUpdate.style.display = 'none'
removingBox.buttonRemove.style.display = 'block'
removingBox.coloumn.innerHTML = null
removingBox.title1.style.display = 'none'
removingBox.title2.style.display = 'none'
removingBox.title3.style.display = 'none'
removingLink.onclick = function (e) {
    removingBox.style = `top: 0px; animation:opacity-main-in 1s;`
}

success = function(param){
    param.closeButton.style.display = 'none'
    param.coloumn.innerHTML = null
    param.coloumn.style.justifyContent = `flex-direction: row;`
    param.coloumn.appendChild(document.createElement('h1'))
        .textContent = 'Operation has been successfully Done'
    param.coloumn.appendChild(document.createElement('p'))
        .textContent = 'Couple seconds needs to update content. Thanks!'
    param.coloumn.appendChild(
        document.createElement('img'))
            .src = "https://cdn.pixabay.com/photo/2017/08/30/17/26/success-2697951__340.jpg"
    window.scrollTo(top)
    setTimeout(function () {
        return location.href = "project.html"
    },4000)
}

var musikLink = document.querySelector('#musik_link')
var musikBox = document.querySelector('#musik-box')
var hideMusik = document.querySelector('.hide-musik')
musikLink.onclick = function (e) {
    musikBox.style.height = '25px'
    hideMusik.style.display = 'block'
}
hideMusik.onclick = function (e) {
    musikBox.style.height = '0'
    hideMusik.style.display = 'none'
}