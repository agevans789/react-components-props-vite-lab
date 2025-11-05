import Article from "./Article";

export default function ArticleList(props) {
    let posts = props.posts || [];
    return (
        <>
          <main>
            [
                posts.map((post) <Article key={posts.id} post={post}/>)
            ]
          </main>
        </>
    )
}