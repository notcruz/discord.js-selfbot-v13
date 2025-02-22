'use strict';
/* eslint-disable */
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __defNormalProp = (obj, key, value) =>
  key in obj
    ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value })
    : (obj[key] = value);
var __name = (target, value) => __defProp(target, 'name', { value, configurable: true });
var __commonJS = (cb, mod) =>
  function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if ((from && typeof from === 'object') || typeof from === 'function') {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable,
        });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (
  (target = mod != null ? __create(__getProtoOf(mod)) : {}),
  __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, 'default', { value: mod, enumerable: true }) : target,
    mod,
  )
);
var __toCommonJS = mod => __copyProps(__defProp({}, '__esModule', { value: true }), mod);
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== 'symbol' ? key + '' : key, value);
  return value;
};

// package.json
var require_package = __commonJS({
  'package.json'(exports, module2) {
    module2.exports = {
      name: '@discordjs/voice',
      version: '0.11.0',
      description: 'Implementation of the Discord Voice API for node.js',
      scripts: {
        build: 'tsup && node scripts/postbuild.mjs',
        test: 'jest --coverage',
        lint: 'prettier --check . && eslint src __tests__ --ext mjs,js,ts',
        format: 'prettier --write . && eslint src __tests__ --ext mjs,js,ts --fix',
        docs: 'docgen -i src/index.ts -c docs/index.json -o docs/docs.json --typescript && api-extractor run --local',
        prepack: 'yarn build && yarn lint && yarn test',
        changelog: "git cliff --prepend ./CHANGELOG.md -u -c ./cliff.toml -r ../../ --include-path 'packages/voice/*'",
        release: 'cliff-jumper',
      },
      main: './dist/index.js',
      module: './dist/index.mjs',
      typings: './dist/index.d.ts',
      exports: {
        import: './dist/index.mjs',
        require: './dist/index.js',
        types: './dist/index.d.ts',
      },
      directories: {
        lib: 'src',
        test: '__tests__',
      },
      files: ['dist'],
      contributors: [
        'Crawl <icrawltogo@gmail.com>',
        'Amish Shah <amishshah.2k@gmail.com>',
        'SpaceEEC <spaceeec@yahoo.com>',
        'Vlad Frangu <kingdgrizzle@gmail.com>',
        'Antonio Roman <kyradiscord@gmail.com>',
      ],
      license: 'Apache-2.0',
      keywords: ['discord', 'discord.js', 'audio', 'voice', 'streaming'],
      repository: {
        type: 'git',
        url: 'git+https://github.com/discordjs/discord.js.git',
      },
      bugs: {
        url: 'https://github.com/discordjs/discord.js/issues',
      },
      homepage: 'https://discord.js.org',
      dependencies: {
        '@types/ws': '^8.5.3',
        'discord-api-types': '^0.36.2',
        'prism-media': '^1.3.4',
        tslib: '^2.4.0',
        ws: '^8.8.1',
      },
      devDependencies: {
        '@babel/core': '^7.18.6',
        '@babel/preset-env': '^7.18.6',
        '@babel/preset-typescript': '^7.18.6',
        '@discordjs/docgen': 'workspace:^',
        '@discordjs/scripts': 'workspace:^',
        '@favware/cliff-jumper': '^1.8.5',
        '@microsoft/api-extractor': '^7.28.4',
        '@types/jest': '^28.1.6',
        '@types/node': '^16.11.45',
        eslint: '^8.20.0',
        jest: '^28.1.3',
        'jest-websocket-mock': '^2.3.0',
        'mock-socket': '^9.1.5',
        prettier: '^2.7.1',
        tsup: '^6.1.3',
        tweetnacl: '^1.0.3',
        typescript: '^4.7.4',
      },
      engines: {
        node: '>=16.9.0',
      },
      publishConfig: {
        access: 'public',
      },
    };
  },
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  AudioPlayer: () => AudioPlayer,
  AudioPlayerError: () => AudioPlayerError,
  AudioPlayerStatus: () => AudioPlayerStatus,
  AudioReceiveStream: () => AudioReceiveStream,
  AudioResource: () => AudioResource,
  EndBehaviorType: () => EndBehaviorType,
  NoSubscriberBehavior: () => NoSubscriberBehavior,
  PlayerSubscription: () => PlayerSubscription,
  SSRCMap: () => SSRCMap,
  SpeakingMap: () => SpeakingMap,
  StreamType: () => StreamType,
  VoiceConnection: () => VoiceConnection2,
  VoiceConnectionDisconnectReason: () => VoiceConnectionDisconnectReason,
  VoiceConnectionStatus: () => VoiceConnectionStatus,
  VoiceReceiver: () => VoiceReceiver,
  createAudioPlayer: () => createAudioPlayer,
  createAudioResource: () => createAudioResource,
  createDefaultAudioReceiveStreamOptions: () => createDefaultAudioReceiveStreamOptions,
  demuxProbe: () => demuxProbe,
  entersState: () => entersState,
  generateDependencyReport: () => generateDependencyReport,
  getGroups: () => getGroups,
  getVoiceConnection: () => getVoiceConnection,
  getVoiceConnections: () => getVoiceConnections,
  joinVoiceChannel: () => joinVoiceChannel,
  validateDiscordOpusHead: () => validateDiscordOpusHead,
  Networking: () => Networking,
});
module.exports = __toCommonJS(src_exports);

// src/VoiceConnection.ts
var import_node_events7 = require('events');

// src/DataStore.ts
var import_v10 = require('discord-api-types/v10');
function createJoinVoiceChannelPayload(config) {
  return {
    op: import_v10.GatewayOpcodes.VoiceStateUpdate,
    d: {
      guild_id: config.guildId,
      channel_id: config.channelId,
      self_deaf: config.selfDeaf,
      self_mute: config.selfMute,
    },
  };
}
__name(createJoinVoiceChannelPayload, 'createJoinVoiceChannelPayload');
var groups = /* @__PURE__ */ new Map();
groups.set('default', /* @__PURE__ */ new Map());
function getOrCreateGroup(group) {
  const existing = groups.get(group);
  if (existing) return existing;
  const map = /* @__PURE__ */ new Map();
  groups.set(group, map);
  return map;
}
__name(getOrCreateGroup, 'getOrCreateGroup');
function getGroups() {
  return groups;
}
__name(getGroups, 'getGroups');
function getVoiceConnections(group = 'default') {
  return groups.get(group);
}
__name(getVoiceConnections, 'getVoiceConnections');
function getVoiceConnection(guildId, group = 'default') {
  return getVoiceConnections(group)?.get(guildId);
}
__name(getVoiceConnection, 'getVoiceConnection');
function untrackVoiceConnection(voiceConnection) {
  return getVoiceConnections(voiceConnection.joinConfig.group)?.delete(voiceConnection.joinConfig.guildId);
}
__name(untrackVoiceConnection, 'untrackVoiceConnection');
function trackVoiceConnection(voiceConnection) {
  return getOrCreateGroup(voiceConnection.joinConfig.group).set(voiceConnection.joinConfig.guildId, voiceConnection);
}
__name(trackVoiceConnection, 'trackVoiceConnection');
var FRAME_LENGTH = 20;
var audioCycleInterval;
var nextTime = -1;
var audioPlayers = [];
function audioCycleStep() {
  if (nextTime === -1) return;
  nextTime += FRAME_LENGTH;
  const available = audioPlayers.filter(player => player.checkPlayable());
  available.forEach(player => player['_stepDispatch']());
  prepareNextAudioFrame(available);
}
__name(audioCycleStep, 'audioCycleStep');
function prepareNextAudioFrame(players) {
  const nextPlayer = players.shift();
  if (!nextPlayer) {
    if (nextTime !== -1) {
      audioCycleInterval = setTimeout(() => audioCycleStep(), nextTime - Date.now());
    }
    return;
  }
  nextPlayer['_stepPrepare']();
  setImmediate(() => prepareNextAudioFrame(players));
}
__name(prepareNextAudioFrame, 'prepareNextAudioFrame');
function hasAudioPlayer(target) {
  return audioPlayers.includes(target);
}
__name(hasAudioPlayer, 'hasAudioPlayer');
function addAudioPlayer(player) {
  if (hasAudioPlayer(player)) return player;
  audioPlayers.push(player);
  if (audioPlayers.length === 1) {
    nextTime = Date.now();
    setImmediate(() => audioCycleStep());
  }
  return player;
}
__name(addAudioPlayer, 'addAudioPlayer');
function deleteAudioPlayer(player) {
  const index = audioPlayers.indexOf(player);
  if (index === -1) return;
  audioPlayers.splice(index, 1);
  if (audioPlayers.length === 0) {
    nextTime = -1;
    if (typeof audioCycleInterval !== 'undefined') clearTimeout(audioCycleInterval);
  }
}
__name(deleteAudioPlayer, 'deleteAudioPlayer');

// src/networking/Networking.ts
var import_node_events3 = require('events');
var import_v42 = require('discord-api-types/voice/v4');

