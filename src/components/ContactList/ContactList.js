import React, { useEffect } from 'react'
import cssModlue from './ContactList.module.css'
import { selectError, selectFilteredContacts, selectIsLoading } from 'redux/selectors';
import ContactItem from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperations';


export default function ContactList() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);


	const defaultText = 'Not have a contacts'

	const filteredList = useSelector(selectFilteredContacts)

	return (
		<>
			{isLoading && <p>Loading tasks...</p>}
			{error && <p>{error}</p>}

			{filteredList.length > 0 && (
				<ul className={cssModlue.list}>
					{
						filteredList ? filteredList.map((item) => {
							return <ContactItem key={item.id} contact={item} />
						}) : defaultText
					}
				</ul>
			)}

		</>

	)
}
