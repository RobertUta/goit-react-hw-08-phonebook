import { useDispatch, useSelector } from 'react-redux';
import { setFilterValue } from '../../redux/filterSlice.js';
import { selectFilterValue } from '../../redux/selectors.js';
import { FormBody, FormTitle, Input } from './Filter.styled';

export default function Filter() {
    const dispatch = useDispatch();
    const filterValue = useSelector(selectFilterValue);

    const handleInputChange = evt => {
        const newFilterValue = evt.target.value;
        dispatch(setFilterValue(newFilterValue));
    };

    return (
        <FormBody>
            <FormTitle>Find contacts by name</FormTitle>
            <Input
                name="filter"
                type="text"
                label="enter name to find"
                size="small"
                value={filterValue}
                onChange={handleInputChange}
            />
        </FormBody>
    );
}
