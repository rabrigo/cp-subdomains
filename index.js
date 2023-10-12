function sortInput(input) {
    console.log(input);
    const visitsDomains = input[0].split(" ");
    const visitCount = visitsDomains[0];
    const subdomains = visitsDomains[1].split(".");
    console.log(visitCount);
    console.log(subdomains);
    countVisits(visitCount, subdomains)
}

function countVisits(count, domains) {
    let output = [];
    for (i = domains.length - 1; i >= 0; i--) {
        if (i >= domains.length - 1) {
            output.push(`${count} ${domains[i]}`);
        } else {
            output.push(`${count} ${domains[i]}`)
        }
    }
    console.log(output);
}

cpdomains = ["9001 discuss.leetcode.com"]
sortInput(cpdomains);