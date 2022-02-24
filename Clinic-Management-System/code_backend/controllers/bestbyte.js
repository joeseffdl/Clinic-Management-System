// Import function from Product Model
import { getDrProfile, getDrProfileId, insertDrProfile, updateDrProfileId, deleteDrProfileId, 
    getPassword, insertLogin,insertPatient,getLogin,getPatient,getPatientList,updatePatientData,
    deletePatientData, insertAppointment, getAppointments, updateAppointments, deleteAppointments,
    updateDrProfilePic,getPicture, insertPic} from "../models/bestbyteModel.js";
 

    //SIGN UP VUE
    export const createDrProfile = (req, res) => {
        const data = req.body;
        insertDrProfile(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }



    //GUEST VUE
    export const createLogin = (req, res) => {
        const data = req.body;
        insertLogin(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
   
    export const showPassword = (req, res) => {
        getPassword(req.params.email, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }



    //ADD PATIENT VUE
    export const addPatient = (req, res) => {
        const data = req.body;
        insertPatient(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const showLogin = (req, res) => {
        getLogin((err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }



    //PATIENT LIST VUE
    export const showDrPatientList = (req, res) => {
        getPatientList((err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const updatePatientProfile = (req, res) => {
        const data  = req.body;
        const id    = req.params.id;
        updatePatientData(data, id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const deletePatientProfile = (req, res) => {
        const id = req.params.id;
        deletePatientData(id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }



    //APPOINTMENTS VUE
    export const addAppointment = (req, res) => {
        const data = req.body;
        insertAppointment(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const showAppointments = (req, res) => {
        getAppointments((err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const updateAppointment = (req, res) => {
        const data  = req.body;
        const id    = req.params.id;
        updateAppointments(data, id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const deleteAppointment = (req, res) => {
        const id = req.params.id;
        deleteAppointments(id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    

    //PROFILE SETTINGS
    export const showDrProfile = (req, res) => {
        getDrProfile((err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const updateDrProfile = (req, res) => {
        const data  = req.body;
        updateDrProfileId(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const updateDrProfile_Pic= (req, res) => {
        const data  = req.body;
        updateDrProfilePic(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const showPic = (req, res) => {
        getPicture((err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    export const addPic = (req, res) => {
        const data = req.body;
        insertPic(data, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }




    //UNUSED

    // Get All data from doctor_profile table

    
    export const showDrProfileId= (req, res) => {
        getDrProfileId(req.params.id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }
    
    
    

    // Get patient by doctor_id
    export const showPatientList= (req, res) => {
        getPatient(req.params.id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }

    
    
    // Delete doctor_profile by id
    export const deleteDrProfile = (req, res) => {
        const id = req.params.id;
        deleteDrProfileId(id, (err, results) => {
            if (err){
                res.send(err);
            }else{
                res.json(results);
            }
        });
    }





 