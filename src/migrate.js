import Coordinator from "./models/coordinator";
import Responsible from "./models/responsible";
import Secretary from "./models/secretary";
import Student from "./models/student";
import Teacher from "./models/teacher";

console.log("Creating tables in the database...");

Coordinator.sync({force: true});
Responsible.sync({force: true});
Secretary.sync({force: true});
Student.sync({force: true});
Teacher.sync({force: true});