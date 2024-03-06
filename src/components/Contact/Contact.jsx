export const Contact = ({ name, number, deleteButton }) => {

    return(
        <div>
            
            <ul>
                <li><p>{name}</p></li>
                <li><p>{number}</p></li>
            </ul>

            <button onClick={deleteButton}>Delete</button>
        </div>
    )
}