import { saySomething } from "./script1.js";
import greeting from "./script1.js";
import { name1, name2} from "./script1.js";
//if it doesnt have a name, we can import it with any name
console.log(saySomething());
console.log(greeting + name1 + name2);