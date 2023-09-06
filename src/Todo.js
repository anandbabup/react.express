import './App.css';

function Todo(props) {
    const length = props.items?.length || 0;
    return (
        <>
            <h2 id="list-heading">{length} tasks remaining</h2>
            <ul
                className="todo-list stack-large stack-exception"
                aria-labelledby="list-heading">
                {props.items.map((todo,index) => (
                    <li key={`todo-${index}`} className="todo stack-small">
                        <div className="c-cb">
                            <input id={`todo-${index}`} type="checkbox"/>
                            <label className="todo-label" htmlFor={`todo-${index}`}>
                                {todo}
                            </label>
                            <span>
                                <i className="fa fa-edit"></i>
                                <i className="fa fa-trash"></i>
                            </span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default Todo;