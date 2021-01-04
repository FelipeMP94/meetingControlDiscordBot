  class Fala{
        constructor(){
            this._tempo = 0;
            this._cont = 0 ;
            this._inteval;

        }
        setTempo(tempo){
           return this._tempo = tempo;
        }
        contmais(){
            return this._cont++;
        }
        contreset(){
            return this._cont = 0;
        }
        _convet(regex){
            let total = (regex[1]*60)+(regex[2]*1);
            return total;

        }
        get tempoFala(){
            let tempFala = this._tempo; 
            return tempFala;
        }
        get cont(){
            let cont = this._cont;
            return cont;
        }
    }

module.exports = Fala;
