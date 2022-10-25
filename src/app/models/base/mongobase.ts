export class Mongobase {
    private _createdOn: Date;
    private _modifiedOn: Date;
    private _guid: string;

    constructor() {
        this._createdOn = new Date();
        this._modifiedOn = new Date();
        this._guid = '';
    }

    public get Guid(): string {
        return this._guid;
    }

    public set Guid(value:string) {
        this._guid = value;
    }

    public get CreatedOn() : Date {
        return this._createdOn;
    }

    public set CreatedOn(value:Date) {
        this._createdOn = value;
    }
}