// src/networking/VoiceUDPSocket.ts
var import_node_dgram = require('dgram');
var import_node_events = require('events');
var import_node_net = require('net');
function parseLocalPacket(message) {
  const packet = Buffer.from(message);
  const ip = packet.slice(8, packet.indexOf(0, 8)).toString('utf-8');
  if (!(0, import_node_net.isIPv4)(ip)) {
    throw new Error('Malformed IP address');
  }
  const port = packet.readUInt16BE(packet.length - 2);
  return { ip, port };
}
__name(parseLocalPacket, 'parseLocalPacket');
var KEEP_ALIVE_INTERVAL = 5e3;
var KEEP_ALIVE_LIMIT = 12;
var MAX_COUNTER_VALUE = 2 ** 32 - 1;
var VoiceUDPSocket = class extends import_node_events.EventEmitter {
  constructor(remote, debug = false) {
    super();
    __publicField(this, 'socket');
    __publicField(this, 'remote');
    __publicField(this, 'keepAlives');
    __publicField(this, 'keepAliveCounter', 0);
    __publicField(this, 'keepAliveBuffer');
    __publicField(this, 'keepAliveInterval');
    __publicField(this, 'ping');
    __publicField(this, 'debug');
    this.socket = (0, import_node_dgram.createSocket)('udp4');
    this.socket.on('error', error => this.emit('error', error));
    this.socket.on('message', buffer => this.onMessage(buffer));
    this.socket.on('close', () => this.emit('close'));
    this.remote = remote;
    this.keepAlives = [];
    this.keepAliveBuffer = Buffer.alloc(8);
    this.keepAliveInterval = setInterval(() => this.keepAlive(), KEEP_ALIVE_INTERVAL);
    setImmediate(() => this.keepAlive());
    this.debug = debug ? message => this.emit('debug', message) : null;
  }
  onMessage(buffer) {
    if (buffer.length === 8) {
      const counter = buffer.readUInt32LE(0);
      const index = this.keepAlives.findIndex(({ value }) => value === counter);
      if (index === -1) return;
      this.ping = Date.now() - this.keepAlives[index].timestamp;
      this.keepAlives.splice(0, index);
    }
    this.emit('message', buffer);
  }
  keepAlive() {
    if (this.keepAlives.length >= KEEP_ALIVE_LIMIT) {
      this.debug?.('UDP socket has not received enough responses from Discord - closing socket');
      this.destroy();
      return;
    }
    this.keepAliveBuffer.writeUInt32LE(this.keepAliveCounter, 0);
    this.send(this.keepAliveBuffer);
    this.keepAlives.push({
      value: this.keepAliveCounter,
      timestamp: Date.now(),
    });
    this.keepAliveCounter++;
    if (this.keepAliveCounter > MAX_COUNTER_VALUE) {
      this.keepAliveCounter = 0;
    }
  }
  send(buffer) {
    return this.socket.send(buffer, this.remote.port, this.remote.ip);
  }
  destroy() {
    try {
      this.socket.close();
    } catch {}
    clearInterval(this.keepAliveInterval);
  }
  performIPDiscovery(ssrc) {
    return new Promise((resolve2, reject) => {
      const listener = /* @__PURE__ */ __name(message => {
        try {
          if (message.readUInt16BE(0) !== 2) return;
          const packet = parseLocalPacket(message);
          this.socket.off('message', listener);
          resolve2(packet);
        } catch {}
      }, 'listener');
      this.socket.on('message', listener);
      this.socket.once('close', () => reject(new Error('Cannot perform IP discovery - socket closed')));
      const discoveryBuffer = Buffer.alloc(74);
      discoveryBuffer.writeUInt16BE(1, 0);
      discoveryBuffer.writeUInt16BE(70, 2);
      discoveryBuffer.writeUInt32BE(ssrc, 4);
      this.send(discoveryBuffer);
    });
  }
};
__name(VoiceUDPSocket, 'VoiceUDPSocket');

// src/networking/VoiceWebSocket.ts
var import_node_events2 = require('events');
var import_v4 = require('discord-api-types/voice/v4');
var import_ws = __toESM(require('ws'));
var VoiceWebSocket = class extends import_node_events2.EventEmitter {
  constructor(address, debug) {
    super();
    __publicField(this, 'heartbeatInterval');
    __publicField(this, 'lastHeartbeatAck');
    __publicField(this, 'lastHeartbeatSend');
    __publicField(this, 'missedHeartbeats', 0);
    __publicField(this, 'ping');
    __publicField(this, 'debug');
    __publicField(this, 'ws');
    this.ws = new import_ws.default(address);
    this.ws.onmessage = e => this.onMessage(e);
    this.ws.onopen = e => this.emit('open', e);
    this.ws.onerror = e => this.emit('error', e instanceof Error ? e : e.error);
    this.ws.onclose = e => this.emit('close', e);
    this.lastHeartbeatAck = 0;
    this.lastHeartbeatSend = 0;
    this.debug = debug ? message => this.emit('debug', message) : null;
  }
  destroy() {
    try {
      this.debug?.('destroyed');
      this.setHeartbeatInterval(-1);
      this.ws.close(1e3);
    } catch (error) {
      const e = error;
      this.emit('error', e);
    }
  }
  onMessage(event) {
    if (typeof event.data !== 'string') return;
    this.debug?.(`<< ${event.data}`);
    let packet;
    try {
      packet = JSON.parse(event.data);
    } catch (error) {
      const e = error;
      this.emit('error', e);
      return;
    }
    if (packet.op === import_v4.VoiceOpcodes.HeartbeatAck) {
      this.lastHeartbeatAck = Date.now();
      this.missedHeartbeats = 0;
      this.ping = this.lastHeartbeatAck - this.lastHeartbeatSend;
    }
    this.emit('packet', packet);
  }
  sendPacket(packet) {
    try {
      const stringified = JSON.stringify(packet);
      this.debug?.(`>> ${stringified}`);
      return this.ws.send(stringified);
    } catch (error) {
      const e = error;
      this.emit('error', e);
    }
  }
  sendHeartbeat() {
    this.lastHeartbeatSend = Date.now();
    this.missedHeartbeats++;
    const nonce2 = this.lastHeartbeatSend;
    return this.sendPacket({
      op: import_v4.VoiceOpcodes.Heartbeat,
      d: nonce2,
    });
  }
  setHeartbeatInterval(ms) {
    if (typeof this.heartbeatInterval !== 'undefined') clearInterval(this.heartbeatInterval);
    if (ms > 0) {
      this.heartbeatInterval = setInterval(() => {
        if (this.lastHeartbeatSend !== 0 && this.missedHeartbeats >= 3) {
          this.ws.close();
          this.setHeartbeatInterval(-1);
        }
        this.sendHeartbeat();
      }, ms);
    }
  }
};
__name(VoiceWebSocket, 'VoiceWebSocket');

// src/util/Secretbox.ts
var libs = {
  'sodium-native': sodium => ({
    open: (buffer, nonce2, secretKey) => {
      if (buffer) {
        const output = Buffer.allocUnsafe(buffer.length - sodium.crypto_box_MACBYTES);
        if (sodium.crypto_secretbox_open_easy(output, buffer, nonce2, secretKey)) return output;
      }
      return null;
    },
    close: (opusPacket, nonce2, secretKey) => {
      const output = Buffer.allocUnsafe(opusPacket.length + sodium.crypto_box_MACBYTES);
      sodium.crypto_secretbox_easy(output, opusPacket, nonce2, secretKey);
      return output;
    },
    random: (n, buffer = Buffer.allocUnsafe(n)) => {
      sodium.randombytes_buf(buffer);
      return buffer;
    },
  }),
  sodium: sodium => ({
    open: sodium.api.crypto_secretbox_open_easy,
    close: sodium.api.crypto_secretbox_easy,
    random: (n, buffer = Buffer.allocUnsafe(n)) => {
      sodium.api.randombytes_buf(buffer);
      return buffer;
    },
  }),
  'libsodium-wrappers': sodium => ({
    open: sodium.crypto_secretbox_open_easy,
    close: sodium.crypto_secretbox_easy,
    random: sodium.randombytes_buf,
  }),
  tweetnacl: tweetnacl => ({
    open: tweetnacl.secretbox.open,
    close: tweetnacl.secretbox,
    random: tweetnacl.randomBytes,
  }),
};
var fallbackError = /* @__PURE__ */ __name(() => {
  throw new Error(`Cannot play audio as no valid encryption package is installed.
- Install sodium, libsodium-wrappers, or tweetnacl.
- Use the generateDependencyReport() function for more information.
`);
}, 'fallbackError');
var methods = {
  open: fallbackError,
  close: fallbackError,
  random: fallbackError,
};
void (async () => {
  for (const libName of Object.keys(libs)) {
    try {
      const lib = require(libName);
      if (libName === 'libsodium-wrappers' && lib.ready) await lib.ready;
      Object.assign(methods, libs[libName](lib));
      break;
    } catch {}
  }
})();

// src/util/util.ts
var noop = /* @__PURE__ */ __name(() => {}, 'noop');

