import sqlite3 from 'sqlite3';
import { open, Database } from 'sqlite';

class DatabaseClient {
    private db: Database | null = null;

    async connect() {
        this.db = await open({
            filename: './tools.db',
            driver: sqlite3.Database
        });
    }

    async disconnect() {
        if (this.db) {
            await this.db.close();
            this.db = null;
        }
    }

    async run(query: string, params: any[] = []) {
        if (!this.db) {
            throw new Error('Database not connected');
        }
        return this.db.run(query, params);
    }

    async get(query: string, params: any[] = []) {
        if (!this.db) {
            throw new Error('Database not connected');
        }
        return this.db.get(query, params);
    }

    async all(query: string, params: any[] = []) {
        if (!this.db) {
            throw new Error('Database not connected');
        }
        return this.db.all(query, params);
    }
}

export default new DatabaseClient();