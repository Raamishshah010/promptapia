import { connectToDatabase } from "@utils/database";
import Prompt from '@models/prompt';



export const GET = async (request) => {

    try {

        await connectToDatabase();

        const prompt = await Prompt.find({}).populate('creator');


        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Error While Fetching The Prompts", { status: 500 })

    }
}