// src/networking/Networking.ts
var CHANNELS = 2;
var TIMESTAMP_INC = (48e3 / 100) * CHANNELS;
var MAX_NONCE_SIZE = 2 ** 32 - 1;
var SUPPORTED_ENCRYPTION_MODES = ['xsalsa20_poly1305_lite', 'xsalsa20_poly1305_suffix', 'xsalsa20_poly1305'];
var nonce = Buffer.alloc(24);
function stringifyState(state) {
  return JSON.stringify({
    ...state,
    ws: Reflect.has(state, 'ws'),
    udp: Reflect.has(state, 'udp'),
  });
}
__name(stringifyState, 'stringifyState');
function chooseEncryptionMode(options) {
  const option = options.find(option2 => SUPPORTED_ENCRYPTION_MODES.includes(option2));
  if (!option) {
    throw new Error(`No compatible encryption modes. Available include: ${options.join(', ')}`);
  }
  return option;
}
__name(chooseEncryptionMode, 'chooseEncryptionMode');
function randomNBit(n) {
  return Math.floor(Math.random() * 2 ** n);
}
__name(randomNBit, 'randomNBit');
var Networking = class extends import_node_events3.EventEmitter {
  constructor(options, debug) {
    super();
    __publicField(this, '_state');
    __publicField(this, 'debug');
    this.onWsOpen = this.onWsOpen.bind(this);
    this.onChildError = this.onChildError.bind(this);
    this.onWsPacket = this.onWsPacket.bind(this);
    this.onWsClose = this.onWsClose.bind(this);
    this.onWsDebug = this.onWsDebug.bind(this);
    this.onUdpDebug = this.onUdpDebug.bind(this);
    this.onUdpClose = this.onUdpClose.bind(this);
    this.debug = debug ? message => this.emit('debug', message) : null;
    this._state = {
      code: 0 /* OpeningWs */,
      ws: this.createWebSocket(options.endpoint),
      connectionOptions: options,
    };
  }
  destroy() {
    this.state = {
      code: 6 /* Closed */,
    };
  }
  get state() {
    return this._state;
  }
  set state(newState) {
    const oldWs = Reflect.get(this._state, 'ws');
    const newWs = Reflect.get(newState, 'ws');
    if (oldWs && oldWs !== newWs) {
      oldWs.off('debug', this.onWsDebug);
      oldWs.on('error', noop);
      oldWs.off('error', this.onChildError);
      oldWs.off('open', this.onWsOpen);
      oldWs.off('packet', this.onWsPacket);
      oldWs.off('close', this.onWsClose);
      oldWs.destroy();
    }
    const oldUdp = Reflect.get(this._state, 'udp');
    const newUdp = Reflect.get(newState, 'udp');
    if (oldUdp && oldUdp !== newUdp) {
      oldUdp.on('error', noop);
      oldUdp.off('error', this.onChildError);
      oldUdp.off('close', this.onUdpClose);
      oldUdp.off('debug', this.onUdpDebug);
      oldUdp.destroy();
    }
    const oldState = this._state;
    this._state = newState;
    this.emit('stateChange', oldState, newState);
    this.debug?.(`state change:
from ${stringifyState(oldState)}
to ${stringifyState(newState)}`);
  }
  createWebSocket(endpoint) {
    const ws = new VoiceWebSocket(`wss://${endpoint}?v=4`, Boolean(this.debug));
    ws.on('error', this.onChildError);
    ws.once('open', this.onWsOpen);
    ws.on('packet', this.onWsPacket);
    ws.once('close', this.onWsClose);
    ws.on('debug', this.onWsDebug);
    return ws;
  }
  onChildError(error) {
    this.emit('error', error);
  }
  onWsOpen() {
    if (this.state.code === 0 /* OpeningWs */) {
      const packet = {
        op: import_v42.VoiceOpcodes.Identify,
        d: {
          server_id: this.state.connectionOptions.serverId,
          user_id: this.state.connectionOptions.userId,
          session_id: this.state.connectionOptions.sessionId,
          token: this.state.connectionOptions.token,
        },
      };
      this.state.ws.sendPacket(packet);
      this.state = {
        ...this.state,
        code: 1 /* Identifying */,
      };
    } else if (this.state.code === 5 /* Resuming */) {
      const packet = {
        op: import_v42.VoiceOpcodes.Resume,
        d: {
          server_id: this.state.connectionOptions.serverId,
          session_id: this.state.connectionOptions.sessionId,
          token: this.state.connectionOptions.token,
        },
      };
      this.state.ws.sendPacket(packet);
    }
  }
  onWsClose({ code }) {
    const canResume = code === 4015 || code < 4e3;
    if (canResume && this.state.code === 4 /* Ready */) {
      this.state = {
        ...this.state,
        code: 5 /* Resuming */,
        ws: this.createWebSocket(this.state.connectionOptions.endpoint),
      };
    } else if (this.state.code !== 6 /* Closed */) {
      this.destroy();
      this.emit('close', code);
    }
  }
  onUdpClose() {
    if (this.state.code === 4 /* Ready */) {
      this.state = {
        ...this.state,
        code: 5 /* Resuming */,
        ws: this.createWebSocket(this.state.connectionOptions.endpoint),
      };
    }
  }
  onWsPacket(packet) {
    if (packet.op === import_v42.VoiceOpcodes.Hello && this.state.code !== 6 /* Closed */) {
      this.state.ws.setHeartbeatInterval(packet.d.heartbeat_interval);
    } else if (packet.op === import_v42.VoiceOpcodes.Ready && this.state.code === 1 /* Identifying */) {
      const { ip, port, ssrc, modes } = packet.d;
      const udp = new VoiceUDPSocket({ ip, port });
      udp.on('error', this.onChildError);
      udp.on('debug', this.onUdpDebug);
      udp.once('close', this.onUdpClose);
      udp
        .performIPDiscovery(ssrc)
        .then(localConfig => {
          if (this.state.code !== 2 /* UdpHandshaking */) return;
          this.state.ws.sendPacket({
            op: import_v42.VoiceOpcodes.SelectProtocol,
            d: {
              protocol: 'udp',
              data: {
                address: localConfig.ip,
                port: localConfig.port,
                mode: chooseEncryptionMode(modes),
              },
            },
          });
          this.state = {
            ...this.state,
            code: 3 /* SelectingProtocol */,
          };
        })
        .catch(error => this.emit('error', error));
      this.state = {
        ...this.state,
        code: 2 /* UdpHandshaking */,
        udp,
        connectionData: {
          ssrc,
        },
      };
    } else if (
      packet.op === import_v42.VoiceOpcodes.SessionDescription &&
      this.state.code === 3 /* SelectingProtocol */
    ) {
      const { mode: encryptionMode, secret_key: secretKey } = packet.d;
      this.state = {
        ...this.state,
        code: 4 /* Ready */,
        connectionData: {
          ...this.state.connectionData,
          encryptionMode,
          secretKey: new Uint8Array(secretKey),
          sequence: randomNBit(16),
          timestamp: randomNBit(32),
          nonce: 0,
          nonceBuffer: Buffer.alloc(24),
          speaking: false,
          packetsPlayed: 0,
        },
      };
    } else if (packet.op === import_v42.VoiceOpcodes.Resumed && this.state.code === 5 /* Resuming */) {
      this.state = {
        ...this.state,
        code: 4 /* Ready */,
      };
      this.state.connectionData.speaking = false;
    }
  }
  onWsDebug(message) {
    this.debug?.(`[WS] ${message}`);
  }
  onUdpDebug(message) {
    this.debug?.(`[UDP] ${message}`);
  }
  prepareAudioPacket(opusPacket) {
    const state = this.state;
    if (state.code !== 4 /* Ready */) return;
    state.preparedPacket = this.createAudioPacket(opusPacket, state.connectionData);
    return state.preparedPacket;
  }
  dispatchAudio() {
    const state = this.state;
    if (state.code !== 4 /* Ready */) return false;
    if (typeof state.preparedPacket !== 'undefined') {
      this.playAudioPacket(state.preparedPacket);
      state.preparedPacket = void 0;
      return true;
    }
    return false;
  }
  playAudioPacket(audioPacket) {
    const state = this.state;
    if (state.code !== 4 /* Ready */) return;
    const { connectionData } = state;
    connectionData.packetsPlayed++;
    connectionData.sequence++;
    connectionData.timestamp += TIMESTAMP_INC;
    if (connectionData.sequence >= 2 ** 16) connectionData.sequence = 0;
    if (connectionData.timestamp >= 2 ** 32) connectionData.timestamp = 0;
    this.setSpeaking(true);
    state.udp.send(audioPacket);
  }
  setSpeaking(speaking) {
    const state = this.state;
    if (state.code !== 4 /* Ready */) return;
    if (state.connectionData.speaking === speaking) return;
    state.connectionData.speaking = speaking;
    state.ws.sendPacket({
      op: import_v42.VoiceOpcodes.Speaking,
      d: {
        speaking: speaking ? 1 : 0,
        delay: 0,
        ssrc: state.connectionData.ssrc,
      },
    });
  }
  createAudioPacket(opusPacket, connectionData) {
    const packetBuffer = Buffer.alloc(12);
    packetBuffer[0] = 128;
    packetBuffer[1] = 120;
    const { sequence, timestamp, ssrc } = connectionData;
    packetBuffer.writeUIntBE(sequence, 2, 2);
    packetBuffer.writeUIntBE(timestamp, 4, 4);
    packetBuffer.writeUIntBE(ssrc, 8, 4);
    packetBuffer.copy(nonce, 0, 0, 12);
    return Buffer.concat([packetBuffer, ...this.encryptOpusPacket(opusPacket, connectionData)]);
  }
  encryptOpusPacket(opusPacket, connectionData) {
    const { secretKey, encryptionMode } = connectionData;
    if (encryptionMode === 'xsalsa20_poly1305_lite') {
      connectionData.nonce++;
      if (connectionData.nonce > MAX_NONCE_SIZE) connectionData.nonce = 0;
      connectionData.nonceBuffer.writeUInt32BE(connectionData.nonce, 0);
      return [methods.close(opusPacket, connectionData.nonceBuffer, secretKey), connectionData.nonceBuffer.slice(0, 4)];
    } else if (encryptionMode === 'xsalsa20_poly1305_suffix') {
      const random = methods.random(24, connectionData.nonceBuffer);
      return [methods.close(opusPacket, random, secretKey), random];
    }
    return [methods.close(opusPacket, nonce, secretKey)];
  }
};
__name(Networking, 'Networking');

// src/receive/VoiceReceiver.ts
var import_v43 = require('discord-api-types/voice/v4');

// src/receive/AudioReceiveStream.ts
var import_node_stream = require('stream');

