// jshint ignore: start

/**
 * Created by Vadim on 31.07.2014.
 */
'use strict';

/**
 * `BadRequestError` error.
 *
 * @api public
 */
function BadRequestError(message) {
    Error.call(this);
    Error.captureStackTrace(this, arguments.callee);
    this.name = 'BadRequestError';
    this.message = message || null;
}

/**
 * Inherit from `Error`.
 */
BadRequestError.prototype.__proto__ = Error.prototype;


/**
 * Expose `BadRequestError`.
 */
module.exports = BadRequestError;