import type { UUID } from "crypto"
import type { Item } from "../upload/uploadData"

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
     * Item data
     */
    data: Item
}
