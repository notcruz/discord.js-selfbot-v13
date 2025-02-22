'use strict';

const { Collection } = require('@discordjs/collection');
const Team = require('./Team');
const Application = require('./interfaces/Application');
const ApplicationCommandManager = require('../managers/ApplicationCommandManager');
const ApplicationFlags = require('../util/ApplicationFlags');
const Permissions = require('../util/Permissions');

/**
 * @typedef {Object} ClientApplicationInstallParams
 * @property {InviteScope[]} scopes The scopes to add the application to the server with
 * @property {Readonly<Permissions>} permissions The permissions this bot will request upon joining
 */

/**
 * Represents a Client OAuth2 Application.
 * @extends {Application}
 */
class ClientApplication extends Application {
  constructor(client, data, user) {
    super(client, data);

    /**
     * The application command manager for this application
     * @type {ApplicationCommandManager}
     */
    this.commands = new ApplicationCommandManager(this.client, undefined, user);
  }

  _patch(data) {
    super._patch(data);

    /**
     * The tags this application has (max of 5)
     * @type {string[]}
     */
    this.tags = data.tags ?? [];

    if ('install_params' in data) {
      /**
       * Settings for this application's default in-app authorization
       * @type {?ClientApplicationInstallParams}
       */
      this.installParams = {
        scopes: data.install_params.scopes,
        permissions: new Permissions(data.install_params.permissions).freeze(),
      };
    } else {
      this.installParams ??= null;
    }

    if ('custom_install_url' in data) {
      /**
       * This application's custom installation URL
       * @type {?string}
       */
      this.customInstallURL = data.custom_install_url;
    } else {
      this.customInstallURL = null;
    }

    if ('flags' in data) {
      /**
       * The flags this application has
       * @type {ApplicationFlags}
       */
      this.flags = new ApplicationFlags(data.flags).freeze();
    }

    if ('cover_image' in data) {
      /**
       * The hash of the application's cover image
       * @type {?string}
       */
      this.cover = data.cover_image;
    } else {
      this.cover ??= null;
    }

    if ('rpc_origins' in data) {
      /**
       * The application's RPC origins, if enabled
       * @type {string[]}
       */
      this.rpcOrigins = data.rpc_origins;
    } else {
      this.rpcOrigins ??= [];
    }

    if ('bot_require_code_grant' in data) {
      /**
       * If this application's bot requires a code grant when using the OAuth2 flow
       * @type {?boolean}
       */
      this.botRequireCodeGrant = data.bot_require_code_grant;
    } else {
      this.botRequireCodeGrant ??= null;
    }

    if ('bot_public' in data) {
      /**
       * If this application's bot is public
       * @type {?boolean}
       */
      this.botPublic = data.bot_public;
    } else {
      this.botPublic ??= null;
    }

    if ('popular_application_command_ids' in data) {
      /**
       * List of popular command
       * @type {?Collection<Snowflake, ApplicationCommand>}
       */
      this.popularCommands = new Collection();
      data.popular_application_command_ids.forEach(id => {
        this.popularCommands.set(id, this.commands?.cache?.get(id));
      });
    }

    /**
     * The owner of this OAuth application
     * @type {?(User|Team)}
     */
    this.owner = data.team
      ? new Team(this.client, data.team)
      : data.owner
      ? this.client.users._add(data.owner)
      : this.owner ?? null;
  }

  /**
   * Whether this application is partial
   * @type {boolean}
   * @readonly
   */
  get partial() {
    return !this.name;
  }

  /**
   * Obtains this application from Discord.
   * @returns {Promise<ClientApplication>}
   */
  async fetch() {
    const app = await this.client.api.oauth2.authorize.get({
      query: {
        client_id: this.id,
        scope: 'bot applications.commands',
      },
    });
    const user = this.client.users._add(app.bot);
    user._partial = false;
    this._patch(app.application);
    return this;
  }
}

module.exports = ClientApplication;
