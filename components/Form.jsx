import Link from "next/link"

const Form = ({
    type,
    post,
    setPost,
    submitting,
    handleSubmit
}) => {
    return (
        <section className="
            w-full
            max-w-full 
            flex-start
            flex-col
        ">

            <h1 className="
                head_text
                text-left
            ">
                <span className="blue_gradient">{type} Post</span>
            </h1>
            <p className="desc text-left max-w-md">{type} Spark creativity effortlessly with our AI Prompt Generation Web. Whether you're a writer, artist, or creator, discover endless inspiration at your fingertips.
            </p>

            <form onSubmit={handleSubmit}
                className="
        mt-5
        w-full
        max-2-2xl
        flex flex-col gap-7
        glassmorphism
        
        "
            >

                <label className="flex flex-col gap-4">
                    <span
                        className="
            font-satoshi
            font-semibold
            text-base
            text-gray-700
            "
                    >Your AI Prompt</span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => {
                            setPost({ ...post, prompt: e.target.value })
                        }}
                        required
                        placeholder="Write your prompt here..."
                        className="form_textarea "
                    ></textarea>

                </label>
                <label className="flex flex-col gap-4">
                    <span
                        className="
            font-satoshi
            font-semibold
            text-base
            text-gray-700
            "
                    >Tag <span> (#product, #product, #webdevelopment)</span></span>

                    <input
                        value={post.tag}
                        onChange={(e) => {
                            setPost({ ...post, tag: e.target.value })
                        }}
                        required
                        placeholder="#tag"
                        className="form_input"
                    />

                </label>
                        
                <div
                className="
                flex-end mx-3 mb-5 gap-4
                "
                >
                    <Link href="/" className="text-gray-500 text-sm">
                        Cancel
                    </Link>

                    <button
                    type="submit"
                    disabled={submitting}
                    >

                        {
                            submitting ? `${type}...` : type
                        }

                    </button>
                </div>

            </form>


        </section>
    )
}

export default Form


