import Friend from "./Friend/Friend";
import style from "./Friends.module.css"


const  Friends = (props)=>{
    const friend = props.friendData.map(friendData=> <Friend name={friendData.name} address={friendData.address} />)
    return(
        <section className={style.friends}>
            <div className={style.title}>
                <h1>Friends</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, obcaecati.</p>
            </div>
            <div className={style.content}>
                {friend}
            </div>

        </section>
    )
}

export default Friends
