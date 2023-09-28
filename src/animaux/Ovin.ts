import { Mammifere } from "./Mammifere";

export class Ovin extends Mammifere {
    constructor(name: string,  tempDeGestatation: number) {
        super(name, "Herbevore",tempDeGestatation);
    }

    cri(): void {
        super.cri();
        console.log("Nous sommes tous des Ovins");
    }
}