// src/audio/AudioPlayer.ts
var import_node_events4 = __toESM(require('events'));

// src/audio/AudioPlayerError.ts
var AudioPlayerError = class extends Error {
  constructor(error, resource) {
    super(error.message);
    __publicField(this, 'resource');
    this.resource = resource;
    this.name = error.name;
    this.stack = error.stack;
  }
};
__name(AudioPlayerError, 'AudioPlayerError');

// src/audio/PlayerSubscription.ts
var PlayerSubscription = class {
  constructor(connection, player) {
    __publicField(this, 'connection');
    __publicField(this, 'player');
    this.connection = connection;
    this.player = player;
  }
  unsubscribe() {
    this.connection['onSubscriptionRemoved'](this);
    this.player['unsubscribe'](this);
  }
};
__name(PlayerSubscription, 'PlayerSubscription');

// src/audio/AudioPlayer.ts
var SILENCE_FRAME = Buffer.from([248, 255, 254]);
var NoSubscriberBehavior = /* @__PURE__ */ (NoSubscriberBehavior2 => {
  NoSubscriberBehavior2['Pause'] = 'pause';
  NoSubscriberBehavior2['Play'] = 'play';
  NoSubscriberBehavior2['Stop'] = 'stop';
  return NoSubscriberBehavior2;
})(NoSubscriberBehavior || {});
var AudioPlayerStatus = /* @__PURE__ */ (AudioPlayerStatus2 => {
  AudioPlayerStatus2['Idle'] = 'idle';
  AudioPlayerStatus2['Buffering'] = 'buffering';
  AudioPlayerStatus2['Paused'] = 'paused';
  AudioPlayerStatus2['Playing'] = 'playing';
  AudioPlayerStatus2['AutoPaused'] = 'autopaused';
  return AudioPlayerStatus2;
})(AudioPlayerStatus || {});
function stringifyState2(state) {
  return JSON.stringify({
    ...state,
    resource: Reflect.has(state, 'resource'),
    stepTimeout: Reflect.has(state, 'stepTimeout'),
  });
}
__name(stringifyState2, 'stringifyState');
var AudioPlayer = class extends import_node_events4.default {
  constructor(options = {}) {
    super();
    __publicField(this, '_state');
    __publicField(this, 'subscribers', []);
    __publicField(this, 'behaviors');
    __publicField(this, 'debug');
    this._state = { status: 'idle' /* Idle */ };
    this.behaviors = {
      noSubscriber: 'pause' /* Pause */,
      maxMissedFrames: 5,
      ...options.behaviors,
    };
    this.debug = options.debug === false ? null : message => this.emit('debug', message);
  }
  get playable() {
    return this.subscribers
      .filter(({ connection }) => connection.state.status === 'ready' /* Ready */)
      .map(({ connection }) => connection);
  }
  subscribe(connection) {
    const existingSubscription = this.subscribers.find(subscription => subscription.connection === connection);
    if (!existingSubscription) {
      const subscription = new PlayerSubscription(connection, this);
      this.subscribers.push(subscription);
      setImmediate(() => this.emit('subscribe', subscription));
      return subscription;
    }
    return existingSubscription;
  }
  unsubscribe(subscription) {
    const index = this.subscribers.indexOf(subscription);
    const exists = index !== -1;
    if (exists) {
      this.subscribers.splice(index, 1);
      subscription.connection.setSpeaking(false);
      this.emit('unsubscribe', subscription);
    }
    return exists;
  }
  get state() {
    return this._state;
  }
  set state(newState) {
    const oldState = this._state;
    const newResource = Reflect.get(newState, 'resource');
    if (oldState.status !== 'idle' /* Idle */ && oldState.resource !== newResource) {
      oldState.resource.playStream.on('error', noop);
      oldState.resource.playStream.off('error', oldState.onStreamError);
      oldState.resource.audioPlayer = void 0;
      oldState.resource.playStream.destroy();
      oldState.resource.playStream.read();
    }
    if (
      oldState.status === 'buffering' /* Buffering */ &&
      (newState.status !== 'buffering' /* Buffering */ || newState.resource !== oldState.resource)
    ) {
      oldState.resource.playStream.off('end', oldState.onFailureCallback);
      oldState.resource.playStream.off('close', oldState.onFailureCallback);
      oldState.resource.playStream.off('finish', oldState.onFailureCallback);
      oldState.resource.playStream.off('readable', oldState.onReadableCallback);
    }
    if (newState.status === 'idle' /* Idle */) {
      this._signalStopSpeaking();
      deleteAudioPlayer(this);
    }
    if (newResource) {
      addAudioPlayer(this);
    }
    const didChangeResources =
      oldState.status !== 'idle' /* Idle */ &&
      newState.status === 'playing' /* Playing */ &&
      oldState.resource !== newState.resource;
    this._state = newState;
    this.emit('stateChange', oldState, this._state);
    if (oldState.status !== newState.status || didChangeResources) {
      this.emit(newState.status, oldState, this._state);
    }
    this.debug?.(`state change:
from ${stringifyState2(oldState)}
to ${stringifyState2(newState)}`);
  }
  play(resource) {
    if (resource.ended) {
      throw new Error('Cannot play a resource that has already ended.');
    }
    if (resource.audioPlayer) {
      if (resource.audioPlayer === this) {
        return;
      }
      throw new Error('Resource is already being played by another audio player.');
    }
    resource.audioPlayer = this;
    const onStreamError = /* @__PURE__ */ __name(error => {
      if (this.state.status !== 'idle' /* Idle */) {
        this.emit('error', new AudioPlayerError(error, this.state.resource));
      }
      if (this.state.status !== 'idle' /* Idle */ && this.state.resource === resource) {
        this.state = {
          status: 'idle' /* Idle */,
        };
      }
    }, 'onStreamError');
    resource.playStream.once('error', onStreamError);
    if (resource.started) {
      this.state = {
        status: 'playing' /* Playing */,
        missedFrames: 0,
        playbackDuration: 0,
        resource,
        onStreamError,
      };
    } else {
      const onReadableCallback = /* @__PURE__ */ __name(() => {
        if (this.state.status === 'buffering' /* Buffering */ && this.state.resource === resource) {
          this.state = {
            status: 'playing' /* Playing */,
            missedFrames: 0,
            playbackDuration: 0,
            resource,
            onStreamError,
          };
        }
      }, 'onReadableCallback');
      const onFailureCallback = /* @__PURE__ */ __name(() => {
        if (this.state.status === 'buffering' /* Buffering */ && this.state.resource === resource) {
          this.state = {
            status: 'idle' /* Idle */,
          };
        }
      }, 'onFailureCallback');
      resource.playStream.once('readable', onReadableCallback);
      resource.playStream.once('end', onFailureCallback);
      resource.playStream.once('close', onFailureCallback);
      resource.playStream.once('finish', onFailureCallback);
      this.state = {
        status: 'buffering' /* Buffering */,
        resource,
        onReadableCallback,
        onFailureCallback,
        onStreamError,
      };
    }
  }
  pause(interpolateSilence = true) {
    if (this.state.status !== 'playing' /* Playing */) return false;
    this.state = {
      ...this.state,
      status: 'paused' /* Paused */,
      silencePacketsRemaining: interpolateSilence ? 5 : 0,
    };
    return true;
  }
  unpause() {
    if (this.state.status !== 'paused' /* Paused */) return false;
    this.state = {
      ...this.state,
      status: 'playing' /* Playing */,
      missedFrames: 0,
    };
    return true;
  }
  stop(force = false) {
    if (this.state.status === 'idle' /* Idle */) return false;
    if (force || this.state.resource.silencePaddingFrames === 0) {
      this.state = {
        status: 'idle' /* Idle */,
      };
    } else if (this.state.resource.silenceRemaining === -1) {
      this.state.resource.silenceRemaining = this.state.resource.silencePaddingFrames;
    }
    return true;
  }
  checkPlayable() {
    const state = this._state;
    if (state.status === 'idle' /* Idle */ || state.status === 'buffering' /* Buffering */) return false;
    if (!state.resource.readable) {
      this.state = {
        status: 'idle' /* Idle */,
      };
      return false;
    }
    return true;
  }
  _stepDispatch() {
    const state = this._state;
    if (state.status === 'idle' /* Idle */ || state.status === 'buffering' /* Buffering */) return;
    this.playable.forEach(connection => connection.dispatchAudio());
  }
  _stepPrepare() {
    const state = this._state;
    if (state.status === 'idle' /* Idle */ || state.status === 'buffering' /* Buffering */) return;
    const playable = this.playable;
    if (state.status === 'autopaused' /* AutoPaused */ && playable.length > 0) {
      this.state = {
        ...state,
        status: 'playing' /* Playing */,
        missedFrames: 0,
      };
    }
    if (state.status === 'paused' /* Paused */ || state.status === 'autopaused' /* AutoPaused */) {
      if (state.silencePacketsRemaining > 0) {
        state.silencePacketsRemaining--;
        this._preparePacket(SILENCE_FRAME, playable, state);
        if (state.silencePacketsRemaining === 0) {
          this._signalStopSpeaking();
        }
      }
      return;
    }
    if (playable.length === 0) {
      if (this.behaviors.noSubscriber === 'pause' /* Pause */) {
        this.state = {
          ...state,
          status: 'autopaused' /* AutoPaused */,
          silencePacketsRemaining: 5,
        };
        return;
      } else if (this.behaviors.noSubscriber === 'stop' /* Stop */) {
        this.stop(true);
      }
    }
    const packet = state.resource.read();
    if (state.status === 'playing' /* Playing */) {
      if (packet) {
        this._preparePacket(packet, playable, state);
        state.missedFrames = 0;
      } else {
        this._preparePacket(SILENCE_FRAME, playable, state);
        state.missedFrames++;
        if (state.missedFrames >= this.behaviors.maxMissedFrames) {
          this.stop();
        }
      }
    }
  }
  _signalStopSpeaking() {
    return this.subscribers.forEach(({ connection }) => connection.setSpeaking(false));
  }
  _preparePacket(packet, receivers, state) {
    state.playbackDuration += 20;
    receivers.forEach(connection => connection.prepareAudioPacket(packet));
  }
};
__name(AudioPlayer, 'AudioPlayer');
function createAudioPlayer(options) {
  return new AudioPlayer(options);
}
__name(createAudioPlayer, 'createAudioPlayer');

