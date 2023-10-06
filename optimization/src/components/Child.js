import NestedChild from "./NestedChild";

const Child = () => {
    console.log('<Child /> is called.');

    return (
        <div id="child">
            <p>
                A component, rendered inside another component (Parent), 
                containing yet another component (NestedChild).
            </p>
            <NestedChild />
        </div>
    )
}

export default Child;
