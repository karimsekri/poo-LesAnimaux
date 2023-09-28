import { Mammifere } from "./Mammifere";

export class Canide extends Mammifere {
    private _griffesRetractiles : boolean;
    constructor(name: string,  tempDeGestatation: number) {
        super(name, "Carnivore",tempDeGestatation);
        this._griffesRetractiles = false;
    }
}