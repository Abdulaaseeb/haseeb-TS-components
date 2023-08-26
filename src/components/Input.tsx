import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

type Inpprops = {
    inpValue: string,
    inpType: string,
    inpChange: any
}

export default function Input(props: Inpprops) {
    const { inpValue, inpType, inpChange } = props
    return (

        <input className='mt-5 btn btn-danger rounded mx-5 w-25' value={inpValue} type={inpType} onChange={inpChange} />

    )
}




