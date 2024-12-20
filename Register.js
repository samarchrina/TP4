import React,{useState} from "react";
import axios from "axios";
import {useNavigate,Link} from "react-router-dom";//import Link from
import {useContext} from"../context/useContext";
import"./from.css";

const Login=()=>{
    const [email , setEmail] = useState("");
    const[password , setPassword] =useState("");
    const[errors , setErrors] =useState("");
    const[message,setMessage] =useState("");
    const navigate = useNavigate();
    const { handleLogin , handlelogout , user}=useContext(UserContext);
    const handleSubmit = async ( e) =>{
        e.preventDefault();
        try{
            const respons= await axios.post("http://localhost:8000/api/books",
                email,
            )
        }
    }
}
