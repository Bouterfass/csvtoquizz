export const csvformater = (file: Array<string[] | object>, extension: string) => {

    console.log("EXTENSION: ", extension);

    if (extension === "json") {
        console.log(file);
        let json_data: Array<{ column: string, column_two: string }> = [];
        const obj = { ...file[0] }
        for (const property in obj)
            json_data.push({ column: property.trim(), column_two: obj[property].trim() })
        return json_data;


    }


    if (extension === "csv") {
        let data: Array<any> = [...file];

        let new_data: Array<{ column: string, column_two: string }> = []
        data.forEach((arr, index) => {
            let arr_tmp: Array<string> = arr.filter(Boolean)
            if (arr_tmp.length > 0) {
                new_data.push({ column: arr[0].trim(), column_two: arr[1].trim() })
            }
        })

        return new_data;
    }
    return [];
}