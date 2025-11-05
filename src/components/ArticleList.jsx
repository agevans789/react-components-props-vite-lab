import Article from "./Article";

export default function ArticleList(props) {
    let posts = props.posts || [];
    return (
        <>
          <main>
            {posts.map((post) => {
                return <Article key={post.id} post={post} />
            })}
          </main>
        </>
    );
}