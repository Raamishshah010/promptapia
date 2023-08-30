import { connectToDatabase } from "@utils/database";
import Prompt from '@models/prompt';


// GET SINGLE PROMPT
export const GET = async (request, { params }) => {

    try {

        await connectToDatabase();

        const prompt = await Prompt.findById(params.id).populate('creator');

        if (!prompt) return new Response("No Prompt found", { status: 404 })

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Error While Fetching The Prompts", { status: 500 })

    }
}


// EDIT SINGLE PROMPT


export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.json();

    try {

        await connectToDatabase();

        const existingPrompt = await Prompt.findById(params.id);
        
        if (!existingPrompt) return new Response("No Prompt found", { status: 404 })

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();



        return new Response(JSON.stringify(existingPrompt), { status: 200 })

    } catch (error) {
        return new Response("Error While Editing The Prompts", { status: 500 })

    }
}





// DELETE SINGLE PROMPT

export const DELETE = async (request, { params }) => {
    try {

        await connectToDatabase();

        await Prompt.findByIdAndDelete(params.id);

        return new Response("Prompt Deleted Successfully", { status: 200 })

    } catch (error) {
        return new Response("Failed To Delete Prompt", { status: 500 })

    }
}