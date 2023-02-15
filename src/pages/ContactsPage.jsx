import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectIsLoading } from 'redux/Contacts/contacts.selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Container, Title, SubTitle } from './../components/App.styled';
import { Filter } from 'components/Filter/Filter';
import { getContactsThunk } from 'redux/Contacts/contacts.thunk';

export default function Contacts() {
    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getContactsThunk());
    }, [dispatch]);

    return (
    <>
        <Container>
        <Title>Phonebook</Title>
        <ContactForm/>
        <SubTitle>Contacts</SubTitle>
        <Filter/>
        <div>{isLoading && 'Request in progress...'}</div>
        <ContactList/> 
      </Container>
    </>
    );
}