// src/receive/AudioReceiveStream.ts
var EndBehaviorType = /* @__PURE__ */ (EndBehaviorType2 => {
  EndBehaviorType2[(EndBehaviorType2['Manual'] = 0)] = 'Manual';
  EndBehaviorType2[(EndBehaviorType2['AfterSilence'] = 1)] = 'AfterSilence';
  EndBehaviorType2[(EndBehaviorType2['AfterInactivity'] = 2)] = 'AfterInactivity';
  return EndBehaviorType2;
})(EndBehaviorType || {});
function createDefaultAudioReceiveStreamOptions() {
  return {
    end: {
      behavior: 0 /* Manual */,
    },
  };
}
__name(createDefaultAudioReceiveStreamOptions, 'createDefaultAudioReceiveStreamOptions');
var AudioReceiveStream = class extends import_node_stream.Readable {
  constructor({ end, ...options }) {
    super({
      ...options,
      objectMode: true,
    });
    __publicField(this, 'end');
    __publicField(this, 'endTimeout');
    this.end = end;
  }
  push(buffer) {
    if (buffer) {
      if (
        this.end.behavior === 2 /* AfterInactivity */ ||
        (this.end.behavior === 1 /* AfterSilence */ &&
          (buffer.compare(SILENCE_FRAME) !== 0 || typeof this.endTimeout === 'undefined'))
      ) {
        this.renewEndTimeout(this.end);
      }
    }
    return super.push(buffer);
  }
  renewEndTimeout(end) {
    if (this.endTimeout) {
      clearTimeout(this.endTimeout);
    }
    this.endTimeout = setTimeout(() => this.push(null), end.duration);
  }
  _read() {}
};
__name(AudioReceiveStream, 'AudioReceiveStream');

// src/receive/SSRCMap.ts
var import_node_events5 = require('events');
var SSRCMap = class extends import_node_events5.EventEmitter {
  constructor() {
    super();
    __publicField(this, 'map');
    this.map = /* @__PURE__ */ new Map();
  }
  update(data) {
    const existing = this.map.get(data.audioSSRC);
    const newValue = {
      ...this.map.get(data.audioSSRC),
      ...data,
    };
    this.map.set(data.audioSSRC, newValue);
    if (!existing) this.emit('create', newValue);
    this.emit('update', existing, newValue);
  }
  get(target) {
    if (typeof target === 'number') {
      return this.map.get(target);
    }
    for (const data of this.map.values()) {
      if (data.userId === target) {
        return data;
      }
    }
    return void 0;
  }
  delete(target) {
    if (typeof target === 'number') {
      const existing = this.map.get(target);
      if (existing) {
        this.map.delete(target);
        this.emit('delete', existing);
      }
      return existing;
    }
    for (const [audioSSRC, data] of this.map.entries()) {
      if (data.userId === target) {
        this.map.delete(audioSSRC);
        this.emit('delete', data);
        return data;
      }
    }
    return void 0;
  }
};
__name(SSRCMap, 'SSRCMap');

// src/receive/SpeakingMap.ts
var import_node_events6 = require('events');
var _SpeakingMap = class extends import_node_events6.EventEmitter {
  constructor() {
    super();
    __publicField(this, 'users');
    __publicField(this, 'speakingTimeouts');
    this.users = /* @__PURE__ */ new Map();
    this.speakingTimeouts = /* @__PURE__ */ new Map();
  }
  onPacket(userId) {
    const timeout = this.speakingTimeouts.get(userId);
    if (timeout) {
      clearTimeout(timeout);
    } else {
      this.users.set(userId, Date.now());
      this.emit('start', userId);
    }
    this.startTimeout(userId);
  }
  startTimeout(userId) {
    this.speakingTimeouts.set(
      userId,
      setTimeout(() => {
        this.emit('end', userId);
        this.speakingTimeouts.delete(userId);
        this.users.delete(userId);
      }, _SpeakingMap.DELAY),
    );
  }
};
var SpeakingMap = _SpeakingMap;
__name(SpeakingMap, 'SpeakingMap');
__publicField(SpeakingMap, 'DELAY', 100);

// src/receive/VoiceReceiver.ts
var VoiceReceiver = class {
  constructor(voiceConnection) {
    __publicField(this, 'voiceConnection');
    __publicField(this, 'ssrcMap');
    __publicField(this, 'subscriptions');
    __publicField(this, 'connectionData');
    __publicField(this, 'speaking');
    this.voiceConnection = voiceConnection;
    this.ssrcMap = new SSRCMap();
    this.speaking = new SpeakingMap();
    this.subscriptions = /* @__PURE__ */ new Map();
    this.connectionData = {};
    this.onWsPacket = this.onWsPacket.bind(this);
    this.onUdpMessage = this.onUdpMessage.bind(this);
  }
  onWsPacket(packet) {
    if (packet.op === import_v43.VoiceOpcodes.ClientDisconnect && typeof packet.d?.user_id === 'string') {
      this.ssrcMap.delete(packet.d.user_id);
    } else if (
      packet.op === import_v43.VoiceOpcodes.Speaking &&
      typeof packet.d?.user_id === 'string' &&
      typeof packet.d?.ssrc === 'number'
    ) {
      this.ssrcMap.update({ userId: packet.d.user_id, audioSSRC: packet.d.ssrc });
    } else if (
      packet.op === import_v43.VoiceOpcodes.ClientConnect &&
      typeof packet.d?.user_id === 'string' &&
      typeof packet.d?.audio_ssrc === 'number'
    ) {
      this.ssrcMap.update({
        userId: packet.d.user_id,
        audioSSRC: packet.d.audio_ssrc,
        videoSSRC: packet.d.video_ssrc === 0 ? void 0 : packet.d.video_ssrc,
      });
    }
  }
  decrypt(buffer, mode, nonce2, secretKey) {
    let end;
    if (mode === 'xsalsa20_poly1305_lite') {
      buffer.copy(nonce2, 0, buffer.length - 4);
      end = buffer.length - 4;
    } else if (mode === 'xsalsa20_poly1305_suffix') {
      buffer.copy(nonce2, 0, buffer.length - 24);
      end = buffer.length - 24;
    } else {
      buffer.copy(nonce2, 0, 0, 12);
    }
    const decrypted = methods.open(buffer.slice(12, end), nonce2, secretKey);
    if (!decrypted) return;
    return Buffer.from(decrypted);
  }
  parsePacket(buffer, mode, nonce2, secretKey) {
    let packet = this.decrypt(buffer, mode, nonce2, secretKey);
    if (!packet) return;
    if (packet[0] === 190 && packet[1] === 222) {
      const headerExtensionLength = packet.readUInt16BE(2);
      packet = packet.subarray(4 + 4 * headerExtensionLength);
    }
    return packet;
  }
  onUdpMessage(msg) {
    if (msg.length <= 8) return;
    const ssrc = msg.readUInt32BE(8);
    const userData = this.ssrcMap.get(ssrc);
    if (!userData) return;
    this.speaking.onPacket(userData.userId);
    const stream = this.subscriptions.get(userData.userId);
    if (!stream) return;
    if (this.connectionData.encryptionMode && this.connectionData.nonceBuffer && this.connectionData.secretKey) {
      const packet = this.parsePacket(
        msg,
        this.connectionData.encryptionMode,
        this.connectionData.nonceBuffer,
        this.connectionData.secretKey,
      );
      if (packet) {
        stream.push(packet);
      } else {
        stream.destroy(new Error('Failed to parse packet'));
      }
    }
  }
  subscribe(userId, options) {
    const existing = this.subscriptions.get(userId);
    if (existing) return existing;
    const stream = new AudioReceiveStream({
      ...createDefaultAudioReceiveStreamOptions(),
      ...options,
    });
    stream.once('close', () => this.subscriptions.delete(userId));
    this.subscriptions.set(userId, stream);
    return stream;
  }
};
__name(VoiceReceiver, 'VoiceReceiver');

