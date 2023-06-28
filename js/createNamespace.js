const createNamespace = (path) => {
    const splitting = path.split('.');

    return splitting.reduceRight((acc, item) => ({[item]: acc}), {})
};



console.log(createNamespace("a.b.c.d.e"));
// {a:{b:{c:{d:{e:{}}}}}}
