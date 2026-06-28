import type { UUID } from "crypto"
import type { Item, TAGS } from "../upload/uploadData"

/**
 * Item object type, see {@link Item}
 *
 * Just like {@link Item} this stores
 * the data of a marked item. However
 * unlike `Item` this object contains
 * data assigned by the server.
 */
export type ItemObject = {
    /**
     * Item ID
     */
    id: UUID,

    /**
     * Item creation date
     *
     * This is the time and
     * date of when the item
     * was added to the server
     */
    date: string,

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
