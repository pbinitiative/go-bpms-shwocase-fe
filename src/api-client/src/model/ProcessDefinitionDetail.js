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
import ProcessDefinitionSimple from './ProcessDefinitionSimple';

/**
 * The ProcessDefinitionDetail model module.
 * @module model/ProcessDefinitionDetail
 * @version 0.1.0
 */
class ProcessDefinitionDetail {
    /**
     * Constructs a new <code>ProcessDefinitionDetail</code>.
     * @alias module:model/ProcessDefinitionDetail
     * @implements module:model/ProcessDefinitionSimple
     */
    constructor() { 
        ProcessDefinitionSimple.initialize(this);
        ProcessDefinitionDetail.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessDefinitionDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessDefinitionDetail} obj Optional instance to populate.
     * @return {module:model/ProcessDefinitionDetail} The populated <code>ProcessDefinitionDetail</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessDefinitionDetail();
            ProcessDefinitionSimple.constructFromObject(data, obj);

            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('bpmnProcessId')) {
                obj['bpmnProcessId'] = ApiClient.convertToType(data['bpmnProcessId'], 'String');
            }
            if (data.hasOwnProperty('bpmnData')) {
                obj['bpmnData'] = ApiClient.convertToType(data['bpmnData'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProcessDefinitionDetail</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProcessDefinitionDetail</code>.
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
        // ensure the json data is a string
        if (data['bpmnData'] && !(typeof data['bpmnData'] === 'string' || data['bpmnData'] instanceof String)) {
            throw new Error("Expected the field `bpmnData` to be a primitive type in the JSON string but got " + data['bpmnData']);
        }

        return true;
    }


}



/**
 * @member {String} key
 */
ProcessDefinitionDetail.prototype['key'] = undefined;

/**
 * @member {Number} version
 */
ProcessDefinitionDetail.prototype['version'] = undefined;

/**
 * @member {String} bpmnProcessId
 */
ProcessDefinitionDetail.prototype['bpmnProcessId'] = undefined;

/**
 * @member {String} bpmnData
 */
ProcessDefinitionDetail.prototype['bpmnData'] = undefined;


// Implement ProcessDefinitionSimple interface:
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




export default ProcessDefinitionDetail;
