import { Link } from 'react-router-dom';

const ExtrasHome = () => {
    return (
            <div>
                <h1>Extras</h1>
                <ul>
                    <li><Link to="/extras/workout">Workout Assistant</Link></li>
                    <li><Link to="/extras/plant">Plant Care Assistant</Link></li>
                </ul>
            </div>
        );
    };

export default ExtrasHome;