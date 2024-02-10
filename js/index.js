fetch("https://api.escuelajs.co/api/v1/users")
    .then(response => response.json())
    .then(data => {
        let fila = '<tr><th>Email</th><th>Name</th><th>Password</th><th>Avatar</th></tr>';
        for (let usuario of data) {
            fila += `<tr><td>${usuario.email}</td>
                         <td>${usuario.name}</td>
                         <td>${usuario.password}</td>
                         <td><img src="${usuario.avatar}" alt="" style = "max-width: 90px; max-height: 90px;"></td></tr>`;
        }
        document.getElementById("tabla").innerHTML = fila;
    })
    
