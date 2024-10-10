export const csvformater = (file: Array<string[]>) => {
    let data: Array<any> = [...file];
    let new_data: Array<{ column: string, column_two: string }> = []
    data.forEach(arr => {
        arr.forEach((a: Array<string>) => {
            let tmp: Array<string> = a.filter(Boolean)
            if (tmp[0] && tmp[1] && (tmp[0].trim() !== "" && tmp[1].trim() !== "")) {

                let obj = {
                    'column': tmp[0].trim() || "",
                    'column_two': tmp[1].trim() || ""
                }
                new_data.push(obj)
            }
        })
    })
    console.log(new_data);
    
    return new_data;
}