var reverse = prompt ("Add number bro", "for exmp 231312")

function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}

document.writeln(reverse_a_number(reverse));

alert (reverse_a_number(reverse))