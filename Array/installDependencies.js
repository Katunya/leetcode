
const dependencies = {
    react: [],
    redux: ['typescript', 'eslint'],
    'react-redux': ['react', 'redux', 'typescript'],
    typescript: ['eslint'],
    webpack: ['react'],
    eslint: ['webpack'],
};





/**
 * @param {Object.<String, String[]>} deps
 * @returns {String[]}
 */
const instalDependencies = (deps) => {
    if(Object.keys(deps).length === 0) return [];
    const result = [];
    const stack = [];

    while(Object.keys(deps).length || stack.length){
        const deepName = stack.pop();

        if(deepName) {
            result.push(deepName);
        }
        Object.entries(deps).forEach(([key, value]) => {
            deps[key] = value.filter((item) => item !== deepName);
            if(!deps[key].length) {
                stack.push(key);
                delete deps[key]
            }
        })
    }


    return result;
};





console.log(instalDependencies(dependencies));
// ['react', 'webpack', 'eslint', 'typescript', 'redux', 'react-redux']
