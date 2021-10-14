import {configure} from 'enzyme'
import adapter from '@wojtekmaj/enzyme-adapter-react-17'
import enableHooks from 'jest-react-hooks-shallow';

configure({ adapter: new adapter() });
enableHooks(jest); // for useEffect
