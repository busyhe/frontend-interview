// areDeeplyEqual
function areDeeplyEqual(a, b) {
    if (a === b) {
        return true;
    }
    
    if (typeof a !== typeof b) {
        return false;
    }
    
    if (typeof a !== 'object' || a === null || b === null) {
        return false;
    }
    
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    
    for (const key in a) {
        if (!areDeeplyEqual(a[key], b[key])) {
        return false;
        }
    }
    
    return true;
}