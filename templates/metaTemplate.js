/**
 * @swagger
 * definitions:
 *  FormAdd:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: User has authority to access this
 *          success:
 *            type: boolean
 *            example: true
 *  UnAuthorize:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: User has no authority to access this
 *          success:
 *            type: boolean
 *            example: false
 *  SendSuccess:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Data fetched successfully
 *          success:
 *            type: boolean
 *            example: true
 *  SendCreated:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Data created/updated/deleted successfully
 *          success:
 *            type: boolean
 *            example: true
 *  SendNotFound:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Data not found
 *          success:
 *            type: boolean
 *            example: false
 *  SendInvalidPayload:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Key ... must be provided
 *          success:
 *            type: boolean
 *            example: false
 *  SendResourceAlreadyExist:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Data is already exist
 *          success:
 *            type: boolean
 *            example: false
 *  SendInternalServerError:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Internal Server Error
 *          success:
 *            type: boolean
 *            example: false
 *  SendBadRequest:
 *    properties:
 *      meta:
 *        type: object
 *        properties:
 *          message:
 *            type: string
 *            example: Data cannot be created/updated/deleted
 *          success:
 *            type: boolean
 *            example: false
 */
