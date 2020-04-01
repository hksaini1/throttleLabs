
const columns=[
  {
    title:"Sr.No",
    field:'srNo'
  },
  {
    title: "ID",
    field: "id"
  },
    {
    title: "Username",
    field: "real_name"
  }, {
    title: "Location",
    field: "tz"
  },
  {
    title:"Action",
    field:"action"
  }
]

const tableColumn=()=>{
    return columns
}

export{tableColumn};