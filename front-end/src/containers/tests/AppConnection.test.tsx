import { mapDispatchToProps, mapStateToProps } from '../App';
import '../../setupTests';



it('test App MapStateToProps', () => {
    const stateToProps = mapStateToProps(
        {
            requestUsers: { error: '', isPending: false, users: [] },
            searchUsers: { searchField: 'yo' }
        }
    );
    expect(stateToProps).toEqual({ searchField: 'yo', users: [], isPending: false, error: '' })
})

it('test App MapDispatchToProps', () => {
    throw Error('Not Implemented');
})