// Import function from Product Model
import {
  getDrProfile,
  insertDrProfile,
  updateDrProfileId,
  getPassword,
  insertLogin,
  insertPatient,
  getLogin,
  getPatientList,
  updatePatientData,
  deletePatientData,
  insertAppointment,
  getAppointments,
  updateAppointments,
  deleteAppointments,
  deleteLogin,
  getPatientPic,
  getAdminPassword,
  showAdmins,
  showAdminLogin,
  insertAdminLogin,
  updatePatientPic,
  insertAppointmentEnd,
  getTodayAppointments,
} from "../models/bestbyteModel.js";

import multer from "multer";

//SIGN UP VUE
export const createDrProfile = (req, res) => {
  const data = req.body;
  insertDrProfile(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//GUEST VUE
export const createLogin = (req, res) => {
  const data = req.body;
  insertLogin(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showPassword = (req, res) => {
  getPassword(req.params.email, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//ADD PATIENT VUE
export const addPatient = (req, res) => {
  const data = req.body;
  insertPatient(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showLogin = (req, res) => {
  getLogin((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//PATIENT LIST VUE
export const showDrPatientList = (req, res) => {
  getPatientList((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showPatientPic = (req, res) => {
  const id = req.params.id;
  getPatientPic(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updatePatientProfile = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updatePatientData(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updatePatientProfilePic = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updatePatientPic(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deletePatientProfile = (req, res) => {
  const id = req.params.id;
  deletePatientData(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//APPOINTMENTS VUE
export const addAppointment = (req, res) => {
  const data = req.body;
  insertAppointment(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showAppointments = (req, res) => {
  getAppointments((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateAppointment = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateAppointments(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const deleteAppointment = (req, res) => {
  const id = req.params.id;
  deleteAppointments(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//ENDSCHED
export const addAppointmentEnd = (req, res) => {
  const data = req.body;
  const firstDate = req.params.firstDate;
  const howManyDays = req.params.howManyDays;
  insertAppointmentEnd(data, firstDate, howManyDays, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showTodayAppointments = (req, res) => {
  const dateToday = req.params.dateToday;
  getTodayAppointments(dateToday,(err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//PROFILE SETTINGS VUE
export const showDrProfile = (req, res) => {
  getDrProfile((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const updateDrProfile = (req, res) => {
  const data = req.body;
  updateDrProfileId(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//LOGOUT
export const deleteLogin_tb = (req, res) => {
  deleteLogin((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

//MULTER - Profile Settings
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/profile_pictures/");
  },
  filename: function (req, file, cb) {
    const mimeExtension = {
      "image/jpeg": ".jpeg",
      "image/jpg": ".jpg",
      "image/png": ".png",
    };
    const pictureName = file.fieldname + "-" + file.originalname + mimeExtension[file.mimetype]
    cb(null, pictureName);
  },
});

export const uploadProf_Pic = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(nulll, false);
      req.fileError = "File Format is not valid";
    }
  },
});

//MULTER - Add Patient
const storage_patient = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../public/patient_pictures/");
  },
  filename: function (req, file, cb) {
    const mimeExtension = {
      "image/jpeg": ".jpeg",
      "image/jpg": ".jpg",
      "image/png": ".png",
    };
    cb(null, file.fieldname + "-" + file.originalname + mimeExtension[file.mimetype]);
  },
});

export const uploadPatient_Pic = multer({
  storage: storage_patient,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png"
    ) {
      cb(null, true);
    } else {
      cb(nulll, false);
      req.fileError = "File Format is not valid";
    }
  },
});

//ADMIN
export const showAdminPassword = (req, res) => {
  getAdminPassword(req.params.admin_email, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showAdmin = (req, res) => {
  showAdmins((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const showAdminLogins = (req, res) => {
  showAdminLogin((err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

export const createAdminLogin = (req, res) => {
  const data = req.body;
  insertAdminLogin(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
