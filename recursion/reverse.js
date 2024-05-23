function reverse(str) {
    if (str.length === 1) return str;

    return reverse(str.substring(1)).concat(str.substring(0, 1));
};

console.log(reverse('awesome'));
console.log(reverse('rithmschool'));