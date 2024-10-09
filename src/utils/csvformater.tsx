export const csvformater = (file: Array<string[]>) => {
    let data: Array<any> = [...file];
    let new_data: Array<{column: string, column_two: string}> = []
    data.forEach(arr => {
        arr.forEach((a: Array<string>) => {
            let tmp: Array<string> = a.filter(Boolean)
            let obj = {
                'column': tmp[0] || "",
                'column_two': tmp[1] || ""
            }
            new_data.push(obj)
        })
    })    
    return new_data;
}