// enum - store constants; duplicate value is not allowed here
// enum types: numeric, string, hetergenous

// numeric enum
enum RequestType {
    readData=1,
    saveData,
    deleteData,
}
console.log(RequestType)
console.log(RequestType.readData)

// string enum
enum RequestType2 {
    readData = "READ DATA",
    deleteData = "DELETE DATA",
}
console.log(RequestType2["deleteData"])

//hetergenous enum
enum RequestType3 {
    readData = "READ DATA",
    deleteData = "DELETE DATA",
    id = 101,
}
console.log(RequestType3)