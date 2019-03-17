import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
const matchMedia = {
  matches: false,
  addListener() {},
  removeListener() {}
};
window.matchMedia = window.matchMedia || matchMedia;
