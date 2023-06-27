import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import cssModule from './ContactForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import {  useState } from 'react';
import { addContact } from 'redux/contacts/contactsOperations';
import { selectContacts } from 'redux/selectors';


const ContactForm = () => {
	const contacts = useSelector(selectContacts); 

	 const [isDisabled, setIsDisabled] = useState(true);
	 const [name, setName] = useState('');
	 const [number, setNumber] = useState('');

	 
	 const dispatch = useDispatch();

	 const onSubmitForm = e => {
		 e.preventDefault();
		 const newContact = {
			 name,
			 number
		 };
		 if (checkNewNameRepeate(name)) {
			 alert(`${name} is already in contacts!`);
		 } else {
			 dispatch(addContact(newContact));
			 setName('');
			 setNumber('');
		 }
	 };
  
	const onChangeInput = (e)=> {
		switch (e.target.name) {
			case 'name': setName(e.target.value);
			break;
			case 'number': setNumber(e.target.value);
				break;
			default:
				
			return;

			
		}
		if (number && name) {
			setIsDisabled(false);
		} else setIsDisabled(true);	
	}

	 const checkNewNameRepeate = newName => {
		 let arrayOfNamesInLowerCase = contacts.map(item =>
			 item.name.toLocaleLowerCase()
		 );
		 return arrayOfNamesInLowerCase.includes(newName.toLocaleLowerCase());
	 };

	 
	return (
		<form className={cssModule.form} onSubmit={onSubmitForm} action="">
			<TextField onChange={onChangeInput} type='text' 
				
					pattern=
					  "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
				 
				name='name' id="filled-basic" label="Name" variant="filled" />
			<TextField type='tel' 
				onChange={onChangeInput}
					pattern=
					  '+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}'
				  
				name='number' id="filled-basic" label="Number" variant="filled" />
			
			<Button disabled={isDisabled} type="submit" variant="contained">Add contact</Button>
		</form>
	)
  }

export default ContactForm;

// export default class ContactForm extends Component {
// 	state = {
// 		name: '',
// 		number: ''
// 	}
// 	handleChange = (e) => {
// 		// console.log(e)
// 		this.setState({
// 			[e.target.name]: e.target.value
// 		})
// 	}

// 	onSubmitForm = (e) => {
// 		e.preventDefault()
// 		const contact = {
// 			id: nanoid(5),
// 			...this.state,
// 		}
// 		this.props.addContact(contact)
// 		this.setState({
// 			name: '',
// 			number: ''
// 		})
// 	}

//   render() {
// 	return (
// 		<form className={cssModule.form} onSubmit={this.onSubmitForm} action="">
// 			<TextField type='text' onChange={this.handleChange}
// 				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// 				value={this.state.name}
// 				name='name' id="filled-basic" label="Name" variant="filled" />
// 			<TextField type='tel' onChange={this.handleChange}
// 				pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
// 				value={this.state.number}
// 				name='number' id="filled-basic" label="Number" variant="filled" />
			
// 			<Button type="submit" variant="contained">Add contact</Button>
// 		</form>
// 	)
//   }
// }
