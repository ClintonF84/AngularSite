import { Mongobase } from "./base";

export class BlogSubject extends Mongobase {
    private _title: string;

    constructor() {
        super();
        this._title = '';
    }

    public get Title(): string {
        return this._title;
    }

    public set Title(value: string) {
        this._title = value;
    }
}
