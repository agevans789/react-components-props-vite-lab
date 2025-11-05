export default function Article({title, preview, ...props}) {
    let date = props.date || "January 1, 1970";
    return (
        <>
            <article>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        </>
    )
}