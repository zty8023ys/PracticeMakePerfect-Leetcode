interface ListNode {
    val: any,
    next: ListNode
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let ListNode = (v:ListNode) => {
    return {
        val: v,
        next: null
    }
}