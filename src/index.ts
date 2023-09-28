import { Bovin } from "./animaux/Bovin";
import { Canide } from "./animaux/Canide";
import { Chien } from "./animaux/Chien";
import { Felin } from "./animaux/Felin";
import { Ovin } from "./animaux/Ovin";


const chien1 =  new Chien("Rex",2,"BergerAllemand")
console.log(chien1);
chien1.cri();

const chat1 = new Felin("Chat", 2);
console.log(chat1);

const mouton1 = new Ovin("Mouton", 5);
console.log(mouton1);
mouton1.cri();

const vache1 = new Bovin("Vache", 9);
console.log(vache1);


