const NestedChild = () => {
    console.log('<NestedChild /> is called.');

    return <p id="nested-child">
        A component (NestedChild), deeply nested into the component tree.
        </p>;
}

export default NestedChild;
