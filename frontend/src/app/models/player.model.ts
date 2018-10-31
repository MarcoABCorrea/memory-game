export class Player {
	private _id: Number;
	private _name: string;
	private _tries: Number;

	public get id(): Number {
		return this._id;
	}
	
	public set id(value: Number) {
		this._id = value;
	}

	public get name(): string {
		return this._name;
	}
	
	public set name(value: string) {
		this._name = value;
	}

	public get tries(): Number {
		return this._tries;
	}
	
	public set tries(value: Number) {
		this._tries = value;
	}
}
