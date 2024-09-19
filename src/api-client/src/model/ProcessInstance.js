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
 * The ProcessInstance model module.
 * @module model/ProcessInstance
 * @version 0.1.0
 */
class ProcessInstance {
    /**
     * Constructs a new <code>ProcessInstance</code>.
     * @alias module:model/ProcessInstance
     */
    constructor() { 
        
        ProcessInstance.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessInstance</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessInstance} obj Optional instance to populate.
     * @return {module:model/ProcessInstance} The populated <code>ProcessInstance</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessInstance();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('processDefinitionKey')) {
                obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
            }
            if (data.hasOwnProperty('variableHolder')) {
                obj['variableHolder'] = ApiClient.convertToType(data['variableHolder'], 'String');
            }
            if (data.hasOwnProperty('caughtEvents')) {
                obj['caughtEvents'] = ApiClient.convertToType(data['caughtEvents'], 'String');
            }
            if (data.hasOwnProperty('activities')) {
                obj['activities'] = ApiClient.convertToType(data['activities'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProcessInstance</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProcessInstance</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['processDefinitionKey'] && !(typeof data['processDefinitionKey'] === 'string' || data['processDefinitionKey'] instanceof String)) {
            throw new Error("Expected the field `processDefinitionKey` to be a primitive type in the JSON string but got " + data['processDefinitionKey']);
        }
        // ensure the json data is a string
        if (data['state'] && !(typeof data['state'] === 'string' || data['state'] instanceof String)) {
            throw new Error("Expected the field `state` to be a primitive type in the JSON string but got " + data['state']);
        }
        // ensure the json data is a string
        if (data['variableHolder'] && !(typeof data['variableHolder'] === 'string' || data['variableHolder'] instanceof String)) {
            throw new Error("Expected the field `variableHolder` to be a primitive type in the JSON string but got " + data['variableHolder']);
        }
        // ensure the json data is a string
        if (data['caughtEvents'] && !(typeof data['caughtEvents'] === 'string' || data['caughtEvents'] instanceof String)) {
            throw new Error("Expected the field `caughtEvents` to be a primitive type in the JSON string but got " + data['caughtEvents']);
        }
        // ensure the json data is a string
        if (data['activities'] && !(typeof data['activities'] === 'string' || data['activities'] instanceof String)) {
            throw new Error("Expected the field `activities` to be a primitive type in the JSON string but got " + data['activities']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
ProcessInstance.prototype['key'] = undefined;

/**
 * @member {String} processDefinitionKey
 */
ProcessInstance.prototype['processDefinitionKey'] = undefined;

/**
 * @member {Date} createdAt
 */
ProcessInstance.prototype['createdAt'] = undefined;

/**
 * @member {module:model/ProcessInstance.StateEnum} state
 */
ProcessInstance.prototype['state'] = undefined;

/**
 * @member {String} variableHolder
 */
ProcessInstance.prototype['variableHolder'] = undefined;

/**
 * @member {String} caughtEvents
 */
ProcessInstance.prototype['caughtEvents'] = undefined;

/**
 * @member {String} activities
 */
ProcessInstance.prototype['activities'] = undefined;





/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */
ProcessInstance['StateEnum'] = {

    /**
     * value: "active"
     * @const
     */
    "active": "active",

    /**
     * value: "completed"
     * @const
     */
    "completed": "completed",

    /**
     * value: "terminated"
     * @const
     */
    "terminated": "terminated"
};



export default ProcessInstance;
