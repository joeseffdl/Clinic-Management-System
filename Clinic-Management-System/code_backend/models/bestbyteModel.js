// import connection
import db from "../config/database.js";

//SIGN UP VUE - register new user
export const insertDrProfile = (data, result) => {
  db.query("INSERT INTO doctor_profile SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

//GUEST VUE - validate user inputs
export const insertLogin = (data, result) => {
  db.query("INSERT INTO login_tb SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getPassword = (email, result) => {
  db.query(
    "SELECT id,password FROM doctor_profile WHERE email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

//ADD PATIENT VUE - insert new patient records
export const insertPatient = (data, result) => {
  db.query("INSERT INTO patient_profile SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const getLogin = (result) => {
  db.query(
    "SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//PATIENTLIST VUE - view,update, and delete patient records
export const getPatientList = (result) => {
  db.query(
    "SELECT patient_id, patient_name, client_since, sex, age, occupation, mobile_no, tel_no, address, recent_schedule, patient_procedure, diagnosis\
             FROM patient_profile Where doctor_id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const getPatientPic = (id, result) => {
  db.query(
    "SELECT patient_pic FROM patient_profile Where patient_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const updatePatientData = (data, id, result) => {
  db.query(
    "UPDATE patient_profile SET patient_name=?, client_since=?, sex=?, age=?, occupation=?, mobile_no=?, tel_no=?, address=?, recent_schedule=?,\
    patient_procedure=?, diagnosis=?, patient_pic=? WHERE patient_id = ?",
    [
      data.patient_name,
      data.client_since,
      data.sex,
      data.age,
      data.occupation,
      data.mobile_no,
      data.tel_no,
      data.address,
      data.recent_schedule,
      data.patient_procedure,
      data.diagnosis,
      data.patient_pic,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const updatePatientPic = (data, id, result) => {
  db.query(
    "UPDATE patient_profile SET patient_pic=? WHERE patient_id = ?",
    [data.patient_pic, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const deletePatientData = (id, result) => {
  db.query(
    "DELETE FROM patient_profile WHERE patient_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//APPOINTMENTS VUE
export const getAppointments = (result) => {
  db.query(
    "SELECT * FROM appointment_tb WHERE doctor_id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const insertAppointment = (data, result) => {
  db.query("INSERT INTO appointment_tb SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

export const updateAppointments = (data, id, result) => {
  db.query(
    "UPDATE appointment_tb SET sched_title=?, sched_detail=?, sched_time=?, duration_days=?, bgcolor=? WHERE sched_id=?",
    [
      data.sched_title,
      data.sched_detail,
      data.sched_time,
      data.duration_days,
      data.bgcolor,
      id,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const deleteAppointments = (id, result) => {
  db.query(
    "DELETE FROM appointment_tb WHERE sched_id = ?",
    [id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//ENDSCHED
export const insertAppointmentEnd = (data, firstDate, howManyDays, result) => {
  db.query(
    "INSERT INTO appointment_tb SET doctor_id=?, sched_title=?, sched_detail=?, sched_date=?, sched_time=?,\
            duration_days=?,bgcolor=?,end_sched = DATE_ADD( ? , INTERVAL ? -1 DAY)",
    [
      data.doctor_id,
      data.sched_title,
      data.sched_detail,
      data.sched_date,
      data.sched_time,
      data.duration_days,
      data.bgcolor,
      firstDate,
      howManyDays,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const getTodayAppointments = (dateToday, result) => {
  db.query(
    "SELECT * FROM appointment_tb WHERE (? BETWEEN sched_date AND end_sched) AND doctor_id= (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);",
    [dateToday],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

//PROFILE SETTINGS VUE
export const getDrProfile = (result) => {
  db.query(
    "SELECT * FROM doctor_profile WHERE id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);",
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

export const updateDrProfileId = (data, result) => {
  db.query(
    "UPDATE doctor_profile SET firstName = ?, lastName = ?, contactNo= ?, password = ?, confirmPassword= ?, picture_path=?\
                WHERE id = (SELECT doctor_id FROM login_tb ORDER BY id DESC LIMIT 1);",
    [
      data.firstName,
      data.lastName,
      data.contactNo,
      data.password,
      data.confirmPassword,
      data.picture_path,
    ],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// LOGOUT
export const deleteLogin = (result) => {
  db.query("DELETE FROM login_tb", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};

// ADMIN
export const getAdminPassword = (email, result) => {
  db.query(
    "SELECT admin_password FROM admin_tb WHERE admin_email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

export const showAdmins = (result) => {
  db.query("SELECT * FROM admin_tb", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const showAdminLogin = (result) => {
  db.query("SELECT * FROM admin_login", (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

export const getAdminLoginPassword = (result) => {
  db.query(
    "SELECT login_pw FROM admin_login WHERE login_email = ?",
    [email],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results[0]);
      }
    }
  );
};

export const insertAdminLogin = (data, result) => {
  db.query("INSERT INTO admin_login SET ?", [data], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
