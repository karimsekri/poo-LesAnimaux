import { json } from "stream/consumers";
import { Bovin } from "./animaux/Bovin";
import { Canide } from "./animaux/Canide";
import { Chien } from "./animaux/Chien";
import { Felin } from "./animaux/Felin";
import { Ovin } from "./animaux/Ovin";

import axios from 'axios';
import xml2js from 'xml2js';
import HTMLParser from 'html-to-json-parser';


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

// axios.get('https://www.data.gouv.fr/fr/datasets/r/70967da2-234e-4583-8ff1-5ce885b1acb3')
//   .then(response => {
//     //console.log(response.data);
//     const mesDatas = response.data;
//     console.log(mesDatas);
//    xml2js.parseString(mesDatas, (err, result) => {
//      console.log(result);
//    });
//   })
//   .catch(error => {
//     console.error(error);
//   });
