const wss = new WebSocket('ws://localhost:9990/chat');



function enviaConvite(id, user, useradd){

        data = {
            type:"invite",
            inid:id,
            username: user,
            usernamead: useradd,
            };
        console.log("__enviado__"+data);

        changeState(2);
  // ws.onopen = function(response) {
        // Serializamos o objeto para json
        wss.send(JSON.stringify(data));

  //};

}

function recebeConvite(){

var charEvent = $gameMap._events[1];

  wss.addEventListener('message', function (event) {

       data = JSON.parse(event.data);

if (data.type=="invite"){
if(data.usernamead==playerName){
  swal({
  title: "Recebeu um Convite!",
  text: "O Jogador "+data.username+" está a pedir para jogar contigo, aceitas?",
  icon: "warning",
  buttons: true,
  dangerMode: true,
  timer: 15000,
})
.then((willDelete) => {
  if (willDelete) {
    swal("A Iniciar a Partida!", {
      icon: "success",
        timer: 2000,
    });
    ida=data.inid;
    id=playerID;
        changeState(3);

    enviaResposta(playerID, playerName, data.username, "sim");

      if(data.inid>playerID){
          $gamePlayer.reserveTransfer(30, 17,  8);
      }else{
          $gamePlayer.reserveTransfer(30, 8,  6);
          //changeState(3)
      }



  } else {
    enviaResposta(playerID, playerName, data.username, "nao");
    swal("Convite Recusado");

  }
});
}

}


  });


}



function enviaResposta(id, user, useradd, resp){

        data = {
            type:"resp",
            inid:id,
            username: user,
            usernamead: useradd,
            resposta:resp,
            };
        console.log("__enviado__"+data);


  // ws.onopen = function(response) {
        // Serializamos o objeto para json
        wss.send(JSON.stringify(data));
  //};

}


function recebeResposta(){

var charEvent = $gameMap._events[1];

  wss.addEventListener('message', function (event) {

       data = JSON.parse(event.data);

if (data.type=="resp"){
if(data.usernamead==playerName){

if(data.resposta=="sim"){
  swal("Convite Aceites!", {
    icon: "success",
      timer: 2000,
  });
ida=data.inid;
id=playerID;
  changeState(3);
//mudar de estado

  if(data.inid>playerID){
      $gamePlayer.reserveTransfer(30, 17,  8);

  }else{

      $gamePlayer.reserveTransfer(30, 8,  6);
  }


}else{
swal("Recusado", "Hora de voltar à Loby!");
  $gamePlayer.reserveTransfer(31, 15,  8);
  changeState(1);
}

}
}


});


}
