function processArray(array) {
    for (i = 0; i < array.length; i++) {
        console.log(i);
        splitString(array, i);
    }
}

function splitString(input, index) {
    const j = input[index].split(" ");
    const count = parseInt(j[0]);
    const domains = j[1].split(".");
    console.log('here is the count: ' + count);
    console.log('here is the domain: ' + domains);
    countVisits(count, domains);
}

function countVisits(count, subdomains) {
    for (i = 0; i < subdomains.length; i++) {
        let temp = ``;
        for (j = i; j < subdomains.length; j++) {
            if (j == subdomains.length - 1) {
                temp+= `${subdomains[j]}`;
                // checkDomain(count, temp);
            } else {
                temp+= `${subdomains[j]}.`
                // checkDomain(count, temp);
            }
        }
        // console.log('this is what temp looks like: ' + temp);
        checkDomain(count, temp);
    }
}

function checkDomain(visitCount, subdomainsList) {
    // console.log('here is the count ' + count)
    // console.log('here is the domain you are checking ' + subdomains)
    if (domainPairs[subdomainsList]) {
        domainPairs[subdomainsList] += visitCount;
    } else {
        domainPairs[subdomainsList] = visitCount;
    }
}

const domainPairs = {};
cpdomains = ["9000 discuss.leetcode.com", "1 discuss.leetcode.com", "2 email.com"]
processArray(cpdomains);
console.log(domainPairs);