// import express
import express from "express";
 
// import function from controller
import { showDrProfile, showDrProfileId, createDrProfile, updateDrProfile, 
    deleteDrProfile, showPassword,createLogin,addPatient,showLogin, showPatientList,showDrPatientList,
    updatePatientProfile, deletePatientProfile, addAppointment, showAppointments, updateAppointment, deleteAppointment} from "../controllers/bestbyte.js";

 
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



//UNUSED

// Get All data from doctor_profile
router.get('/doctorProfile', showDrProfile);
 
// Get doctor_profile by id
router.get('/doctorProfile/:id', showDrProfileId);

// Update data
router.put('/doctorProfile/:id', updateDrProfile);
 
// Delete data
router.delete('/doctorProfile/:id', deleteDrProfile);


 
// get data from patient_profile
router.get('/patientProfile/:id', showPatientList);




// export default router
export default router;