// src/VoiceConnection.ts
var VoiceConnectionStatus = /* @__PURE__ */ (VoiceConnectionStatus2 => {
  VoiceConnectionStatus2['Signalling'] = 'signalling';
  VoiceConnectionStatus2['Connecting'] = 'connecting';
  VoiceConnectionStatus2['Ready'] = 'ready';
  VoiceConnectionStatus2['Disconnected'] = 'disconnected';
  VoiceConnectionStatus2['Destroyed'] = 'destroyed';
  return VoiceConnectionStatus2;
})(VoiceConnectionStatus || {});
var VoiceConnectionDisconnectReason = /* @__PURE__ */ (VoiceConnectionDisconnectReason2 => {
  VoiceConnectionDisconnectReason2[(VoiceConnectionDisconnectReason2['WebSocketClose'] = 0)] = 'WebSocketClose';
  VoiceConnectionDisconnectReason2[(VoiceConnectionDisconnectReason2['AdapterUnavailable'] = 1)] = 'AdapterUnavailable';
  VoiceConnectionDisconnectReason2[(VoiceConnectionDisconnectReason2['EndpointRemoved'] = 2)] = 'EndpointRemoved';
  VoiceConnectionDisconnectReason2[(VoiceConnectionDisconnectReason2['Manual'] = 3)] = 'Manual';
  return VoiceConnectionDisconnectReason2;
})(VoiceConnectionDisconnectReason || {});
var VoiceConnection2 = class extends import_node_events7.EventEmitter {
  constructor(joinConfig, { debug, adapterCreator }) {
    super();
    __publicField(this, 'rejoinAttempts');
    __publicField(this, '_state');
    __publicField(this, 'joinConfig');
    __publicField(this, 'packets');
    __publicField(this, 'receiver');
    __publicField(this, 'debug');
    this.debug = debug ? message => this.emit('debug', message) : null;
    this.rejoinAttempts = 0;
    this.receiver = new VoiceReceiver(this);
    this.onNetworkingClose = this.onNetworkingClose.bind(this);
    this.onNetworkingStateChange = this.onNetworkingStateChange.bind(this);
    this.onNetworkingError = this.onNetworkingError.bind(this);
    this.onNetworkingDebug = this.onNetworkingDebug.bind(this);
    const adapter = adapterCreator({
      onVoiceServerUpdate: data => this.addServerPacket(data),
      onVoiceStateUpdate: data => this.addStatePacket(data),
      destroy: () => this.destroy(false),
    });
    this._state = { status: 'signalling' /* Signalling */, adapter };
    this.packets = {
      server: void 0,
      state: void 0,
    };
    this.joinConfig = joinConfig;
  }
  get state() {
    return this._state;
  }
  set state(newState) {
    const oldState = this._state;
    const oldNetworking = Reflect.get(oldState, 'networking');
    const newNetworking = Reflect.get(newState, 'networking');
    const oldSubscription = Reflect.get(oldState, 'subscription');
    const newSubscription = Reflect.get(newState, 'subscription');
    if (oldNetworking !== newNetworking) {
      if (oldNetworking) {
        oldNetworking.on('error', noop);
        oldNetworking.off('debug', this.onNetworkingDebug);
        oldNetworking.off('error', this.onNetworkingError);
        oldNetworking.off('close', this.onNetworkingClose);
        oldNetworking.off('stateChange', this.onNetworkingStateChange);
        oldNetworking.destroy();
      }
      if (newNetworking) this.updateReceiveBindings(newNetworking.state, oldNetworking?.state);
    }
    if (newState.status === 'ready' /* Ready */) {
      this.rejoinAttempts = 0;
    } else if (newState.status === 'destroyed' /* Destroyed */) {
      for (const stream of this.receiver.subscriptions.values()) {
        if (!stream.destroyed) stream.destroy();
      }
    }
    if (oldState.status !== 'destroyed' /* Destroyed */ && newState.status === 'destroyed' /* Destroyed */) {
      oldState.adapter.destroy();
    }
    this._state = newState;
    if (oldSubscription && oldSubscription !== newSubscription) {
      oldSubscription.unsubscribe();
    }
    this.emit('stateChange', oldState, newState);
    if (oldState.status !== newState.status) {
      this.emit(newState.status, oldState, newState);
    }
  }
  addServerPacket(packet) {
    this.packets.server = packet;
    if (packet.endpoint) {
      this.configureNetworking();
    } else if (this.state.status !== 'destroyed' /* Destroyed */) {
      this.state = {
        ...this.state,
        status: 'disconnected' /* Disconnected */,
        reason: 2 /* EndpointRemoved */,
      };
    }
  }
  addStatePacket(packet) {
    this.packets.state = packet;
    if (typeof packet.self_deaf !== 'undefined') this.joinConfig.selfDeaf = packet.self_deaf;
    if (typeof packet.self_mute !== 'undefined') this.joinConfig.selfMute = packet.self_mute;
    if (packet.channel_id) this.joinConfig.channelId = packet.channel_id;
  }
  updateReceiveBindings(newState, oldState) {
    const oldWs = Reflect.get(oldState ?? {}, 'ws');
    const newWs = Reflect.get(newState, 'ws');
    const oldUdp = Reflect.get(oldState ?? {}, 'udp');
    const newUdp = Reflect.get(newState, 'udp');
    if (oldWs !== newWs) {
      oldWs?.off('packet', this.receiver.onWsPacket);
      newWs?.on('packet', this.receiver.onWsPacket);
    }
    if (oldUdp !== newUdp) {
      oldUdp?.off('message', this.receiver.onUdpMessage);
      newUdp?.on('message', this.receiver.onUdpMessage);
    }
    this.receiver.connectionData = Reflect.get(newState, 'connectionData') ?? {};
  }
  configureNetworking() {
    const { server, state } = this.packets;
    if (!server || !state || this.state.status === 'destroyed' /* Destroyed */ || !server.endpoint) return;
    const networking = new Networking(
      {
        endpoint: server.endpoint,
        serverId: server.guild_id,
        token: server.token,
        sessionId: state.session_id,
        userId: state.user_id,
      },
      Boolean(this.debug),
    );
    networking.once('close', this.onNetworkingClose);
    networking.on('stateChange', this.onNetworkingStateChange);
    networking.on('error', this.onNetworkingError);
    networking.on('debug', this.onNetworkingDebug);
    this.state = {
      ...this.state,
      status: 'connecting' /* Connecting */,
      networking,
    };
  }
  onNetworkingClose(code) {
    if (this.state.status === 'destroyed' /* Destroyed */) return;
    if (code === 4014) {
      this.state = {
        ...this.state,
        status: 'disconnected' /* Disconnected */,
        reason: 0 /* WebSocketClose */,
        closeCode: code,
      };
    } else {
      this.state = {
        ...this.state,
        status: 'signalling' /* Signalling */,
      };
      this.rejoinAttempts++;
      if (!this.state.adapter.sendPayload(createJoinVoiceChannelPayload(this.joinConfig))) {
        this.state = {
          ...this.state,
          status: 'disconnected' /* Disconnected */,
          reason: 1 /* AdapterUnavailable */,
        };
      }
    }
  }
  onNetworkingStateChange(oldState, newState) {
    this.updateReceiveBindings(newState, oldState);
    if (oldState.code === newState.code) return;
    if (this.state.status !== 'connecting' /* Connecting */ && this.state.status !== 'ready' /* Ready */) return;
    if (newState.code === 4 /* Ready */) {
      this.state = {
        ...this.state,
        status: 'ready' /* Ready */,
      };
    } else if (newState.code !== 6 /* Closed */) {
      this.state = {
        ...this.state,
        status: 'connecting' /* Connecting */,
      };
    }
  }
  onNetworkingError(error) {
    this.emit('error', error);
  }
  onNetworkingDebug(message) {
    this.debug?.(`[NW] ${message}`);
  }
  prepareAudioPacket(buffer) {
    const state = this.state;
    if (state.status !== 'ready' /* Ready */) return;
    return state.networking.prepareAudioPacket(buffer);
  }
  dispatchAudio() {
    const state = this.state;
    if (state.status !== 'ready' /* Ready */) return;
    return state.networking.dispatchAudio();
  }
  playOpusPacket(buffer) {
    const state = this.state;
    if (state.status !== 'ready' /* Ready */) return;
    state.networking.prepareAudioPacket(buffer);
    return state.networking.dispatchAudio();
  }
  destroy(adapterAvailable = true) {
    if (this.state.status === 'destroyed' /* Destroyed */) {
      throw new Error('Cannot destroy VoiceConnection - it has already been destroyed');
    }
    if (getVoiceConnection(this.joinConfig.guildId, this.joinConfig.group) === this) {
      untrackVoiceConnection(this);
    }
    if (adapterAvailable) {
      this.state.adapter.sendPayload(createJoinVoiceChannelPayload({ ...this.joinConfig, channelId: null }));
    }
    this.state = {
      status: 'destroyed' /* Destroyed */,
    };
  }
  disconnect() {
    if (this.state.status === 'destroyed' /* Destroyed */ || this.state.status === 'signalling' /* Signalling */) {
      return false;
    }
    this.joinConfig.channelId = null;
    if (!this.state.adapter.sendPayload(createJoinVoiceChannelPayload(this.joinConfig))) {
      this.state = {
        adapter: this.state.adapter,
        subscription: this.state.subscription,
        status: 'disconnected' /* Disconnected */,
        reason: 1 /* AdapterUnavailable */,
      };
      return false;
    }
    this.state = {
      adapter: this.state.adapter,
      reason: 3 /* Manual */,
      status: 'disconnected' /* Disconnected */,
    };
    return true;
  }
  rejoin(joinConfig) {
    if (this.state.status === 'destroyed' /* Destroyed */) {
      return false;
    }
    const notReady = this.state.status !== 'ready'; /* Ready */
    if (notReady) this.rejoinAttempts++;
    Object.assign(this.joinConfig, joinConfig);
    if (this.state.adapter.sendPayload(createJoinVoiceChannelPayload(this.joinConfig))) {
      if (notReady) {
        this.state = {
          ...this.state,
          status: 'signalling' /* Signalling */,
        };
      }
      return true;
    }
    this.state = {
      adapter: this.state.adapter,
      subscription: this.state.subscription,
      status: 'disconnected' /* Disconnected */,
      reason: 1 /* AdapterUnavailable */,
    };
    return false;
  }
  setSpeaking(enabled) {
    if (this.state.status !== 'ready' /* Ready */) return false;
    return this.state.networking.setSpeaking(enabled);
  }
  subscribe(player) {
    if (this.state.status === 'destroyed' /* Destroyed */) return;
    const subscription = player['subscribe'](this);
    this.state = {
      ...this.state,
      subscription,
    };
    return subscription;
  }
  get ping() {
    if (this.state.status === 'ready' /* Ready */ && this.state.networking.state.code === 4 /* Ready */) {
      return {
        ws: this.state.networking.state.ws.ping,
        udp: this.state.networking.state.udp.ping,
      };
    }
    return {
      ws: void 0,
      udp: void 0,
    };
  }
  onSubscriptionRemoved(subscription) {
    if (this.state.status !== 'destroyed' /* Destroyed */ && this.state.subscription === subscription) {
      this.state = {
        ...this.state,
        subscription: void 0,
      };
    }
  }
};
__name(VoiceConnection2, 'VoiceConnection');
function createVoiceConnection(joinConfig, options) {
  const payload = createJoinVoiceChannelPayload(joinConfig);
  const existing = getVoiceConnection(joinConfig.guildId, joinConfig.group);
  if (existing && existing.state.status !== 'destroyed' /* Destroyed */) {
    if (existing.state.status === 'disconnected' /* Disconnected */) {
      existing.rejoin({
        channelId: joinConfig.channelId,
        selfDeaf: joinConfig.selfDeaf,
        selfMute: joinConfig.selfMute,
      });
    } else if (!existing.state.adapter.sendPayload(payload)) {
      existing.state = {
        ...existing.state,
        status: 'disconnected' /* Disconnected */,
        reason: 1 /* AdapterUnavailable */,
      };
    }
    return existing;
  }
  const voiceConnection = new VoiceConnection2(joinConfig, options);
  trackVoiceConnection(voiceConnection);
  if (voiceConnection.state.status !== 'destroyed' /* Destroyed */) {
    if (!voiceConnection.state.adapter.sendPayload(payload)) {
      voiceConnection.state = {
        ...voiceConnection.state,
        status: 'disconnected' /* Disconnected */,
        reason: 1 /* AdapterUnavailable */,
      };
    }
  }
  return voiceConnection;
}
__name(createVoiceConnection, 'createVoiceConnection');

