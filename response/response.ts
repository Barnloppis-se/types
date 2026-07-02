import type { ItemObject } from "../data/item"

/**
 * Barnloppis backend response type
 */
export interface Response {
    /**
     * Response status
     *
     * `True` of there was no error
     * and `False` if there is an
     * error from the server
     */
    status: boolean
}



/**
 * Barnloppis API error response
 */
export interface Error extends Response {
    status: false

    /**
     * Error cause
     *
     * This is `undefined` if `status` is `True`
     * and thus the server did not respond with
     * an error. Otherwise this contains the
     * error cause message - the source of the
     * error from the server.
     */
    cause: string

    /**
     * Error message
     *
     * See {@link cause} as this uses the
     * same logic for when the message
     * is `undefined` and not.
     */
    message: string
}



/**
 * Barnloppis API item response
 */
export interface ItemResponse extends Response {
    status: true

    /**
     * Item ID
     *
     * If the server responded without any errors
     * this value is the ID of the item.
     */
    item: string
}



/**
 * Barnloppis API item list response
 *
 * This is used when a list of items
 * is the result. Such as searching
 * in the database after one or more
 * items.
 */
export interface ItemListResponse extends Response {
    status: true

    /**
     * Item list response data
     */
    data: {
        /**
         * Amount of items available
         *
         * If `*` was used in the request
         * then this is the amount of items
         * in the category database.
         * Otherwise it is the size of the
         * database.
         *
         * #### Example
         * If items was `*` and sort `date`
         * then this is the amount of items
         * in the category date.
         * However if items was `id1,id2,id3`
         * then this is the size of the hole
         * database - the amount of items.
         *
         * It is also possible to get the
         * amount of items by specifying
         * a sorting method that applies
         * to the hole database such as
         * sorting after item upload `date`
         */
        size: number,

        /**
         * List of items included in the
         * search result.
         */
        items: ItemObject[]
    }
}



/**
 * Barnloppis API image response
 */
export interface ImageResponse extends Response {
    status: true

    /**
     * Image index
     *
     * The index of the uploaded
     * image in the item image list.
     */
    index: number
}
