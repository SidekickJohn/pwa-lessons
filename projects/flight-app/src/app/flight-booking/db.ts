import Dexie from 'dexie';

export const basketTableName = 'basket';

const schema: { [key: string]: string } = {};
schema[basketTableName] = 'id,date';

export const db = new Dexie('flightdb');

db.version(1).stores(schema);
