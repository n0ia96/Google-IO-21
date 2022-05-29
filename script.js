window.onload = function() {
    var Clap = new XMLHttpRequest();
    Clap.open("GET", "https://api.countapi.xyz/get/n0ia96Clap/43074bb2-0647-4ccf-acc5-b304a312513c")
    Clap.responseType = "json";
    
    var Nice = new XMLHttpRequest();
    Nice.open("GET", "https://api.countapi.xyz/get/n0ia96Nice/9bfd91e5-a3a8-411c-ace6-e5d0ea277cc8")
    Nice.responseType = "json";

    Clap.onload = function() {
        let clap = fetch("https://api.countapi.xyz/get/n0ia96Clap/43074bb2-0647-4ccf-acc5-b304a312513c")
        clap.responseType = "json";
        document.getElementById('clap-result').innerHTML = this.response.value;
    }
    Clap.send();
    
    Nice.onload = function() {
        let nice = fetch("https://api.countapi.xyz/get/n0ia96Nice/9bfd91e5-a3a8-411c-ace6-e5d0ea277cc8")
        nice.responseType = "json";
        document.getElementById('nice-result').innerHTML = this.response.value;
    }
    Nice.send();
}

function avalicaoClap(){
    var Clap = new XMLHttpRequest();
    Clap.open("GET", "https://api.countapi.xyz/hit/n0ia96Clap/43074bb2-0647-4ccf-acc5-b304a312513c")
    Clap.responseType = "json";
    Clap.onload = function() {
        let clap = fetch("https://api.countapi.xyz/get/n0ia96Clap/43074bb2-0647-4ccf-acc5-b304a312513c")
        clap.responseType = "json";
        document.getElementById('clap-result').innerHTML = this.response.value;
    }
    Clap.send();
}

function avalicaoNice(){
    var Nice = new XMLHttpRequest();
    Nice.open("GET", "https://api.countapi.xyz/hit/n0ia96Nice/9bfd91e5-a3a8-411c-ace6-e5d0ea277cc8")
    Nice.responseType = "json";
    Nice.onload = function() {
        let nice = fetch("https://api.countapi.xyz/get/n0ia96Nice/9bfd91e5-a3a8-411c-ace6-e5d0ea277cc8")
        nice.responseType = "json";
        document.getElementById('nice-result').innerHTML = this.response.value;
    }
    Nice.send();
}