
interface IProps{
    text: string
}

export default function Button({text}: IProps) {
    return (
        <div>
            <button style={{height:'100px', width: '300px', backgroundColor:'green'}}>{text}</button>
        </div>
    )
}