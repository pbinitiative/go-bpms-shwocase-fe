/**
 * BPMN Engine OpenAPI
 * REST API for lib-bpmn-engine
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Job model module.
 * @module model/Job
 * @version 0.1.0
 */
class Job {
    /**
     * Constructs a new <code>Job</code>.
     * @alias module:model/Job
     */
    constructor() { 
        
        Job.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Job</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Job} obj Optional instance to populate.
     * @return {module:model/Job} The populated <code>Job</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Job();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('elementId')) {
                obj['elementId'] = ApiClient.convertToType(data['elementId'], 'String');
            }
            if (data.hasOwnProperty('elementInstanceKey')) {
                obj['elementInstanceKey'] = ApiClient.convertToType(data['elementInstanceKey'], 'String');
            }
            if (data.hasOwnProperty('processInstanceKey')) {
                obj['processInstanceKey'] = ApiClient.convertToType(data['processInstanceKey'], 'String');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Job</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Job</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['elementId'] && !(typeof data['elementId'] === 'string' || data['elementId'] instanceof String)) {
            throw new Error("Expected the field `elementId` to be a primitive type in the JSON string but got " + data['elementId']);
        }
        // ensure the json data is a string
        if (data['elementInstanceKey'] && !(typeof data['elementInstanceKey'] === 'string' || data['elementInstanceKey'] instanceof String)) {
            throw new Error("Expected the field `elementInstanceKey` to be a primitive type in the JSON string but got " + data['elementInstanceKey']);
        }
        // ensure the json data is a string
        if (data['processInstanceKey'] && !(typeof data['processInstanceKey'] === 'string' || data['processInstanceKey'] instanceof String)) {
            throw new Error("Expected the field `processInstanceKey` to be a primitive type in the JSON string but got " + data['processInstanceKey']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
Job.prototype['key'] = undefined;

/**
 * @member {String} elementId
 */
Job.prototype['elementId'] = undefined;

/**
 * @member {String} elementInstanceKey
 */
Job.prototype['elementInstanceKey'] = undefined;

/**
 * @member {String} processInstanceKey
 */
Job.prototype['processInstanceKey'] = undefined;

/**
 * @member {String} state
 */
Job.prototype['state'] = undefined;

/**
 * @member {Date} createdAt
 */
Job.prototype['createdAt'] = undefined;






export default Job;

