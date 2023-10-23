import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv'

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

dotenv.config({
    path: (__dirname, '.env')
});

export const TOKEN = process.env.TOKEN;
export const CLIENT_ID = process.env.CLIENT_ID;