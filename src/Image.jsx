export default function Image(props){

    return(
        <>
        <article className="shadow-md bg-white rounded-3xl  p-5">
            <img src={props.urls.full} alt={props.user.name} loading="lazy"  className="h-52  w-full  object-cover  rounded-3xl
            md:h-80 "/>
            <div className="pt-5">
                 <img src={props.user.profile_image.large} alt  = {props.user.name} loading="lazy"
                 className="w-20 rounded-full shadow "/>
            </div>

        </article>
        </>
    )
}