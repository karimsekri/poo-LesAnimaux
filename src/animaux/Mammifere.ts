import { IAnimaux } from "./IAnimaux";

export abstract class Mammifere implements IAnimaux {
    public nameAnimal: string;
    public regimeAlimentaire: string;
    private _tempDeGestatation: number;



    constructor(name: string, regimeAlimentaire : string, tempDeGestatation: number) {
        this.nameAnimal = name;
        this._tempDeGestatation = tempDeGestatation;
        this.regimeAlimentaire = regimeAlimentaire;
    }
    
    cri(): void {
        console.log("Nous sommes tous des Mammifères");
    }


    public get tempDeGestatation(): number {
        return this._tempDeGestatation;
    }
    public set tempDeGestatation(value: number) {
        this._tempDeGestatation = value;
    }
}