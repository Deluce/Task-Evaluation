//validators for numbers
function isPositive (val) {
	return val > 0;
}

//validators for strings
function isOption (str) {
	optionList = ['Pending List', 'Available', 'Item Sold',
	 			  'Pending Payment', 'Seller Payout Completed'];
	return optionList.indexOf(str) >= 0; 
}

function isCondition (str) {
	conditionList = ['New', 'Old'];
	return conditionList.indexOf(str) >= 0;
}

function isPayMethod (str) {
	paymethodList = ['Wiretransfer', 'Cash', 'Paypal', 'Cheque', 'Credit Card'];
	return paymethodList.indexOf(str) >= 0;
}