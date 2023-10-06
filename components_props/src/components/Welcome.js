import PropTypes from 'prop-types';

export default function Welcome({obj, children}) {
    return (
        <div>
            Welcome, {obj.name}
            <div>
                Greetings, {obj.age}
            </div>
            <div style={{color: "red"}}>
                {children} 
            </div>
        </div>
    )
}

Welcome.propTypes = {
    obj: PropTypes.exact({
        name: PropTypes.string,
        age: PropTypes.string
    })
}