(function () {

    sendInvite = function (username) {
        try {
            // create a new Ajax request
            var xhttp = new XMLHttpRequest();

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    let obj = this.response;

                    //console.log(playerName);
                    swal({
                        title: "Sucesso!",
                        text: "Parabens! " + obj.username,
                        icon: "info",
                        button: "Ok",
                        timer: 5000,
                    }).then((value) => {
                        $gameSelfSwitches.setValue([31, 12, 'A'], true);
                            enviaConvite(playerID, playerName, obj.username);
                        AudioManager.stopBgm();
                        SceneManager.pop();
                    });


                } else if (this.readyState == 4 && this.status == 401) {
                    alert("Autenticação sem sucesso");
                } else if (this.readyState == 4 && this.status == 403) {
                    alert("Dados Errados");
                }else if (this.readyState == 4 && this.status == 404) {
                    alert("Utilizador não existe");
                } else if (this.readyState == 4 && this.status == 409) {
                    alert("Utilizador está a jogar de momento");
                }  else if (this.readyState == 4 && this.status == 500) {
                    alert("Ocorreu um erro no servidor");
                    Scene_InputDialog.prototype.afterResponse();
                }

            };

            xhttp.onerror = function(e){
                console.log(e);
                alert("Existem problemas com o servidor tenta mais tarde");
            };

            let url = encodeURI("http://"+iprest+"/pvp/play/"+playerID);
            xhttp.open("PUT", url, true);

            xhttp.setRequestHeader("Authorization", "Bearer " + playerToken);
            xhttp.setRequestHeader("Content-Type", "application/json");

            xhttp.responseType = 'json';

            var data = JSON.stringify({"username": username});
            xhttp.send(data);

        } catch (e) {
            if(e.name == 'NetworkError'){
                alert("Existem problemas com o servidor tenta mais tarde");
            }
            else {
                console.log(e);
                alert("Existem problemas tenta mais tarde");
            }
        }
    }

})();
