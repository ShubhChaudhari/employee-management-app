import axios from "axios";

const apiUrl = process.env.API_URL || "http://localhost:8080";

export const Login = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/auth/login`,data);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const Signup = async(data)=>{
  try {
    const response = await axios.post(`${apiUrl}/auth/signup`,data)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const Users = async()=>{
  try {
    const response = await axios.get(`${apiUrl}/auth/users`)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

//employee crud

export const Employees = async()=>{
  try {
    const response = await axios.get(`${apiUrl}/employee`)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const CreateEmployee = async(data)=>{
  console.log('data', data)
  try {
    const response = await axios.post(`${apiUrl}/employee`,data)
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const UpdateEmployee = async(id,data,userRole)=>{
  try {
    const response = await axios.patch(`${apiUrl}/employee/${id}`,data, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const DeleteEmployee = async(id,userRole)=>{
  try {
    const response = await axios.delete(`${apiUrl}/employee/${id}`, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

// serch byFilter with types asc and dec

export const fetchEmployeesByLocation = async (order) => {
  try {
    const response = await axios.get(`${apiUrl}/employee/sortedBy/Location?order=${order}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees by location:', error);
    return [];
  }
};


export const fetchEmployeesByName = async (order) => {
  try {
    const response = await axios.get(`${apiUrl}/employee/sortedBy/Name?order=${order}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching employees by name:', error);
    return [];
  }
};

//department crud

export const CreateDepartment = async(data,userRole)=>{
  console.log('data', data)
  try {
    const response = await axios.post(`${apiUrl}/department`,data, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const UpdateDepartment = async(id,data,userRole)=>{
  try {
    const response = await axios.patch(`${apiUrl}/department/${id}`,data, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}
export const DeleteDepartment = async(id,userRole)=>{
  try {
    const response = await axios.delete(`${apiUrl}/department/${id}`, {
      headers: {
        'role': userRole // Include the user's role in the headers
      }
    });
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}


