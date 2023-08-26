import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

type cardprops = {
    Img: any,
    Id: number
    Name: string,
    FName: string,
    Class: string,
    Age: number
}

export default function Card(props: cardprops) {
    const { Img, Id, Name, FName, Class, Age } = props
    return (
        <div className='my-5'>
            <p>{Img}</p>
            <p className='text-white'>ID : {Id}</p>
            <p className='text-white'>NAME : {Name}</p>
            <p className='text-white'>F.NAME : {FName}</p>
            <p className='text-white'>CLASS : {Class}</p>
            <p className='text-white'>AGE : {Age}</p>
        </div>
    )

}