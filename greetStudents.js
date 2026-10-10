function greetStudents(student, cohort) {
	return `Welcome to ${cohort}, ${student}`
}

function someOtherfx() {}

// this exports the function into module object
module.exports = greetStudents