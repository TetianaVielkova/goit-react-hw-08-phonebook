import { useDispatch} from 'react-redux';
import { contactsFilterAction } from './../../redux/Contacts/filter.slice';
import {Input, Label, Form} from './Filter.styled'


export const Filter = () => {
    const dispatch = useDispatch();
    
    return(
        <Form>
            <Label>Find contacts by name
                <Input
                autoComplete="off"
                type="text"
                name="filter"
                onChange={event => dispatch(contactsFilterAction(event.target.value.toLowerCase()))}
                />
            </Label>
        </Form>
    )
}