// src/joinVoiceChannel.ts
function joinVoiceChannel(options) {
  const joinConfig = {
    selfDeaf: true,
    selfMute: false,
    group: 'default',
    ...options,
  };
  return createVoiceConnection(joinConfig, {
    adapterCreator: options.adapterCreator,
    debug: options.debug,
  });
}
__name(joinVoiceChannel, 'joinVoiceChannel');

// src/audio/AudioResource.ts
var import_node_stream2 = require('stream');
var import_prism_media2 = __toESM(require('prism-media'));

// src/audio/TransformerGraph.ts
var import_prism_media = __toESM(require('prism-media'));
var FFMPEG_PCM_ARGUMENTS = ['-analyzeduration', '0', '-loglevel', '0', '-f', 's16le', '-ar', '48000', '-ac', '2'];
var FFMPEG_OPUS_ARGUMENTS = [
  '-analyzeduration',
  '0',
  '-loglevel',
  '0',
  '-acodec',
  'libopus',
  '-f',
  'opus',
  '-ar',
  '48000',
  '-ac',
  '2',
];
var StreamType = /* @__PURE__ */ (StreamType2 => {
  StreamType2['Arbitrary'] = 'arbitrary';
  StreamType2['Raw'] = 'raw';
  StreamType2['OggOpus'] = 'ogg/opus';
  StreamType2['WebmOpus'] = 'webm/opus';
  StreamType2['Opus'] = 'opus';
  return StreamType2;
})(StreamType || {});
var Node = class {
  constructor(type) {
    __publicField(this, 'edges', []);
    __publicField(this, 'type');
    this.type = type;
  }
  addEdge(edge) {
    this.edges.push({ ...edge, from: this });
  }
};
__name(Node, 'Node');
var NODES = /* @__PURE__ */ new Map();
for (const streamType of Object.values(StreamType)) {
  NODES.set(streamType, new Node(streamType));
}
function getNode(type) {
  const node = NODES.get(type);
  if (!node) throw new Error(`Node type '${type}' does not exist!`);
  return node;
}
__name(getNode, 'getNode');
getNode('raw' /* Raw */).addEdge({
  type: 'opus encoder' /* OpusEncoder */,
  to: getNode('opus' /* Opus */),
  cost: 1.5,
  transformer: () => new import_prism_media.default.opus.Encoder({ rate: 48e3, channels: 2, frameSize: 960 }),
});
getNode('opus' /* Opus */).addEdge({
  type: 'opus decoder' /* OpusDecoder */,
  to: getNode('raw' /* Raw */),
  cost: 1.5,
  transformer: () => new import_prism_media.default.opus.Decoder({ rate: 48e3, channels: 2, frameSize: 960 }),
});
getNode('ogg/opus' /* OggOpus */).addEdge({
  type: 'ogg/opus demuxer' /* OggOpusDemuxer */,
  to: getNode('opus' /* Opus */),
  cost: 1,
  transformer: () => new import_prism_media.default.opus.OggDemuxer(),
});
getNode('webm/opus' /* WebmOpus */).addEdge({
  type: 'webm/opus demuxer' /* WebmOpusDemuxer */,
  to: getNode('opus' /* Opus */),
  cost: 1,
  transformer: () => new import_prism_media.default.opus.WebmDemuxer(),
});
var FFMPEG_PCM_EDGE = {
  type: 'ffmpeg pcm' /* FFmpegPCM */,
  to: getNode('raw' /* Raw */),
  cost: 2,
  transformer: input =>
    new import_prism_media.default.FFmpeg({
      args: typeof input === 'string' ? ['-i', input, ...FFMPEG_PCM_ARGUMENTS] : FFMPEG_PCM_ARGUMENTS,
    }),
};
getNode('arbitrary' /* Arbitrary */).addEdge(FFMPEG_PCM_EDGE);
getNode('ogg/opus' /* OggOpus */).addEdge(FFMPEG_PCM_EDGE);
getNode('webm/opus' /* WebmOpus */).addEdge(FFMPEG_PCM_EDGE);
getNode('raw' /* Raw */).addEdge({
  type: 'volume transformer' /* InlineVolume */,
  to: getNode('raw' /* Raw */),
  cost: 0.5,
  transformer: () => new import_prism_media.default.VolumeTransformer({ type: 's16le' }),
});
function canEnableFFmpegOptimizations() {
  try {
    return import_prism_media.default.FFmpeg.getInfo().output.includes('--enable-libopus');
  } catch {}
  return false;
}
__name(canEnableFFmpegOptimizations, 'canEnableFFmpegOptimizations');
if (canEnableFFmpegOptimizations()) {
  const FFMPEG_OGG_EDGE = {
    type: 'ffmpeg ogg' /* FFmpegOgg */,
    to: getNode('ogg/opus' /* OggOpus */),
    cost: 2,
    transformer: input =>
      new import_prism_media.default.FFmpeg({
        args: typeof input === 'string' ? ['-i', input, ...FFMPEG_OPUS_ARGUMENTS] : FFMPEG_OPUS_ARGUMENTS,
      }),
  };
  getNode('arbitrary' /* Arbitrary */).addEdge(FFMPEG_OGG_EDGE);
  getNode('ogg/opus' /* OggOpus */).addEdge(FFMPEG_OGG_EDGE);
  getNode('webm/opus' /* WebmOpus */).addEdge(FFMPEG_OGG_EDGE);
}
function findPath(from, constraints, goal = getNode('opus' /* Opus */), path = [], depth = 5) {
  if (from === goal && constraints(path)) {
    return { cost: 0 };
  } else if (depth === 0) {
    return { cost: Infinity };
  }
  let currentBest = void 0;
  for (const edge of from.edges) {
    if (currentBest && edge.cost > currentBest.cost) continue;
    const next = findPath(edge.to, constraints, goal, [...path, edge], depth - 1);
    const cost = edge.cost + next.cost;
    if (!currentBest || cost < currentBest.cost) {
      currentBest = { cost, edge, next };
    }
  }
  return currentBest ?? { cost: Infinity };
}
__name(findPath, 'findPath');
function constructPipeline(step) {
  const edges = [];
  let current = step;
  while (current?.edge) {
    edges.push(current.edge);
    current = current.next;
  }
  return edges;
}
__name(constructPipeline, 'constructPipeline');
function findPipeline(from, constraint) {
  return constructPipeline(findPath(getNode(from), constraint));
}
__name(findPipeline, 'findPipeline');

