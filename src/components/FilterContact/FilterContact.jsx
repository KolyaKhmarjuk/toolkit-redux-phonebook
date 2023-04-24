import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/contacts/contactsAction';

export default function FilterContact() {
  // const {filter} = useSelector((state) => state.contacts.filter)
  const dispatch = useDispatch();
  return (
    <>
      <label className="filterLabel">
        Find
        <input
          type="text"
          name="filter"
          // value={filter}
          onChange={e => {
            dispatch(addFilter(e.target.value));
          }}
          className="inputFilter"
        />
      </label>
    </>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onFilter: value => dispatch(addFilter(value)),
// });

// export default connect(null, mapDispatchToProps)(FilterContact);
