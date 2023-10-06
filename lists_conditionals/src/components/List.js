import Element from "./Element";

const List = ({list}) => (
    <ul>
        {list.map(item => <Element element = {item} />) }   
    </ul>
);

export default List;