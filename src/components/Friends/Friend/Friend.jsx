import style from "./Friend.module.css"

const  Friend = (props)=>{
    return(
                <div className={style.friend}>
                    <div className={style.name}>{props.name}</div>
                    <div className={style.address}>{props.address}</div>
                </div>
    )
}

export default Friend
