const services = {
  login(user, pass){
    let headers = new Headers()
    let body = JSON.stringify({"email": user,"password": pass});
    headers.append("Content-Type", "application/json");
    headers.append("Cookie", "__cfduid=d2c2b21b130105010cbdb455dcbb00ec81593395041");
    let params = {
      method: 'POST',
      redirect: 'follow',
      headers,
      body
    };
    return fetch('https://reqres.in/api/login', params).then(res => res.json())
  },
  getAllUser(){
    fetch('https://reqres.in/api/users?per_page=20')
      .then(res => res.json())
      .then(res => {
        res.data.filter((user)=>{
          user.email == sessionStorage.getItem('user') ?
          sessionStorage.setItem('userId', user.id) : null
        })
      })
  },
  register(user, pass){
    let headers = new Headers()
    let body = JSON.stringify({"email": user,"password": pass});
    headers.append("Content-Type", "application/json");
    headers.append("Cookie", "__cfduid=d2c2b21b130105010cbdb455dcbb00ec81593395041");

    let params = {
      method: 'POST',
      redirect: 'follow',
      headers,
      body
    };
    return fetch('https://reqres.in/api/register', params)
      .then(res => res.json())
  },
  updateUser(user, job){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "__cfduid=d2c2b21b130105010cbdb455dcbb00ec81593395041");

    var raw = JSON.stringify({"name": user.value,"job": job.value});

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    return fetch("https://reqres.in/api/users/2", requestOptions)
      .then(res => res.text())
  }
}

export default services;
