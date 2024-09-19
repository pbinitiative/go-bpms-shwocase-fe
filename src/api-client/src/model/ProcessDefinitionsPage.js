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
import PageMetadata from './PageMetadata';
import ProcessDefinitionSimple from './ProcessDefinitionSimple';

/**
 * The ProcessDefinitionsPage model module.
 * @module model/ProcessDefinitionsPage
 * @version 0.1.0
 */
class ProcessDefinitionsPage {
    /**
     * Constructs a new <code>ProcessDefinitionsPage</code>.
     * @alias module:model/ProcessDefinitionsPage
     * @implements module:model/PageMetadata
     */
    constructor() { 
        PageMetadata.initialize(this);
        ProcessDefinitionsPage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProcessDefinitionsPage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessDefinitionsPage} obj Optional instance to populate.
     * @return {module:model/ProcessDefinitionsPage} The populated <code>ProcessDefinitionsPage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProcessDefinitionsPage();
            PageMetadata.constructFromObject(data, obj);

            if (data.hasOwnProperty('offset')) {
                obj['offset'] = ApiClient.convertToType(data['offset'], 'Number');
            }
            if (data.hasOwnProperty('size')) {
                obj['size'] = ApiClient.convertToType(data['size'], 'Number');
            }
            if (data.hasOwnProperty('count')) {
                obj['count'] = ApiClient.convertToType(data['count'], 'Number');
            }
            if (data.hasOwnProperty('items')) {
                obj['items'] = ApiClient.convertToType(data['items'], [ProcessDefinitionSimple]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProcessDefinitionsPage</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProcessDefinitionsPage</code>.
     */
    static validateJSON(data) {
        if (data['items']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['items'])) {
                throw new Error("Expected the field `items` to be an array in the JSON data but got " + data['items']);
            }
            // validate the optional field `items` (array)
            for (const item of data['items']) {
                ProcessDefinitionSimple.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Number} offset
 */
ProcessDefinitionsPage.prototype['offset'] = undefined;

/**
 * @member {Number} size
 */
ProcessDefinitionsPage.prototype['size'] = undefined;

/**
 * @member {Number} count
 */
ProcessDefinitionsPage.prototype['count'] = undefined;

/**
 * @member {Array.<module:model/ProcessDefinitionSimple>} items
 */
ProcessDefinitionsPage.prototype['items'] = undefined;


// Implement PageMetadata interface:
/**
 * @member {Number} offset
 */
PageMetadata.prototype['offset'] = undefined;
/**
 * @member {Number} size
 */
PageMetadata.prototype['size'] = undefined;
/**
 * @member {Number} count
 */
PageMetadata.prototype['count'] = undefined;




export default ProcessDefinitionsPage;

