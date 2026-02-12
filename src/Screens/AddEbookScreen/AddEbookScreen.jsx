import { Link } from "react-router";
import NewEbookForm from "../../Components/NewEbookForm/NewEbookForm";
import { Button } from "../../Components/shared/FormComponents";

export default function AddEbookScreen() {
    return (
        <div className="chapters-container">
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Button>← Back</Button>
                </Link>
            </div>
            <NewEbookForm />
        </div>
    );
}
