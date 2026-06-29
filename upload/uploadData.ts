/**
 * Item error or anomaly.
 *
 * The reason why the item was or is
 * being uploaded to the server.
 */
export enum TAGS {
    "Omärkt", // This needs to be first

    "Trasig",
    "Fläckigt",
    "Fel säsong",
    "Slitet",
    "Nopprigt",
    "Felmärkt",
    "Ej tillåten",
    "Ej barn / ungdom",
}

/**
 * Item tags list
 *
 * A list of all the tags available
 * for items. See {@link Types.Upload.TAGS}
 */
export const tags = Object.keys(TAGS).filter(value => isNaN(Number(value)))



/**
 * Item type
 *
 * This represents the type used to describe
 * an item that is in any way unfit to sell.
 */
export type Item = {
    /**
     * Item tag
     *
     * The reason why it is marked,
     * see {@link Types.Upload.TAGS}
     */
    tag: keyof typeof TAGS,

    /**
     * Item seller
     *
     * This may be null if the item
     * misses a seller.
     */
    seller?: number,

    /**
     * Images of the item
     *
     * A list of images taken of
     * the item. This may be more
     * than one but should not be
     * less than one.
     */
    images: string[]
}
