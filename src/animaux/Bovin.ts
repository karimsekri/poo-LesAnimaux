import { Mammifere } from "./Mammifere";

export class Bovin extends Mammifere {
    constructor(name: string,  tempDeGestatation: number) {
        super(name, "Herbevore",tempDeGestatation);
    }
}