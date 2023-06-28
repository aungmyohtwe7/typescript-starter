import { Pool } from 'pg';

export default new Pool ({
    user: '',
    host: '',
    database: '',
    password: '',
    port: 5432,
    max: 20,
    idleTimeoutMillis: 30000,
    ssl: {
        rejectUnauthorized: false
    }
});