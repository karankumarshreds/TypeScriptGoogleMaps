import { CustomMap } from './CustomMap';
import User from './User';
import Company from './Company';

// const user = new User();
// console.log(user);

// const company = new Company();
// console.log(company);



const user = new User();
const company = new Company();
const customMap = new CustomMap();

customMap.addMarker(user);
customMap.addMarker(company);

