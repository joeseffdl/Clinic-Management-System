// import connection
import db from "../config/database.js";

/* 
TABLES:
    - doctor_profile:
        firstName
        lastName
        email
        password

    - patient_profile
    - quotes
*/

 
// Get All doctor_profile
export const getDrProfile = (result) => {
    db.query("SELECT * FROM doctor_profile", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Get All login
export const getLogin = (result) => {
    db.query("SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Get doctor_profile by id
export const getDrProfileId = (id, result) => {
    db.query("SELECT * FROM doctor_profile WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Get patient data
export const getPatient = (id, result) => {
    db.query("SELECT * FROM patient_profile WHERE doctor_id =", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}


 
// Insert data to doctor_profile table
export const insertDrProfile = (data, result) => {
    db.query("INSERT INTO doctor_profile SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}
 
// Update doctor_profile by id
export const updateDrProfileId = (data, id, result) => {
    db.query("UPDATE doctor_profile SET firstName = ?, lastName = ?, email = ?, password = ? WHERE id = ?", [data.firstName, data.lastName, data.email, data.password, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete doctor_profile by id
export const deleteDrProfileId = (id, result) => {
    db.query("DELETE FROM doctor_profile WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


// Get password
export const getPassword = (email, result) => {
    db.query("SELECT id,password FROM doctor_profile WHERE email = ?", [email], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}


// Insert data to login_tb
export const insertLogin = (data, result) => {
    db.query("INSERT INTO login_tb SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// Insert data to patient_profile
export const insertPatient = (data, result) => {
    db.query("INSERT INTO patient_profile SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

// get admin password
export const getAdminPassword = (email, result) => {
    db.query("SELECT admin_password FROM admin_tb WHERE admin_email = ?", [email], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const showAdmins = (result) => {
    db.query("SELECT * FROM admin_tb", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const showAdminLogin = (result) => {
    db.query("SELECT * FROM admin_login", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const getAdminLoginPassword = (result) => {
    db.query("SELECT login_pw FROM admin_login WHERE login_email = ?", [email], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

export const insertAdminLogin = (data, result) => {
    db.query("INSERT INTO admin_login SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

