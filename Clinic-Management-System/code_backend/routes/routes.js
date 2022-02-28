// import express
import express from "express";
 
// import function from controller
import { showDrProfile, showDrProfileId, createDrProfile, updateDrProfile, 
    deleteDrProfile, showPassword,createLogin,addPatient,showLogin, showPatientList, showAdminPassword, showAdmin, showAdminLogins, createAdminLogin} from "../controllers/bestbyte.js";
 
// init express router
const router = express.Router();
 
// Get All data from doctor_profile
router.get('/doctorProfile', showDrProfile);
 
// Get doctor_profile by id
router.get('/doctorProfile/:id', showDrProfileId);

// Create new data - sign up
router.post('/doctorProfile', createDrProfile);
 
// Update data
router.put('/doctorProfile/:id', updateDrProfile);
 
// Delete data
router.delete('/doctorProfile/:id', deleteDrProfile);

// Get password - login
router.get('/login/:email', showPassword);
 
// insert to login_tb
router.post('/login', createLogin);

// get data from login_tb
router.get('/login', showLogin);

// get data from patient_profile
router.get('/patientProfile/:doctorId', showPatientList);

// add new patient
router.post('/patientProfile', addPatient);

router.get('/admin/:admin_email', showAdminPassword);

// Get All data from admin_tb
router.get('/admintb', showAdmin);

router.get('/adminlogin', showAdminLogins);

router.post('/adminlogin', createAdminLogin);

// export default router
export default router;