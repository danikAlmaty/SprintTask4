// let users = [
//     {"email": "danikmalodes@gmail.com", "password": "danikmanik", "fullName": "Orazaly Daniyar Talantuly", "country": "Kazakhstan", }
// ]

let all = []
if (localStorage.allUsers!=null){
    all=JSON.parse(localStorage.allUsers)
}

function newAcc(){
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let fullName = document.getElementById("fullname")
    let country = document.getElementById("country")
    let birthday = document.getElementById("birthday")

    let newUser = {
        "email": email.value,
        "password": password.value,
        "fullName": fullName.value,
        "country": country.value,
        "birthday": birthday.value
    }
    addUser(newUser)

    email.value = ""
    password.value = ""
    fullName.value = ""
    country.value = "Kazakhstan"
    birthday.value = ""


}



function addUser(newUser){
    all.push(newUser)
    localStorage.allUsers = JSON.stringify(all)
}

function login(){

    let success=false
    let email=document.getElementById('email')
    let password=document.getElementById('password')
    let temporaryUser;
    for (let user of all) {
        if (user.email === email.value) {
            if (user.password === password.value) {
                temporaryUser=user
                success = true
                break;
            }
        }
    }
    if (success===true){
        toUserPage(temporaryUser)
    }
    else {
        alert("WRONG EMAIL OR PASSWORD")
    }




}


function signIn(){
    let centerMain=document.getElementById('center')
    let divLists=document.querySelectorAll("div.info")
    divLists.forEach(element=>element.remove())

    centerMain.innerHTML=" <div class=\"info\">\n" +
        "    <div>\n" +
        "      <label>EMAIL :</label>\n" +
        "    </div>\n" +
        "\n" +
        "    <div>\n" +
        "      <input type=\"text\" id='email'>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"info\">\n" +
        "    <div>\n" +
        "      <label>PASSWORD :</label>\n" +
        "    </div>\n" +
        "    <div>\n" +
        "      <input type=\"text\" id='password'>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "\n" +
        "  <div>\n" +
        "    <button class=\"buttonRegister\" onclick=\"login()\">SIGN IN</button>\n" +
        "  </div>"
}




function toUserPage(user){
    let center=document.getElementById('center')
    let divLists=document.querySelectorAll("div.info")
    divLists.forEach(element=>element.remove())
    let loginLink=document.getElementById('loginLink')
    let registerLink=document.getElementById('registerLink')

    loginLink.text =user.fullName
    loginLink.href="#"
    loginLink.onclick=null
    registerLink.text="Logout"
    registerLink.href="index.html"

    center.innerHTML="\n" +
        "\n" +
        "  <div class=\"infoTwo\">\n" +
        "    <h2>Welcome "+user.fullName+"</h2>\n" +
        "  </div>\n" +

        "  <div class=\"infoTwo\">\n" +
        "    <div class=\"label_div first\">\n" +
        "      <label>EMAIL :</label>\n" +
        "    </div>\n" +
        "\n" +

        "    <div class=\"input_div\">\n" +
        "      <h3 id=\"user_email\">"+user.email+"</h3>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"infoTwo\">\n" +
        "    <div class=\"label_div\">\n" +
        "      <label>PASSWORD :</label>\n" +
        "    </div>\n" +
        "    <div class=\"input_div\">\n" +
        "      <h3 id=\"user_password\">"+user.password+"</h3>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "\n" +
        "  <div class=\"infoTwo\">\n" +
        "    <div class=\"label_div\">\n" +
        "      <label>FULL NAME :</label>\n" +
        "    </div>\n" +
        "    <div class=\"input_div\">\n" +
        "      <h3 id=\"user_fullName\">"+user.fullName+"</h3>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "\n" +
        "  <div class=\"infoTwo\">\n" +
        "    <div class=\"label_div\">\n" +
        "      <label>COUNTRY :</label>\n" +
        "    </div>\n" +
        "    <div class=\"input_div\">\n" +
        "      <h3 id=\"user_country\">"+user.country+"</h3>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n" +
        "  <div class=\"infoTwo\">\n" +
        "    <div class=\"label_div\">\n" +
        "      <label>BIRTHDATE :</label>\n" +
        "    </div>\n" +
        "    <div class=\"input_div\">\n" +
        "      <h3 id=\"user_birthdate\">"+user.birthday+"</h3>\n" +
        "    </div>\n" +
        "  </div>\n" +
        "\n"




}