import { makeAutoObservable } from "mobx";

class Store {
  listImg: string[] = [];
  socketStatus: 'connect' | 'disconnect' = 'disconnect';
  file: File|null = null;

  constructor() {
    makeAutoObservable(this);
  }

  addImg(urlImg: string){
    this.listImg.push(urlImg)
  }

  openWebSocket() {
    // io.on('connection', socket => {
    //   socket.emit('request', /* … */); // emit an event to the socket
    //   io.emit('broadcast', /* … */); // emit an event to all connected sockets
    //   socket.on('reply', () => { /* … */ }); // listen to the event
    // });
  }
}

export default new Store()