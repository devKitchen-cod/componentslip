'use client';
import style from "@/components/Button/button.module.css";
import axios from "axios";

interface IProps {
  text: string;
}

export default function Button({ text }: IProps) {

  const handleClick = async () => {
    const res = await axios.get("http://localhost:8080/getAllAirports");
    console.log('res.data', res.data);
  };
  return (
    <div>
      <button className={style.btnStyle} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}
