class CalcController {

    constructor(){

        this._locale = 'pt-BR';  
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    // TUDO QUE IRA INICIAR NA CALCULADORA

    initialize (){

        this.setDisplayDateTime();

        setInterval(()=>{  

            this.setDisplayDateTime();

        }, 1000);
    }   

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }

    
    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }
    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }
    
    get displayDate(){
        return this._dateEl.innerHTML;
    }
    set displayDate(value){
        this._dateEl.innerHTML = value;
    }

    get displayTime (){
        return  this._timeEl.innerHTML;
    }
    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    get timeEl() {
        return this._timeEl.innerHTML;
    }
    set timeEl (value) {
        this._timeEl.innerHTML = value; 
    }  

    get currentDate(){ 
        return new Date;
    }
    set currentDate(value) {
        this._currentDate = value; 
    }

};  