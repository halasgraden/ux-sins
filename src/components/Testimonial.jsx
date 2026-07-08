export default function Testimonial(props) {
    return (
        <div className="testimonial-container">
            <h2>{props.quote}</h2>
            <p>{props.author}</p>
            <img src="../public/5stars.svg" />
        </div>
    )
}