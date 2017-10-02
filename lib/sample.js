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

/**
 * Track the trade of a commodity from one trader to another
 * @param {org.acme.mynetwork.C3SmartContractTransaction} contract - the trade to be processed
 * @transaction
 */
function smartContractTransaction(transaction) {
    var contract = transaction.c3smartContract;
  
    // check conditions
    if (contract.number === 0) {
      throw Error('already used');
    }
  
    if (contract.expiredOn < Date.now()) {
      throw Error('expired');
    }
  
    query(buildQuery('SELECT org.acme.mynetwork.C3Asset WHERE (owner == _$org AND ' + contract.condition + ')'), {
      org: 'resource:org.acme.mynetwork.C3Organization#' + contract.oldOwner.name
    }).then(function (queryResults) {
      return Promise.all(queryResults.map(function (asset) {
        return getAssetRegistry('org.acme.mynetwork.C3Asset').then(function (assetRegistry) {
          asset.owner = contract.newOwner;
          if (contract.number === 0) {
            return Promise.resolve();
          }
          contract.number -= 1;
          return assetRegistry.update(asset);
        });
      }));
    }).then(function () {
      return getAssetRegistry('org.acme.mynetwork.C3SmartContract');
    }).then(function (smartContractRegistry) {
      return smartContractRegistry.update(contract);
    });
  }