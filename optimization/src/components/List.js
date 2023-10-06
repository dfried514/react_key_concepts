import { useMemo } from "react";

const List = ({ items, maxNumber }) => {
    console.log('<List /> is executed.');
    const sortedItems = useMemo(() => {
        console.log('Sorting');

        return items.sort((a,b) => {
            if (a.id > b.id)
                return 1;
            if (a.id < b.id)
                return -1;
            return 0;
        });
    },
        [items]
    );
    
    const listItems = sortedItems.slice(0, maxNumber);

    return (
        <ul>
            {listItems.map(item => <li key={item.id}>{item.title} (ID: {item.id})</li>)}
        </ul>
    );
}

export default List;
