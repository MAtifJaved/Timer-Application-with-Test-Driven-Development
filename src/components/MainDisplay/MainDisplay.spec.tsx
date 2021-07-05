import {shallow} from 'enzyme';
import MainDisplay from './MainDisplay'

describe('Controller Component tests', () => {

    let container = shallow(<MainDisplay />);

    it('should render a div', () => {
    expect(container.find('div').length).toEqual(2);
    });

     it('should render 3 p tags', () => {
    expect(container.find('p').length).toEqual(3);
    });

});
