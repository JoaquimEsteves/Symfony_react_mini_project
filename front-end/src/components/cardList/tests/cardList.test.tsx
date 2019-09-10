import { mount } from 'enzyme';
import CardList from '../cardList';
import '../../../setupTests';

it('try out the snapshot yo', () => {
    const example = [{
        id: 1, name: "John Doe",
        email: "johndoe@email.com", username: "johnDoe"
    }];
    expect(mount(CardList(example)).debug()).toMatchSnapshot();
})