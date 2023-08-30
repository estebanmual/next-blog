import { useRouter } from "next/router"

type Props = {}

function Post({ }: Props) {
    const router = useRouter()
    const { postId } = router.query
    return (
        <div>
            <h1>Single post page</h1>
            <h3 className="text-xl mb-2">This is post {postId}</h3>
            <button 
                className="rounded text-sm bg-indigo-600 text-white p-1.5"
                onClick={() => router.push('/posts')}
            >
                Go back
            </button>
        </div>
    )
}

export default Post