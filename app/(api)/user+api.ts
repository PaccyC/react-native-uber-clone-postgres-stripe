import { neon } from '@neondatabase/serverless';


export async function GET(request:Request){
    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        
    } catch (error) {
        
    }
}