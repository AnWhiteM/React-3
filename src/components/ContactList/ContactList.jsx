
import { Contact } from "../Contact/Contact"

export const ContactList = ({ contacts }) => {

    return(
        <div>
            <ul>
            {contacts.map((contact) => (
          <li key={contact.id}>
            <Contact>
                name = {contact.name}
                number = {contact.number}
                deleteButton={() => console.log('Delete button clicked')}
            </Contact>
          </li>
        ))}
            </ul>
        </div>
    )
}