import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


type selectType = {
    label:string,
    options:any[],
    getValue : any,
  }
  
  function Select(selectProps:selectType){
    const {label,options,getValue,} = selectProps
  let changeVal = (val:any)=>{
      getValue(val)
    }
    return(
      <div>
        <p className='text-white'>{label}</p>
        <select className='w-50 bg-danger text-white p-3 border rounded' onChange={(e) => changeVal(e.target.value)}>
          {options.map((x,i) => {
            return(
              <option key={i} value={x.value}>{x.displayName}</option>
            )
          })}
        </select>
      </div>
    )
  }
  

  export default Select