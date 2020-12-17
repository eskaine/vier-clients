import { io } from 'socket.io-client';

export default (() => {
  let socket;

  const connect = (type = null) => {
    socket = io.connect(process.env.SERVER, { query: { clientType: type } });
  };

  const stop = () => socket.emit('disconnect');

  const session = (sessionID) => socket.emit('session', { sessionID });

  const confirmOrder = (sessionID) => socket.emit('confirm_order', { sessionID });

  const transmit = (type) => socket.emit(type);

  const receive = (type, cb) =>
    socket.on(type, () => {
      cb();
    });

  return {
    connect,
    stop,
    transmit,
    receive,
    session,
    confirmOrder,
  };
})();
