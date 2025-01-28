import { data } from '@/constants';
import { neon } from '@neondatabase/serverless';


export async function POST(request:Request){
    try {
        const sql = neon(`${process.env.DATABASE_URL}`);
        const {name, email, clerkId}= await request.json()

        console.log(name, email,clerkId);
        
        if(!name || !email || !clerkId){
            return Response.json({error:"All fields are required"},{
                status: 400
            })
        }
        const response = await sql`
        INSERT INTO users(
            name,
            email,
            clerk_Id
        ) VALUES(
            ${name},
            ${email},
            ${clerkId}
        )
        `
        console.log(response);
        
        return new Response(JSON.stringify({data: response}),{status: 201})
        
     } catch (error) {
       console.error(error)
       return new Response(JSON.stringify({error: error}),{status: 500})      
    }
}