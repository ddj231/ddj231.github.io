
export function Footer(props){
    let {mode} = props;
    mode = 'light';
    let bgColor = mode == 'dark' ? 'darkmodesection2' : '';
    let textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    return(
            <div className={`${bgColor} ${textclass} infosection`} >
            <div className="row">
                <div className={`col-md-6 footertext ${textclass}`}>
                Made with <span style={{color: "#e25555"}}>&#9829;</span> in Duluth, Georgia
                </div>
            </div>
            <div className="row">
                <a className={`col-md-1 footerlink ${textclass}`} href="https://github.com/ddj231">Github</a>
                <a className={`col-md-1 footerlink ${textclass}`} href="https://www.linkedin.com/in/daye-jack/">LinkedIn</a>
            </div>
            <div className="row">
                <div className={`col-md-12 footertext ${textclass}`}>
                    Built with <a className={`footerlink ${textclass}`} href="https://reactjs.org/">Reactjs</a>
                </div>
            </div>
            <div className="row">
                <div className={`col-md-12 footertext ${textclass}`}>
                Site format inspired by Aditi Mohanty's personal website
                </div>
            </div>
            <div className="row">
                <div className={`col-12 footertext ${textclass}`}><i>© 2020 Copyright Daye Jack. All rights reserved</i></div>
            </div>
            </div>
    )
}