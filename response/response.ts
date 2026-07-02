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
