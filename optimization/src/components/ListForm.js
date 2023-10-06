import { useState } from "react"
import List from './List';

const ListForm = () => {
    const [enteredItem, setEnteredItem] = useState('');
    const [enteredNumItems, setNumItems] = useState(0);
    const [items, setItems] = useState([]);

    const updateItemHandler = e => setEnteredItem(e.target.value);
    const updateNumItemsHandler = e => setNumItems(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        if (enteredItem.length > 0) {
            setItems(prevItems => [...prevItems, {'title': enteredItem, 'id': prevItems.length}]);
            setEnteredItem('');
        }
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="item">Item</label>
                    <input
                        id="item"
                        type="text"
                        value={enteredItem}
                        onChange={updateItemHandler}
                    />
                </div>
                <div>
                    <label htmlFor="numItems">Number of Items</label>
                    <input
                        id="numItems"
                        type="text"
                        value={enteredNumItems}
                        onChange={updateNumItemsHandler}
                    />
                </div>
                <button>Submit</button>
            </form>
            {items.length > 0 && <List items={items} maxNumber={enteredNumItems} />}
        </>
    )
}

export default ListForm;
