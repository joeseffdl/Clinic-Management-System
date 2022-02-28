// Import function from Product Model
import { getDrProfile, getDrProfileId, insertDrProfile, updateDrProfileId, deleteDrProfileId, 
    getPassword, insertLogin,insertPatient,getLogin,getPatient, getAdminPassword, showAdmins, showAdminLogin, insertAdminLogin,} from "../models/bestbyteModel.js";
 
// Get All data from doctor_profile table
export const showDrProfile = (req, res) => {
    getDrProfile((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get All data from login_tb
export const showLogin = (req, res) => {
    getLogin((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Get doctor_profile by id
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

// Create new data to doctor_profile
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
 
// Update doctor_profile by id
export const updateDrProfile = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateDrProfileId(data, id, (err, results) => {
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


// Get doctor_profile by id
export const showPassword = (req, res) => {
    getPassword(req.params.email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

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

export const showAdminPassword = (req, res) => {
    getAdminPassword(req.params.admin_email, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get All data from admin_tb table
export const showAdmin = (req, res) => {
    showAdmins((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const showAdminLogins = (req, res) => {
    showAdminLogin((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

export const createAdminLogin = (req, res) => {
    const data = req.body;
    insertAdminLogin(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}