// src/audio/AudioResource.ts
var AudioResource = class {
  constructor(edges, streams, metadata, silencePaddingFrames) {
    __publicField(this, 'playStream');
    __publicField(this, 'edges');
    __publicField(this, 'metadata');
    __publicField(this, 'volume');
    __publicField(this, 'encoder');
    __publicField(this, 'audioPlayer');
    __publicField(this, 'playbackDuration', 0);
    __publicField(this, 'started', false);
    __publicField(this, 'silencePaddingFrames');
    __publicField(this, 'silenceRemaining', -1);
    this.edges = edges;
    this.playStream = streams.length > 1 ? (0, import_node_stream2.pipeline)(streams, noop) : streams[0];
    this.metadata = metadata;
    this.silencePaddingFrames = silencePaddingFrames;
    for (const stream of streams) {
      if (stream instanceof import_prism_media2.default.VolumeTransformer) {
        this.volume = stream;
      } else if (stream instanceof import_prism_media2.default.opus.Encoder) {
        this.encoder = stream;
      }
    }
    this.playStream.once('readable', () => (this.started = true));
  }
  get readable() {
    if (this.silenceRemaining === 0) return false;
    const real = this.playStream.readable;
    if (!real) {
      if (this.silenceRemaining === -1) this.silenceRemaining = this.silencePaddingFrames;
      return this.silenceRemaining !== 0;
    }
    return real;
  }
  get ended() {
    return this.playStream.readableEnded || this.playStream.destroyed || this.silenceRemaining === 0;
  }
  read() {
    if (this.silenceRemaining === 0) {
      return null;
    } else if (this.silenceRemaining > 0) {
      this.silenceRemaining--;
      return SILENCE_FRAME;
    }
    const packet = this.playStream.read();
    if (packet) {
      this.playbackDuration += 20;
    }
    return packet;
  }
};
__name(AudioResource, 'AudioResource');
var VOLUME_CONSTRAINT = /* @__PURE__ */ __name(
  path => path.some(edge => edge.type === 'volume transformer' /* InlineVolume */),
  'VOLUME_CONSTRAINT',
);
var NO_CONSTRAINT = /* @__PURE__ */ __name(() => true, 'NO_CONSTRAINT');
function inferStreamType(stream) {
  if (stream instanceof import_prism_media2.default.opus.Encoder) {
    return { streamType: 'opus' /* Opus */, hasVolume: false };
  } else if (stream instanceof import_prism_media2.default.opus.Decoder) {
    return { streamType: 'raw' /* Raw */, hasVolume: false };
  } else if (stream instanceof import_prism_media2.default.VolumeTransformer) {
    return { streamType: 'raw' /* Raw */, hasVolume: true };
  } else if (stream instanceof import_prism_media2.default.opus.OggDemuxer) {
    return { streamType: 'opus' /* Opus */, hasVolume: false };
  } else if (stream instanceof import_prism_media2.default.opus.WebmDemuxer) {
    return { streamType: 'opus' /* Opus */, hasVolume: false };
  }
  return { streamType: 'arbitrary' /* Arbitrary */, hasVolume: false };
}
__name(inferStreamType, 'inferStreamType');
function createAudioResource(input, options = {}) {
  let inputType = options.inputType;
  let needsInlineVolume = Boolean(options.inlineVolume);
  if (typeof input === 'string') {
    inputType = 'arbitrary' /* Arbitrary */;
  } else if (typeof inputType === 'undefined') {
    const analysis = inferStreamType(input);
    inputType = analysis.streamType;
    needsInlineVolume = needsInlineVolume && !analysis.hasVolume;
  }
  const transformerPipeline = findPipeline(inputType, needsInlineVolume ? VOLUME_CONSTRAINT : NO_CONSTRAINT);
  if (transformerPipeline.length === 0) {
    if (typeof input === 'string') throw new Error(`Invalid pipeline constructed for string resource '${input}'`);
    return new AudioResource([], [input], options.metadata ?? null, options.silencePaddingFrames ?? 5);
  }
  const streams = transformerPipeline.map(edge => edge.transformer(input));
  if (typeof input !== 'string') streams.unshift(input);
  return new AudioResource(transformerPipeline, streams, options.metadata ?? null, options.silencePaddingFrames ?? 5);
}
__name(createAudioResource, 'createAudioResource');

// src/util/generateDependencyReport.ts
var import_node_path = require('path');
var import_prism_media3 = __toESM(require('prism-media'));
function findPackageJSON(dir, packageName, depth) {
  if (depth === 0) return void 0;
  const attemptedPath = (0, import_node_path.resolve)(dir, './package.json');
  try {
    const pkg = require(attemptedPath);
    if (pkg.name !== packageName) throw new Error('package.json does not match');
    return pkg;
  } catch (err) {
    return findPackageJSON((0, import_node_path.resolve)(dir, '..'), packageName, depth - 1);
  }
}
__name(findPackageJSON, 'findPackageJSON');
function version(name) {
  try {
    const pkg =
      name === '@discordjs/voice'
        ? require_package()
        : findPackageJSON((0, import_node_path.dirname)(require.resolve(name)), name, 3);
    return pkg?.version ?? 'not found';
  } catch (err) {
    return 'not found';
  }
}
__name(version, 'version');
function generateDependencyReport() {
  const report = [];
  const addVersion = /* @__PURE__ */ __name(name => report.push(`- ${name}: ${version(name)}`), 'addVersion');
  report.push('Core Dependencies');
  addVersion('@discordjs/voice');
  addVersion('prism-media');
  report.push('');
  report.push('Opus Libraries');
  addVersion('@discordjs/opus');
  addVersion('opusscript');
  report.push('');
  report.push('Encryption Libraries');
  addVersion('sodium-native');
  addVersion('sodium');
  addVersion('libsodium-wrappers');
  addVersion('tweetnacl');
  report.push('');
  report.push('FFmpeg');
  try {
    const info = import_prism_media3.default.FFmpeg.getInfo();
    report.push(`- version: ${info.version}`);
    report.push(`- libopus: ${info.output.includes('--enable-libopus') ? 'yes' : 'no'}`);
  } catch (err) {
    report.push('- not found');
  }
  return ['-'.repeat(50), ...report, '-'.repeat(50)].join('\n');
}
__name(generateDependencyReport, 'generateDependencyReport');

// src/util/entersState.ts
var import_node_events8 = require('events');

// src/util/abortAfter.ts
function abortAfter(delay) {
  const ac = new AbortController();
  const timeout = setTimeout(() => ac.abort(), delay);
  ac.signal.addEventListener('abort', () => clearTimeout(timeout));
  return [ac, ac.signal];
}
__name(abortAfter, 'abortAfter');

// src/util/entersState.ts
async function entersState(target, status, timeoutOrSignal) {
  if (target.state.status !== status) {
    const [ac, signal] = typeof timeoutOrSignal === 'number' ? abortAfter(timeoutOrSignal) : [void 0, timeoutOrSignal];
    try {
      await (0, import_node_events8.once)(target, status, { signal });
    } finally {
      ac?.abort();
    }
  }
  return target;
}
__name(entersState, 'entersState');

// src/util/demuxProbe.ts
var import_node_stream3 = require('stream');
var import_prism_media4 = __toESM(require('prism-media'));
function validateDiscordOpusHead(opusHead) {
  const channels = opusHead.readUInt8(9);
  const sampleRate = opusHead.readUInt32LE(12);
  return channels === 2 && sampleRate === 48e3;
}
__name(validateDiscordOpusHead, 'validateDiscordOpusHead');
function demuxProbe(stream, probeSize = 1024, validator = validateDiscordOpusHead) {
  return new Promise((resolve2, reject) => {
    if (stream.readableObjectMode) return reject(new Error('Cannot probe a readable stream in object mode'));
    if (stream.readableEnded) return reject(new Error('Cannot probe a stream that has ended'));
    let readBuffer = Buffer.alloc(0);
    let resolved = void 0;
    const finish = /* @__PURE__ */ __name(type => {
      stream.off('data', onData);
      stream.off('close', onClose);
      stream.off('end', onClose);
      stream.pause();
      resolved = type;
      if (stream.readableEnded) {
        resolve2({
          stream: import_node_stream3.Readable.from(readBuffer),
          type,
        });
      } else {
        if (readBuffer.length > 0) {
          stream.push(readBuffer);
        }
        resolve2({
          stream,
          type,
        });
      }
    }, 'finish');
    const foundHead = /* @__PURE__ */ __name(
      type => head => {
        if (validator(head)) {
          finish(type);
        }
      },
      'foundHead',
    );
    const webm = new import_prism_media4.default.opus.WebmDemuxer();
    webm.once('error', noop);
    webm.on('head', foundHead('webm/opus' /* WebmOpus */));
    const ogg = new import_prism_media4.default.opus.OggDemuxer();
    ogg.once('error', noop);
    ogg.on('head', foundHead('ogg/opus' /* OggOpus */));
    const onClose = /* @__PURE__ */ __name(() => {
      if (!resolved) {
        finish('arbitrary' /* Arbitrary */);
      }
    }, 'onClose');
    const onData = /* @__PURE__ */ __name(buffer => {
      readBuffer = Buffer.concat([readBuffer, buffer]);
      webm.write(buffer);
      ogg.write(buffer);
      if (readBuffer.length >= probeSize) {
        stream.off('data', onData);
        stream.pause();
        process.nextTick(onClose);
      }
    }, 'onData');
    stream.once('error', reject);
    stream.on('data', onData);
    stream.once('close', onClose);
    stream.once('end', onClose);
  });
}
__name(demuxProbe, 'demuxProbe');
// Annotate the CommonJS export names for ESM import in node:
0 &&
  (module.exports = {
    AudioPlayer,
    AudioPlayerError,
    AudioPlayerStatus,
    AudioReceiveStream,
    AudioResource,
    EndBehaviorType,
    NoSubscriberBehavior,
    PlayerSubscription,
    SSRCMap,
    SpeakingMap,
    StreamType,
    VoiceConnection,
    VoiceConnectionDisconnectReason,
    VoiceConnectionStatus,
    VoiceReceiver,
    createAudioPlayer,
    createAudioResource,
    createDefaultAudioReceiveStreamOptions,
    demuxProbe,
    entersState,
    generateDependencyReport,
    getGroups,
    getVoiceConnection,
    getVoiceConnections,
    joinVoiceChannel,
    validateDiscordOpusHead,
    Networking,
  });
//# sourceMappingURL=index.js.map
