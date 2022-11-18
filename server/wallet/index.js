const Wallet = require('./schema')
module.exports = async function(waw) {
	waw.on('transaction_create', async transaction=>{
		const wallet = await Wallet.findById(transaction.wallet);
		if (transaction.amount) {
			wallet.balance += transaction.amount;
			await wallet.save();
		}
	});
};
