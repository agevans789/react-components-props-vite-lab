export default function About({about, ...props}) {
    let image = props.image;
    if (!image) {
        image = "https://via.placeholder.com/215";
    };
    return (
        <>
            <aside>
                <img src={image} alt="blog logo"/>
                <p>{about}</p>
            </aside>
        </>
    )
}