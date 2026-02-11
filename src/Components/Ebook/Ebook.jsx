import { Link } from "react-router";



export default function Ebook({ ebook }) {



    return (
        <Link to={`/ebook/${ebook.id}`}>
            <div>
                <h3>{ebook.title}</h3>
                <p>{ebook.author}</p>
            </div>
        </Link>
    )
}