var employees= [];

function addEmployee(empName, empDepartment, empDesignation, empEmail, empPhone) {
    var employee = {
        id: generateID(),
        name: empName,
        department: empDepartment,
        designation: empDesignation,
        email: empEmail,
        phone: empPhone
    };
    employees.push(employee);
    console.log(employees)
}


function displayEmployees() {
    console.log("All Employees: ");
    employees.forEach(function(employee) {
        console.log( "Name: " +employee.name + " , Department: " +employee.department + " , Designation : " + employee.designation + ", Email: " + employee.email + ", Phone : " +employee.phone);

    });
}


function generateID(){
    return '_' + Math.random().toString(36).substr(2, 9);
};

function clearForm(){
    document.getElementById('empName').value='';
    document.getElementById('empDepartment').value='';
    document.getElementById('empDesignation').value='';
    document.getElementById('empEmail').value='';
    document.getElementById('empPhone').value='';
}


function deleteEmployee(employeeId) {
    var index = employees.findIndex(function(employee){
        return employee.id === employeeId;
    });

    if  (index !== -1) {
        employees.splice(index, 1);
        console.log("Employeed Id " + employeeId + "deleted") 
    } else {
        console.log("Error in deleting Employee");  
    }
}




document.getElementById('employeeForm').addEventListener(
    'submit', function (event) {
        event.preventDefault(); 

        var empName = document.getElementById("empName").value;
        var empEmail = document.getElementById("empEmail").value;
        var empPhone = document.getElementById( "empPhone" ).value;
        var empDepartment = document.getElementById("empDepartment").value;
        var empDesignation = document.getElementById( "empDesignation" ).value;


        var error = document.getElementById("error");
        error.innerHTML = "";

        if (!empName.trim()) {
            error.innerHTML = "Please enter name";
            return;
        }

      

        if(!validateEmail(empEmail)) {
            error.innerHTML += " Please Enter valid email";
            return;
        }

       

        if(!validatePhone(empPhone)) {
            error.innerHTML += "\n Invalid Phone number format.";
            return;
        }

        if(!empDesignation.trim()) {
error.innerHTML += "\n Designation cannot be empty.";
return;
        }

        if(!empDepartment === ""){
            error.innerHTML = "Department cannot be empty";
            return;
        }

        addEmployee(empName, empDepartment, empDesignation, empEmail, empPhone);

        displayEmployees();

        clearForm();

        alert('registration successfill');

        });


     

        function validateEmail(email) {
            var re = /^[^\s@]+\@[^\s@]+$/;
            return re.test(email);

        }


        function validatePhone(phone) {
            var re = /^\d{10}$/;
            return re.test(phone);
        }