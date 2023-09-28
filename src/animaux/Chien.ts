import { Canide } from "./Canide";

export class Chien extends Canide{
    private _race : string;

    constructor(name: string,  tempDeGestatation: number, race: string) {
        super(name,tempDeGestatation);
        this._race = race;
    }

    cri(): void {
        super.cri();
        console.log("Je m'appelle "+this.nameAnimal + " et je fais Woaf Woaf");
    }
}