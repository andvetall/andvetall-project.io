class CustomElement extends HTMLElement {
    constructor () {
        super()
        let wrapper = document.createElement ( 'div' )
        wrapper.className = "wrapper"
        this.coloumn = document.createElement('div')
        this.coloumn.className = 'col'
        let coloumnTask = document.createElement('div')
        coloumnTask.className = 'colTask'
        let coloumnCode = document.createElement('div')
        coloumnCode.className = 'colCode'
        this.h1 = document.createElement ( 'h1' )
        this.h1.textContent = 'Create your new Home Work'
        this.inputNumHw = document.createElement('input')
        this.inputNumHw.className = "numHw"
        this.inputNumHw.placeholder = "Enter the number of Home Work which you upload"
        this.inputNumHw.type = "number"
        this.inputNumHw.min = "1"
        this.selectNumHw = document.createElement('select')
        this.selectNumHw.className = 'numHw'
        this.title1 = document.createElement('h2')
        this.title1.innerText = "Main Part(3 Points)"
        this.inputTaskHw1 = document.createElement('div')
        this.inputTaskHw1.className = 'taskHw'
        this.inputTaskHw1.contentEditable = "true"
        this.inputCodeHw1 = document.createElement('div')
        this.inputCodeHw1.className = 'codeHw'
        this.inputCodeHw1.contentEditable = "true"
        this.title2 = document.createElement('h2')
        this.title2.innerText = "Additional(4 Points)"
        this.inputTaskHw2 = document.createElement('div')
        this.inputTaskHw2.className = 'taskHw'
        this.inputTaskHw2.contentEditable = "true"
        this.inputCodeHw2 = document.createElement('div')
        this.inputCodeHw2.className = 'codeHw'
        this.inputCodeHw2.contentEditable = "true"
        this.title3 = document.createElement('h2')
        this.title3.innerText = "Additional(5 Points)"
        this.inputTaskHw3 = document.createElement('div')
        this.inputTaskHw3.className = 'taskHw'
        this.inputTaskHw3.contentEditable = "true"
        this.inputCodeHw3 = document.createElement('div')
        this.inputCodeHw3.className = 'codeHw'
        this.inputCodeHw3.contentEditable = "true"
        this.button = document.createElement('button')
        this.button.className = 'pushData'
        this.button.innerText = 'Upload new Home Work'
        this.button.onclick = this.uploadData.bind(this)
        this.buttonUpdate = document.createElement('button')
        this.buttonUpdate.className = 'pushData'
        this.buttonUpdate.innerText = 'Update Home Work'
        this.buttonUpdate.style.display = 'none'
        this.buttonUpdate.onclick = this.changeData.bind(this)
        this.buttonRemove = document.createElement('button')
        this.buttonRemove.className = 'pushData'
        this.buttonRemove.innerText = 'Remove Home Work'
        this.buttonRemove.style.display = 'none'
        this.buttonRemove.onclick = this.removeData.bind(this)
        this.closeButton = document.createElement('button')
        this.closeButton.className = 'close'
        this.closeButton.onclick = this.closeBlock.bind(this)
        wrapper.appendChild(this.h1)
        wrapper.appendChild(this.inputNumHw)
        wrapper.appendChild(this.selectNumHw)
        coloumnTask.appendChild(this.title1)
        coloumnTask.appendChild(this.inputTaskHw1)
        coloumnTask.appendChild(this.title2)
        coloumnTask.appendChild(this.inputTaskHw2)
        coloumnTask.appendChild(this.title3)
        coloumnTask.appendChild(this.inputTaskHw3)
        coloumnCode.appendChild(this.inputCodeHw1)
        coloumnCode.appendChild(this.inputCodeHw2)
        coloumnCode.appendChild(this.inputCodeHw3)
        this.coloumn.appendChild(coloumnTask)
        this.coloumn.appendChild(coloumnCode)
        wrapper.appendChild(this.coloumn)
        wrapper.appendChild(this.button)
        wrapper.appendChild(this.buttonUpdate)
        wrapper.appendChild(this.buttonRemove)
        wrapper.appendChild(this.closeButton)
        let shadow = this.attachShadow ( { mode: 'open' } )
        let style = document.createElement ( 'style' )
        style.textContent = `
           .col{
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
            }
            .wrapper {                
                display: flex;
                flex-direction: column;
                font-family: lato_reg;
                text-align: center;
                margin: 0px auto 0;
                width: 100%;
                padding: 20px 0;
                border: none;
                color: white;
                font-weight: bold;
                background-color: #0907056e;
            }
            .numHw {
                font-family: lato_reg;
                text-align: center;
                margin: 40px auto;
                width: 50%;
                padding: 20px;
                font-weight: bold;
                font-size: 21px;
                background: #ffffffc2;
                border: none;
                color: black;
            }
            .taskHw, .codeHw{
                font-family: lato_reg;
                white-space: pre-wrap;
                overflow: auto;
                text-align: left;
                height: 300px;
                margin: 20px auto;
                width: 30vw;
                resize: none;
                padding: 20px;
                color: white;
                font-weight: bold;
                background: #1b2753de;
                border: solid 1px white;
            }
            .taskHw{
                background-color: #2d242447;
            }
            .codeHw{
            background-image: url('data:image/png;base64,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IqdwuH+Hw91+cRt/Pfcf5vU77rjjgrv91nuf8ofrxF555RX5vzljPhG1BgNbAXDLjM2bN8u/+gJYffsMzLvX09OT28WvuNXGjTfeGApc5t1+672fhr4FSBpY/vz586fsxb155DcRNYeBLSeopT/11FNi7dq1QaEWJ+o2+41qRWDLMrdgntvWiZ5++mnx8MMPq2e+E044QZxyyinqGREVjefYcoDuvt/+9rfi0UcfrRvUqLPhZppPPPGEGB4eFm+//bZ6tSrqBpWu3LSy3rYTlQUDW5PQIrrhhhvEu+++q14hF33++efi2muvFddff72swNi3dtH2228/cdppp8muWLSOFy9eLA477DD1bmdKu+1EZcGuyCZE3WkYUKCdeOKJ4pvf/GZo4ADOVaHG++qrr4of//jHHdsVifOES5cuVc/CsHwXB0ugcEfBvmPHDvm8kXzsVFN526kzscXWBPtOw4BRcD//+c/FkiVLagp4vHf22WeLn/3sZx1/Dgrda1EPjgAkonZji61Bdi0Wmhk4gfMXlUpFjI+Pi88++yzo7pkzZ444+OCDa1p/WrtabGnuqIx1YzCNhnWfccYZNSMmUUF466231DMhtxf3AtPQMr7//vtD26AvWXj55ZfF6Oio+OCDD+R7uCs0BmuY34+Dc6Pr1q0T7733XvB9LBt5rpeB1vWLL74o04D/dRoA6dTbotOc9fIK3Yp/5513gn2OW8dgO/r7++XfKEXliSnrttsa3bZ64rYdFUcM4HrhhRfka+gSxm+xzMcgFWPGkEf9Txls3bpVbNq0ST3znXnmmQ11zyBw3H333WLLli3i73//u9i5c6d6R8jAuW3bNvHMM8+I3XffvaaA/Oc//ynTgR8eTJs2TRx++OFit912k8/rvZ8GrslC4a8hwB566KHqWTx8549//KMs4PQlA9/61rdqChUETdwbTH9uzz33lOeqtP/+97/igQceEH/961/l+ygkcc+we+65Rzz++OOhysU//vEPeakFKh7mMkzIi3vvvVc+3n///dD3Uc/DMnCZBvLpjTfekIUz1qnzUMNn7DRj3z344INy23VaUSmx8xsB8Pbbb5cFItJg7nNdscF+w7YgHTNmzFDv+vLOkyivvfZapm3Xmt22euK2HfsTxxK2HevEsvF/GY9BKha7Ihs0Njam/vOhtYaWTFFQsKDGaBYSUxny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MLAREZFTGNiIiMgpDGxEROQUBjYiInIKAxsRETmFgY2IiJzCwEZERE5hYCMiIqcwsBERkVMY2IiIyCkMbERE5BQGNiIicgoDGxEROYWBjYiInMLARkRETmFgIyIipzCwERGRUxjYiIjIKQxsRETkFAY2IiJyCgMbERE5hYGNiIicwsBGREROYWAjIiKnMLAREZFTGNiIiMgpDGxEROQUBjYiInIKAxsRETmFgY2IiJzCwEZERE5hYCMiIqcwsBERkVMY2IiIyCkMbERE5BQGNiIicgoDGxEROYWBjYiInMLARkRETmFgIyIipzCwERGRUxjYiIjIKQxsRETkFAY2IiJyCgMbERE5hYGNiIicwsBGREROYWAjIiKnMLAREZFTGNiIiMgpDGxEROQUBjYiInIKAxsRETmFgY2IiJzCwEZERE5hYCMiIqcwsBERkVMY2IiIyCkMbERE5BQGNiIicgoDGxEROYWBjYiInMLARkRETmFgIyIipzCwERGRUxjYiIjIKQxsRETkFAY2IiJyCgMbERE5hYGNiIicwsBGREROYWAjIiKnMLAREZFDhPh/K5O/m3TPxoEAAAAASUVORK5CYII=');
            background-repeat: no-repeat;
            background-size: 35vw;
            background-position: center;
            background-blend-mode: darken;
            }
            h2{
                float: left;
                margin-right: -135px;
                margin-left: -225px;
                padding: 25px 157px 0px 0px;
                webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
            }
            .pushData{
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
            .close{
                position: absolute;
                right: 3%;
                top: 6%;
                width: 50px;
                height: 50px;
                cursor: pointer;
                border: 2px solid white;
                border-radius: 50%;
                background-color: #2c3051;
            }
            .close:before, .close:after {
                content: "";
                position: absolute;
                top: 21px;
                left: 10px;
                width: 26px;
                height: 4px;
                background: white;
            }
            .close:before {
                webkit-transform: rotate(45deg);
                transform: rotate(45deg);
            }           
            .close:after {
                webkit-transform: rotate(-45deg);
                transform: rotate(-45deg);
            }
        `
        shadow.appendChild ( style )
        shadow.appendChild ( wrapper )
    }
    closeBlock(){
            this.style = `top: -230%; animation: opacity-main-out 0.5s;`
    }
    uploadData (event) {
        var rrr = homeWorks.find(hw => {
            return hw.hw == this.inputNumHw.value
        })
        console.log(rrr)
            if (!rrr) {
                console.log(homeWorks.hw)
                fetch('http://localhost:3000/homeWorks', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        "hw": +this.inputNumHw.value,
                        "tasks": {
                            "task1": this.inputTaskHw1.innerText,
                            "task2": this.inputTaskHw2.innerText,
                            "task3": this.inputTaskHw3.innerText
                        },
                        "codes": {
                            "code1": this.inputCodeHw1.innerText,
                            "code2": this.inputCodeHw2.innerText,
                            "code3": this.inputCodeHw3.innerText
                        }
                    })
                })
                    .then(response => response)
                    .then(function () {
                        success(uploadingBox)
                    })
            }else {
                alert("You forgot to mention Number of Uploaded HW. Or Number of Uploaded HW was occupied")
            }
        localStorage.setItem('last_upload', `${new Date().toLocaleString()}, Home Work${this.inputNumHw.value}`)
    }
    changeData (event){
        function findWithAttr(array, attr, value) {
            for(var i = 0; i < array.length; i += 1) {
                if(array[i][attr] === value) {
                    return array[i].id;
                }
            }
            return -1;
        }
        if (this.selectNumHw.selectedIndex !== 0) {
            fetch ( `http://localhost:3000/homeWorks/${findWithAttr(homeWorks, 'hw', +this.selectNumHw.value.slice(10,13))}`, {
                method: 'PUT',
                body: JSON.stringify ({
                    "hw": this.selectNumHw.selectedIndex,
                    "tasks": {
                        "task1": this.inputTaskHw1.innerText,
                        "task2": this.inputTaskHw2.innerText,
                        "task3": this.inputTaskHw3.innerText
                    },
                    "codes": {
                        "code1": this.inputCodeHw1.innerText,
                        "code2": this.inputCodeHw2.innerText,
                        "code3": this.inputCodeHw3.innerText
                    }

                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then ( response => response )
                .then(function () {
                    success(updatingBox)
                })
        }else {
            alert("You forgot to select Uploaded HW")
        }
        localStorage.setItem('last_update', `${new Date().toLocaleString()}, Home Work${this.selectNumHw.selectedIndex}`)
    }
    removeData (event){
        function findWithAttr(array, attr, value) {
            for(var i = 0; i < array.length; i += 1) {
                if(array[i][attr] === value) {
                    return array[i].id;
                }
            }
            return -1;
        }
        if (this.selectNumHw.selectedIndex !== 0) {
            fetch ( `http://localhost:3000/homeWorks/${findWithAttr(homeWorks, 'hw', +this.selectNumHw.value.slice(10,13))}`, {
                method: 'DELETE',
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then ( response => response )
                .then(function () {
                    success(removingBox)
                })
        }else {
            alert("You forgot to select HW to Remove")
        }
    }
}
customElements.define ( 'registration-element', CustomElement )
