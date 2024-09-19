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
 * The ProcessDefinitionSimple model module.
 * @module model/ProcessDefinitionSimple
 * @version 0.1.0
 */
class ProcessDefinitionSimple {
    /**
     * Constructs a new <code>ProcessDefinitionSimple</code>.
     * @alias module:model/ProcessDefinitionSimple
     */
    constructor() { 
        
        ProcessDefinitionSimple.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessDefinitionSimple</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessDefinitionSimple} obj Optional instance to populate.
     * @return {module:model/ProcessDefinitionSimple} The populated <code>ProcessDefinitionSimple</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessDefinitionSimple();

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('bpmnProcessId')) {
                obj['bpmnProcessId'] = ApiClient.convertToType(data['bpmnProcessId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProcessDefinitionSimple</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProcessDefinitionSimple</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['bpmnProcessId'] && !(typeof data['bpmnProcessId'] === 'string' || data['bpmnProcessId'] instanceof String)) {
            throw new Error("Expected the field `bpmnProcessId` to be a primitive type in the JSON string but got " + data['bpmnProcessId']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
ProcessDefinitionSimple.prototype['key'] = undefined;

/**
 * @member {Number} version
 */
ProcessDefinitionSimple.prototype['version'] = undefined;

/**
 * @member {String} bpmnProcessId
 */
ProcessDefinitionSimple.prototype['bpmnProcessId'] = undefined;






export default ProcessDefinitionSimple;
