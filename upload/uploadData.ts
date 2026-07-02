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
 * Database search type
 */
export type DBSearch = "date" | "oldest" | "seller" | keyof typeof TAGS



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
}
