class hero{
	constructor(nome, idade, tipo){
    	this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
        atacar(){
            let ataque = '';            
            switch (this.tipo) {
                case 'mago':
                  ataque = 'magia';
                  break;
                case 'guerreiro':
                  ataque = 'espada';
                  break;
                case 'monge':
                  ataque = 'artes marciais';
                  break;
                case 'ninja':
                  ataque = 'shuriken';
                  break;
                default:
                  ataque = 'não tem um ataque definido';
              }
        
            console.log(`O ${this.nome} que tem ${this.idade} e é ${this.tipo} atacou usando ${ataque}`)
        }

}

let heroTest = new hero("Henrique", "22", "guerreiro")

heroTest.atacar()
