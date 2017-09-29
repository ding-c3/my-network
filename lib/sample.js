/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.mynetwork.C3Transaction} trade - the trade to be processed
 * @transaction
 */
function tradeCommodity(c3Transaction) {
    c3Transaction.c3asset.owner = c3Transaction.newOwner;
    return getAssetRegistry('org.acme.mynetwork.C3Asset')
        .then(function (assetRegistry) {
            return assetRegistry.update(c3Transaction.c3asset);
        });
}