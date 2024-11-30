export const clearCache = (keysToKeep: string[]) => {

    Object.keys(localStorage).forEach(key => {
        if (!keysToKeep.includes(key)){
            localStorage.removeItem(key)
        }
    })

}