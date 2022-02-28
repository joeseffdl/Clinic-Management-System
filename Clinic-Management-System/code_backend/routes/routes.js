// import express
import express from "express";
 
// import function from controller
import { showDrProfile, showDrProfileId, createDrProfile, updateDrProfile, deleteDrProfile, showPassword,createLogin,addPatient,showLogin, showPatientList,showDrPatientList,
    updatePatientProfile, deletePatientProfile, addAppointment, showAppointments, updateAppointment, deleteAppointment,
    updateDrProfile_Pic, showPic,addPic,showAdminPassword, showAdmin, showAdminLogins, createAdminLogin} from "../controllers/bestbyte.js";


 
// init express router
const router = express.Router();

//SIGN UP VUE
router.post('/doctorProfile', createDrProfile);

//GUEST VUE
router.post('/login', createLogin);
router.get('/login/:email', showPassword);

//ADD PATIENT VUE
router.post('/patientProfile', addPatient);
router.get('/login', showLogin);

//PATIENT LIST VUE
router.get('/patientProfile', showDrPatientList);
router.put('/patientProfile/:id', updatePatientProfile);
router.delete('/patientProfile/:id', deletePatientProfile);

//APPOINTMENT VUE
router.get('/appointments', showAppointments);
router.post('/appointments', addAppointment);
router.put('/appointments/:id', updateAppointment);
router.delete('/appointments/:id', deleteAppointment);

//PROFILE SETTINGS
router.get('/doctorProfile', showDrProfile);
router.put('/doctorProfile', updateDrProfile);
router.put('/profilePic', updateDrProfile_Pic);
router.get('/profilePic', showPic);
router.post('/profilePic', addPic);

//UNUSED

// Get All data from doctor_profile by id

router.get('/doctorProfile/:id', showDrProfileId);
 
// Delete data
router.delete('/doctorProfile/:id', deleteDrProfile);


 
// get data from patient_profile
router.get('/patientProfile/:id', showPatientList);




router.get('/admin/:admin_email', showAdminPassword);

// Get All data from admin_tb
router.get('/admintb', showAdmin);

router.get('/adminlogin', showAdminLogins);

router.post('/adminlogin', createAdminLogin);

// export default router
export default router;