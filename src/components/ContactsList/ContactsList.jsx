import { useSelector, useDispatch } from 'react-redux';
import { deleteContactThunk } from '../../redux/operations.js';
import { selectFilteredContacts } from '../../redux/selectors.js';
import {
    ContactList,
    ContactListItem,
    StyledBtn,
    NameText,
    NumberText,
    Title,
    ContactListWrapper,
    BtnWrapper,
    TableHeadRow,
} from './ContactsList.styled';

export default function ContactsList() {
    const dispatch = useDispatch();
    const filteredContacts = useSelector(selectFilteredContacts);

    const handleDeleteBtn = id => dispatch(deleteContactThunk(id));

    return (
        <ContactListWrapper>
            <Title>Your saved contacts</Title>
            <ContactList>
                <thead>
                    <TableHeadRow>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Delete</th>
                    </TableHeadRow>
                </thead>
                <tbody>
                    {filteredContacts.map(({ name, number, id }) => (
                        <ContactListItem key={id}>
                            <NameText>{name}:</NameText>
                            <NumberText>{number}</NumberText>
                            <BtnWrapper>
                                <StyledBtn
                                    type="button"
                                    variant="outlined"
                                    size="small"
                                    onClick={() => {
                                        handleDeleteBtn(id);
                                    }}
                                >
                                    Delete
                                </StyledBtn>
                            </BtnWrapper>
                        </ContactListItem>
                    ))}
                </tbody>
            </ContactList>
        </ContactListWrapper>
    );
}
