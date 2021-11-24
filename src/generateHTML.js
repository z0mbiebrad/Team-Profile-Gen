const generateManager = function (manager) {
    return `
    div class="col-4 mt-4">
        <div class="card h-100">
            <div class='card-header">
                <h3>${manager.name}</h3>
            </div>
            
            <div class="card-body">
                <p class="id">ID:${manager.id}</p>
                <p class="email">Email: <a href="mailto:${manager.email}</p>
                <p class="number">Office Number: ${manager.oNumber}</p>
            </div>

        </div>
    </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
    <p>${engineer.name}</p>
    <p>${engineer.id}</p>
    <p>${engineer.email}</p>
    <p>${engineer.github}</p>
    `;
}

const generateIntern = function (intern) {
    return `
    <p>${intern.name}</p>
    <p>${intern.id}</p>
    <p>${intern.email}</p>
    <p>${intern.github}</p>
    `;
};

generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < data.lenth; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}
 const generateTeamPage = function(employeeCards) {
     return`
     <!DOCTYPE html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
         <title>Team Profile</title>
     </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    ${employeeCards}
                </div>
            </div>
        </main>
        ${employeeCards}
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
     `;
 }

 module.exports = generateHTML;