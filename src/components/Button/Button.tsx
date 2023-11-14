import style from '@/components/Button/btn.module.css'

interface IProps{
    text: string
}

export default function Button({text}: IProps) {
    return (
        <div>
            <button className={style.btnStyle}>{text}</button>
        </div>
    )
}