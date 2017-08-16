class File {
  constructor(properties){
    this.id = properties._id || "";
    this.name = properties.name || "";
    this.parentId = properties.parentId || "";
    this.dateModified = properties.dateModified || "";
    this.size = properties.size || "";
  }
}

export default File
