import axios from "axios";

export const login = async(req) => {

    let res;

    console.log(req);

    try{
         res = await axios.post(`login`, {
            id: req.id,
            password: req.password
         })
    }catch(err){
        console.log(err);
    }

    console.log(res.data) ;
    return res.data;
}; 

export const getPuzzle = async() => {
    let res;

    try{
        res = await axios.get(`puzzle`);
    }catch(err){
        console.log(err);
    }

    console.log(res.data);
    return res.data;
};

export const submitPuzzle = async(req) => {
    let res;

    try{
        res = await axios.post(`submit`, {
            answer: req.answer
        });
    }catch(err){
        console.log(err);
    }

    console.log(res.data);
    return res.data;
}

export const getLeaderboard = async() => {
    let res;

    try{
        res = await axios.get(`leaderboard`);
    }catch(err){
        console.log(err);
    }

    console.log(res.data);
    return res.data;
};

export const getSubmissions = async() => {
    let res;

    try{
        res = await axios.get(`/admin/answers`);
    }catch(err){
        console.log(err);
    }

    console.log(res.data);
    return res.data;
}