import { CrudDocument } from "wacom";

export interface Budgettransaction extends CrudDocument {
	name: string;
	description: string;
}
