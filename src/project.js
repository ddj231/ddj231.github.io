export function ProjectCard (props){
    let {bg_theme, mode, tags} = props;
    bg_theme = bg_theme ? bg_theme: "";
    let badges = [];
    if(tags){
        badges = tags.map((tag) => {
            return(
                <span key={tag} className="techbadge">{tag}</span>
            );
        })
    }

    mode = 'light';
    let bgColor = mode == 'dark' ? 'darkcard' : '';
    let textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    let nametextcolor = mode === 'dark' ? 'white' : 'black';

    return(
    <a href={props.link} className={`${bgColor} clickablecard border-0`}>
    <div className="card border-0">
        {props.image &&
            <img src={props.image}   className="card-img-top" alt="card image"/>
        }
        <div className={`card-body ${bgColor}`}>
        <h5 className={`card-title`} style={{color: nametextcolor}}>{props.name}</h5>
        <p className={`card-text description ${textclass}`}>{props.description}</p>
        <div>
            {badges}
        </div>
        </div>
    </div>
    </a>
    )
}