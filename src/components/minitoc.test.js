import {render , act, screen, fireEvent, waitFor } from '@testing-library/react' ;
import MiniToc from './Minitoc';
  describe('test description', () => {
// ex: let wrapper;
beforeEach(() => { 
	render(<MiniToc />)  
}); // ex: wrapper = shallow(<Component />);

it('folds content when click on "In this Page"', async () => { 
	const inThisPage = screen.getByTitle('click here to fold/unfold the mini table of contents')
	const minitocRoot = screen.getByTitle('minitoc root')
	expect(getComputedStyle(minitocRoot).display).toBe('block')
	fireEvent.click(inThisPage)
	await waitFor(() => 
		expect(getComputedStyle(minitocRoot).display).toBe('none'))
 });


});