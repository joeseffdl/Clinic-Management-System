// import express
import express from "express";

// import function from controller
import {
  showDrProfile,
  createDrProfile,
  updateDrProfile,
  showPassword,
  createLogin,
  addPatient,
  showLogin,
  showDrPatientList,
  updatePatientProfile,
  deletePatientProfile,
  addAppointment,
  showAppointments,
  updateAppointment,
  deleteAppointment,
  uploadProf_Pic,
  deleteLogin_tb,
  uploadPatient_Pic,
  showPatientPic,
  showAdminPassword,
  showAdmin,
  showAdminLogins,
  createAdminLogin,
  updatePatientProfilePic,
  addAppointmentEnd,
  showTodayAppointments,
} from "../controllers/bestbyte.js";

// init express router
const router = express.Router();

//SIGN UP VUE
router.post("/doctorProfile", createDrProfile);

//GUEST VUE
router.post("/login", createLogin);
router.get("/login/:email", showPassword);

//ADD PATIENT VUE
router.get("/login", showLogin);

//PATIENT LIST VUE
router.get("/patientProfile", showDrPatientList);
router.get("/patientProfile/:id", showPatientPic);
router.put("/patientProfile/picture/:id", updatePatientProfilePic);
router.delete("/patientProfile/:id", deletePatientProfile);

//APPOINTMENT VUE
router.get("/appointments", showAppointments);
router.post("/appointments", addAppointment);
router.put("/appointments/:id", updateAppointment);
router.delete("/appointments/:id", deleteAppointment);
router.post("/appointments/:firstDate/:howManyDays", addAppointmentEnd);
router.get("/appointments/:dateToday", showTodayAppointments);

//PROFILE SETTINGS VUE
router.get("/doctorProfile", showDrProfile);

//LOGOUT
router.delete("/login", deleteLogin_tb);

//MULTER - profile settings
router.put("/doctorProfile", uploadProf_Pic.single("picture"), updateDrProfile);

//MULTER - add patient
router.post("/patientProfile", uploadPatient_Pic.single("patient"), addPatient);

//MULTER - update patient
router.put("/patientProfile/:id",uploadPatient_Pic.single("patient"), updatePatientProfile);

//ADMIN
router.get("/admin/:admin_email", showAdminPassword);
router.get("/admintb", showAdmin);
router.get("/adminlogin", showAdminLogins);
router.post("/adminlogin", createAdminLogin);

// export default router
export default router;
