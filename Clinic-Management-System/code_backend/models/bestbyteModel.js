// import connection
import db from "../config/database.js";

/* 
TABLES:
    - doctor_profile:
    - patient_profile
    - login_tb
    - quotes
*/

//SIGN UP VUE - register new user 
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



//GUEST VUE - validate user inputs
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



//ADD PATIENT VUE - insert new patient records
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



//PATIENTLIST VUE - view,update, and delete patient records
export const getPatientList = (result) => {
    db.query("SELECT patient_id, patient_name, client_since, sex, age, occupation, mobile_no, tel_no, address, recent_schedule, patient_procedure, diagnosis\
             FROM patient_profile Where doctor_id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updatePatientData = (data, id, result) => {
    db.query("UPDATE patient_profile SET patient_name=?, client_since=?, sex=?, age=?, occupation=?, mobile_no=?, tel_no=?, address=?, recent_schedule=?,\
                patient_procedure=?, diagnosis=? WHERE patient_id = ?", 
                [data.patient_name, data.client_since, data.sex, data.age, data.occupation, data.mobile_no, data.tel_no, data.address, 
                data.recent_schedule, data.patient_procedure, data.diagnosis, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deletePatientData = (id, result) => {
    db.query("DELETE FROM patient_profile WHERE patient_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}



//APPOINTMENTS VUE 
export const getAppointments = (result) => {
    db.query("SELECT * FROM appointment_tb WHERE doctor_id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const insertAppointment = (data, result) => {
    db.query("INSERT INTO appointment_tb SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}

export const updateAppointments = (data, id, result) => {
    db.query("UPDATE appointment_tb SET sched_title=?, sched_detail=?, sched_time=?, duration_days=?, bgcolor=? WHERE sched_id=?",
                [data.sched_title, data.sched_detail, data.sched_time, data.duration_days, data.bgcolor, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const deleteAppointments = (id, result) => {
    db.query("DELETE FROM appointment_tb WHERE sched_id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}


//PROFILE SETTINGS
export const getDrProfile = (result) => {
    db.query("SELECT * FROM doctor_profile WHERE id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updateDrProfileId = (data, result) => {
    db.query("UPDATE doctor_profile SET firstName = ?, lastName = ?, email = ?, contactNo= ?, password = ?, confirmPassword= ?, profile_pic= ?\
                WHERE id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);", 
                [data.firstName, data.lastName, data.email, data.contactNo,data.password,data.confirmPassword, data.profile_pic], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const updateDrProfilePic = (data, result) => {
    db.query("UPDATE doctor_profile SET profile_pic= ? WHERE id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);", [data.profile_pic], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const getPicture = (result) => {
    db.query("SELECT profile_pic FROM doctor_profile WHERE id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

export const insertPic = (data, result) => {
    db.query("INSERT INTO sample_pic SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });  
}






//UNUSED

// Get All doctor_profile by id
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
    db.query("SELECT * FROM patient_profile WHERE doctor_id = ?", [id], (err, results) => {             
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





