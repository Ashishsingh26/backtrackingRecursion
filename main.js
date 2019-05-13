function generate_palindromic_decompositions(s) {
	let results = []
	let currResult = []
	
	palinDecompHelper(s, 0, results, currResult)

	return results
}
function palinDecompHelper(s, start, results, currResult) {
	if (start === s.length) {
		results.push(currResult.join('|'))
		return
	}

	for (let i = start; i < s.length; i++) {
		let substring = s.substring(start, i+1)
		if (isPalin(s, start, i)) {
		    // choose
			currResult.push(substring)
			// explore
			palinDecompHelper(s, i+1, results, currResult)
			// unchoose
			currResult.pop()
		}
	}
}
function isPalin(s, lo, hi) {
    while (lo < hi) {
        if (s[lo] !== s[hi]) return false
        lo++; hi--
    }
	return true
}
