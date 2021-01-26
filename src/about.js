
export function AboutSection(props){
    let {mode} = props;
    mode = 'light';
    let bgColor = mode == 'dark' ? 'darkmodesection2' : '';
    let textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    console.log(textclass)
    let nametextcolor = mode === 'dark' ? 'white' : 'black';
    let githubIcon;
    let linkedinIcon;
    if(mode == 'dark'){
        githubIcon = <a href="https://github.com/ddj231"><img className="socialicon" src='./GitHub-Mark-Light-64px.png'/></a>
        linkedinIcon = <a href="https://www.linkedin.com/in/daye-jack/"><img className="socialicon" src='./linkedindarkmode.png'/></a>
    }
    else{
        githubIcon = <a href="https://github.com/ddj231"><img className="socialicon" src='./GitHub-Mark-64px.png'/></a>
        linkedinIcon = <a href="https://www.linkedin.com/in/daye-jack/"><img className="socialicon" src='./linkedInIcon.png'/></a>
    }
    
    return(
        <div className={`container h-100 ${bgColor} ${textclass}`}>
            <div className="row">
            <div className={`col-md-6 ${textclass}`}>
            <h6 id="hello" className={textclass}>👋 Hello!👋 My name is</h6>
            <h2 id="name" style={{color: nametextcolor}}>Daye Jack.</h2>
            <p className="intro">
                I'm a software developer from <a className="prettylink" 
                href="https://www.google.com/maps/place/Duluth,+GA/@34.000135,-84.173485,13z/data=!3m1!4b1!4m5!3m4!1s0x88f5981d72a575a3:0x8526c08a3ce2d8e3!8m2!3d34.0028786!4d-84.1446376">
                    Duluth, GA
                </a>.
            </p>
            <p className="intro">
                I recently graduated from <a className="prettylink"
                href="https://www.nyu.edu"
                >
                New York University</a>, 
                where I studied Computer Science.
                You can access my <a className="prettylink" href="./Daye_Jack_Resume_2021.pdf">resume</a> here.
            </p>
            <p className="intro">
                I enjoy developement on all parts of the stack.
            </p>
            {githubIcon}
            {linkedinIcon}
            </div>
            <div className="col-md-6">
            <img id="profileimg" src="./ProfilePictureCartoon.png"/>
            </div>
            </div>
        </div>
    )
}