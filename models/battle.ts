import { Musician } from "./musician"

export class Battle
{
    ownBand:Musician[];
    opponentBand:Musician[];
    isOwnTurn:boolean;
    constructor(ownBand:Musician[],opponendBand:Musician[])
    {
        this.ownBand=ownBand;
        this.opponentBand=opponendBand;
        this.isOwnTurn=true;
    }
}